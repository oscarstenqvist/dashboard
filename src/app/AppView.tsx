import { ThemeProvider } from '@mui/material/styles';
import ShoppingListView from '../shoppinglist/ShoppingListView';
import theme from '../styling/theme';
import { CssBaseline, Tab, Tabs } from '@mui/material';
import StockView from '../stock/StockView';
import useAppService from './AppService';
import SportView from '../sport/SportView';

function AppView() {
  const { tabs, selectedTab, handleTabChange } = useAppService();;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Tabs value={selectedTab} onChange={handleTabChange} variant="fullWidth">
        {tabs.map((value) => (
          <Tab key={value} label={value} value={value} />
        ))}
      </Tabs>
      {selectedTab === "Inköpslista" && <ShoppingListView />}
      {selectedTab === "Aktier" && <StockView />}
      {selectedTab === "Sport" && <SportView />}
    </ThemeProvider>
  )
}
export default AppView