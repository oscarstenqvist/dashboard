import { useCallback, useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';

const localStorageKey = "itemList";

interface Inputs {
  [uuid: string]: string;
}

const useShoppingList = () => {
  const { register, unregister, handleSubmit, setValue, watch } = useForm<Inputs>();
  const [lastAddedUuid, setLastAddedUuid] = useState<string | null>(null);
  const [showHeartView, setShowHeartView] = useState<boolean>(false);
  const lastTextFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (lastAddedUuid && lastTextFieldRef.current) {
      lastTextFieldRef.current.focus();
    }
  }, [lastAddedUuid]);
  const items = watch();

  const onSubmit: SubmitHandler<Inputs> = useCallback((data) => {
    localStorage.setItem(localStorageKey, JSON.stringify(data));
  }, []);

  //Easter egg
  useEffect(() => {
    const values = Object.values(items);
    if (values.some(value => value === "Rasa")) {
      setShowHeartView(true)
    }
    else {
      setShowHeartView(false);
    }
  }, [items]);

  //Set localStorage whenever user changes input/remove item
  useEffect(() => {
    void handleSubmit(onSubmit)();
  }, [items, handleSubmit, onSubmit]);

  //Fetch data from localstorage when component mounts
  useEffect(() => {
    const storedItems = localStorage.getItem(localStorageKey);
    if (storedItems) {
      const parsedItems: Inputs = JSON.parse(storedItems) as Inputs;
      Object.keys(parsedItems).forEach((uuid) => setValue(uuid, parsedItems[uuid]));
    }
  }, [setValue]);

  const addItem = () => {
    const newUuid = uuidv4();
    setValue(newUuid, "");
    setLastAddedUuid(newUuid);
  }

  const removeItem = (uuid: string) => {
    unregister(uuid);
    if (lastAddedUuid === uuid) {
      setLastAddedUuid(null);
    }
  };

  return { items, addItem, removeItem, register, showHeartView, lastAddedUuid, lastTextFieldRef }
}
export default useShoppingList;