import React from "react";
import { Redirect } from "react-router-dom";
import { LoginRoute, ForgotPasswordRoute, ResetPasswordRoute, VerifyEmailRoute, LogoutRoute, RegisterRoute, DashboardRoute, LoansRoute, ApproveLoanRoute, DeclineLoanRoute, AdminDashboardRoute } from "../components/RouteName"

//* => AUTHENTICATION
import Login from "../pages/Authentication/Login"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import ResetPassword from "../pages/Authentication/ResetPassword"
import VerifiedEmail from "../pages/Authentication/VerifiedEmail"
import Logout from "../pages/Authentication/Logout"

//* =>  All routes
import Dashboard from "../pages/users/Dashboard/index";
import AdminDashboard from "../pages/users/Dashboard/admin";
import Loans from "../../pages/users/Loans/index";
import ApproveLoan from "../pages/users/Loans/ApproveLoan";
import DeclineLoan from "../pages/users/Loans/DeclineLoan";

const userRoutes = [
  { path: DashboardRoute, component: Dashboard },
  { path: AdminDashboardRoute, component: AdminDashboard },
  { path: LoansRoute, component: Loans },
  { path: ApproveLoanRoute, component: ApproveLoan },
  { path: DeclineLoanRoute, component: DeclineLoan },
  { path: "/", exact: true, component: () => <Redirect to={DashboardRoute} /> },
  // { path: "/", exact: true, component: () => <Redirect to={AdminDashboardRoute} /> },
];

const authRoutes = [
  { path: LoginRoute, exact: true, component: Login },
  { path: RegisterRoute, exact: true, component: Register },
  { path: ForgotPasswordRoute, exact: true, component: ForgetPwd },
  { path: ResetPasswordRoute, exact: true, component: ResetPassword },
  { path: VerifyEmailRoute, exact: true, component: VerifiedEmail },
  { path: LogoutRoute, exact: true, component: Logout },
]

export { userRoutes, authRoutes };
