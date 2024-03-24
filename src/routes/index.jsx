import { BrowserRouter } from "react-router-dom";

import {AppRoutes} from "./app.routes";
import {AuthRoutes} from "./auth.routes";

import { useAuth } from "../hooks/auth";
import { api } from "../services/api";
import { useEffect, useState } from "react";

export function BrowserRouterRoutes() {
  const {user} = useAuth();
  const [tokenStatus, setTokenStatus] = useState(false);

  useEffect(() => {
    async function checkToken() {
      const response = await api.get("/sessions");
      setTokenStatus(response.data);
    };
    checkToken();
  }, [user]);
  
  return(
    <BrowserRouter>
      {tokenStatus && user ? <AppRoutes /> : <AuthRoutes />}
      {/* && user needed to not break the application when the hook clear the user data on SingOut */}
    </BrowserRouter>
  );
};