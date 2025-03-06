import { useState } from "react";

const tabs = ["Sport", "Inköpslista", "Aktier",];

const useAppService = () => {
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);

  const handleTabChange = (_: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };
  return { tabs, selectedTab, handleTabChange }
}
export default useAppService;