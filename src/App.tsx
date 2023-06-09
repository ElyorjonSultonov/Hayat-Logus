import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouting from "./routes/AppRouting";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";

function App() {
  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <AppRouting />
      </LocalizationProvider>
    </BrowserRouter>
  );
}
export default App;
