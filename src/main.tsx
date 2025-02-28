import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { GlobalStyles } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const noBodyMarginPadding = {
  body: {
    margin: 0,
    padding: 0,
  },
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles styles={noBodyMarginPadding} />
    <App />
  </StrictMode>,
)