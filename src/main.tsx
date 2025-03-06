import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppView from './app/AppView.tsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './styling/theme.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppView />
    </ThemeProvider>
  </StrictMode>,
)