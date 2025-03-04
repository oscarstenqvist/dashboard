import { ThemeProvider } from '@mui/material/styles';
import ShoppingListView from '../shoppinglist/ShoppingListView';
import theme from '../styling/theme';
import { CssBaseline, Tab, Tabs } from '@mui/material';
import StockView from '../stock/StockView';
import useAppService from './AppService';

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
      {selectedTab === tabs[0] && <ShoppingListView />}
      {selectedTab === tabs[1] && <StockView />}
    </ThemeProvider>
  )
}
export default AppView