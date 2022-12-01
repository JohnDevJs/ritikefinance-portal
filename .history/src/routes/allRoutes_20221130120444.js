import React from "react";
import { Redirect } from "react-router-dom";
import ForgetPwd from "../pages/Authentication/Forget-password/Index";
import ResetPwd from "../pages/Authentication/Reset Password/index";

import verifyEmail from "../pages/Authentication/verifyEmail";
import Dashboard from "../pages/Dashboard/index";

const userRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
];

const authRoutes = [
  { path: "/login", component: ChooseLogin },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/reset-password/:id", component: ResetPwd },
  // { path: "/signup", component: ContinueRegister },
  // { path: "/VerifyEmail/:id", component: verifyEmail },
];

export { userRoutes, authRoutes };
