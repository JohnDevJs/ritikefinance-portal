import React from "react";
import { Redirect } from "react-router-dom";
import PropertyOwner from "../pages/Authentication/Login/PropertyOwner";
import PropertyAgency from "../pages/Authentication/Login/PropertyAgency";
import ServiceProvider from "../pages/Authentication/Login/ServiceProvider";
import BackOffice from "../pages/Authentication/Login/BackOffice";
import ForgetPwd from "../pages/Authentication/Forget-password/Index";
import ResetPwd from "../pages/Authentication/Reset Password/index";
import ContinueRegister from "../pages/Authentication/Signup/Components/Choose-signup-method";
import PropertyManagement from "../pages/Authentication/Index";

import verifyEmail from "../pages/Authentication/verifyEmail";
import Dashboard from "../pages/Dashboard/index";
import AddProperty from "../pages/Properties/Add-property";
import AdminLogin from "../pages/Authentication/Login/AdminLogin";
import Users from "../pages/Users/index";
import Modules from "../pages/Modules/index";
import PropertyDetails from "../pages/Admin Properties/PropertyDetails";
import Units from "../pages/Units/index";
import Tenants from "../pages/Tenants/index";
import AllPropertyOwner from "../pages/Users/PropertyOwner";
import AllTenants from "../pages/Users/AllTenants";

const userRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
];

const authRoutes = [
  { path: "/login", component: AdminLogin },
  { path: "/login/property-owner", component: PropertyOwner },
  { path: "/login/property-agency", component: PropertyAgency },
  { path: "/login/service-provider", component: ServiceProvider },
  { path: "/login/back-office", component: BackOffice },
  { path: "/login", component: ChooseLogin },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/reset-password/:id", component: ResetPwd },
  { path: "/signup/property-owner", component: PropertyManagement },
  { path: "/signup/property-agency", component: EastateManagement },
  { path: "/signup", component: ContinueRegister },
  { path: "/modules", component: Modules },
  { path: "/VerifyEmail/:id", component: verifyEmail },
];

export { userRoutes, authRoutes };
