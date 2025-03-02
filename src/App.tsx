import { ThemeProvider } from '@mui/material/styles';
import ShoppingListView from './shoppinglist/ShoppingListView';
import theme from './styling/theme';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ShoppingListView />
    </ThemeProvider>
  )
}
export default App