import React from "react";
import { Redirect } from "react-router-dom";
import { LoginRoute, ForgotPasswordRoute, ResetPasswordRoute, VerifyEmailRoute, Dashboard, LogoutRoute, RegisterAsRoute, StudentRegRoute, TutorRegRoute } from "../components/RouteName"

import Login from "../pages/Authentication/Login"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import ResetPassword from "../pages/Authentication/ResetPassword"
import VerifiedEmail from "../pages/Authentication/VerifiedEmail"
import Logout from "../pages/Authentication/Logout"
import RegisterAs from "../pages/Authentication/RegisterAs"
import Dashboard from "../pages/Dashboard/index";

const userRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
];

const authRoutes = [
  { path: LoginRoute, exact: true, component: Login },
  { path: ForgotPasswordRoute, exact: true, component: ForgetPwd },
  { path: StudentRegRoute, exact: true, component: Student },
  { path: TutorRegRoute, exact: true, component: Tutor },
  { path: ResetPasswordRoute, exact: true, component: ResetPassword },
  { path: VerifyEmailRoute, exact: true, component: VerifiedEmail },
  { path: LogoutRoute, exact: true, component: Logout },
  { path: RegisterAsRoute, exact: true, component: RegisterAs },
]

export { userRoutes, authRoutes };
