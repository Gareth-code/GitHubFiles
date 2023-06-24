import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavigationBar from "./components/NavigationBar";
const App = () => { 
  return (
      <>
      <NavigationBar />
      <AppRouter />
      </>
    
  );
};

export default App
