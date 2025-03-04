import { useState } from "react";

const useAppService = () => {
  const tabs = ["Inköpslista", "Aktier", "Sport",]
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);

  const handleTabChange = (_: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };
  return { tabs, selectedTab, handleTabChange }
}
export default useAppService;