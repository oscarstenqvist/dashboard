import { Stack, Tab, Tabs } from '@mui/material';
import ShoppingListView from '../shoppinglist/ShoppingListView';
import SportView from '../sport/SportView';
import StockView from '../stock/StockView';
import useAppService from './AppService';
import { defaultPadding, defaultSpacing } from '../styling/ThemeConstants';

function AppView() {
  const { tabs, selectedTab, handleTabChange } = useAppService();;
  return (
    <>
      <Tabs value={selectedTab} onChange={handleTabChange} variant="fullWidth">
        {tabs.map((value) => (
          <Tab key={value} label={value} value={value} />
        ))}
      </Tabs>
      <Stack padding={defaultPadding} spacing={defaultSpacing} alignItems="center">
        {selectedTab === "Sport" && <SportView />}
        {selectedTab === "Inköpslista" && <ShoppingListView />}
        {selectedTab === "Aktier" && <StockView />}
      </Stack>
    </>
  )
}
export default AppView