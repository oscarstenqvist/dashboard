import { ThemeProvider } from '@mui/material/styles';
import ShoppingListView from './shoppinglist/ShoppingListView';
import theme from './styling/theme';
import { CssBaseline, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import StockView from './stock/StockView';

const tabs = ["Inköpslista", "Aktier"]

function App() {
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);

  const handleTabChange = (_: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Tabs value={selectedTab} onChange={handleTabChange} variant="fullWidth">
        {tabs.map((value) => (
          <Tab key={value} label={value} value={value} />
        ))}
      </Tabs>
      {selectedTab === tabs[0] && <ShoppingListView />}
      {selectedTab === tabs[1] && <StockView />}
    </ThemeProvider>
  )
}
export default App