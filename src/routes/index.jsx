import { BrowserRouter } from "react-router-dom";

import {AppRoutes} from "./app.routes";
import {AuthRoutes} from "./auth.routes";

export function BrowserRouterRoutes() {
  return(
    <BrowserRouter>
      {/* <AppRoutes /> */}
      <AuthRoutes />
    </BrowserRouter>
  );
};