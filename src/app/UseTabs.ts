import { useState } from "react";

export const tabs = ["Sports", "Shoppinglist", "Stocks",];

const useTabs = () => {
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);

  const onTabChange = (_: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };
  return { tabs, selectedTab, onTabChange }
}
export default useTabs;