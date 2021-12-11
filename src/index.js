import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./styled/style.css"
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import { GearProvider } from "./context/Context"

ReactDOM.render(
  <React.StrictMode>
    
    <ChakraProvider>
    <GearProvider>
      <App/>
      </GearProvider>
    </ChakraProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

