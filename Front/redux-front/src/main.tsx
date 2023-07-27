import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@ui5/webcomponents-react';
import { Provider } from "react-redux";
import favorite from "./redux/favorite";

const rootElement = document.getElementById("root")

const root = ReactDOM.createRoot(rootElement as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={favorite}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode >
);