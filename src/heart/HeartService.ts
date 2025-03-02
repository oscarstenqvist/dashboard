import { useState } from "react";

const useHeart = () => {
  const [showBack, setShowBack] = useState(false);
  const handleEntered = () => {
    setShowBack(true);
  }
  const onClickBack = () => {
    localStorage.clear();
    window.location.reload()
  }
  return { showBack, handleEntered, onClickBack }
}
export default useHeart;