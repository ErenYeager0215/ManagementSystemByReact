import "./styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "./router/Router";
import { BrowserRouter } from "react-router-dom";

import theme from "./theme/theme";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
