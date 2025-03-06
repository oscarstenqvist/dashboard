import { Stack, Tab, Tabs } from '@mui/material';
import ShoppingListView from '../shoppinglist/ShoppingListView';
import SportView from '../sport/SportView';
import StockView from '../stock/StockView';
import { defaultPadding, defaultSpacing } from '../styling/ThemeConstants';
import useTabs from './UseTabs';

function AppView() {
  const { tabs, selectedTab, onTabChange } = useTabs();
  return (
    <>
      <Tabs value={selectedTab} onChange={onTabChange} variant="fullWidth">
        {tabs.map((value) => (
          <Tab key={value} label={value} value={value} />
        ))}
      </Tabs>
      <Stack padding={defaultPadding} spacing={defaultSpacing} alignItems="center">
        {selectedTab === tabs[0] && <SportView />}
        {selectedTab === tabs[1] && <ShoppingListView />}
        {selectedTab === tabs[2] && <StockView />}
      </Stack>
    </>
  )
}
export default AppView