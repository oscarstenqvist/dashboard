import { useState } from "react";
import { getCat } from "./CatApi";

const useCat = () => {
  const [catUrl, setCatUrl] = useState<string | null>(null);

  const updateCatUrl = async () => {
    setCatUrl(await getCat(1600, 900))
  }
  return { catUrl, updateCatUrl }
}
export default useCat;