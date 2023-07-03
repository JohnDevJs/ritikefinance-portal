import React from "react";
import { Redirect } from "react-router-dom";
import { LoginRoute, ForgotPasswordRoute, ResetPasswordRoute, VerifyEmailRoute, LogoutRoute, RegisterRoute, DashboardRoute, LoansRoute, ApproveLoanRoute, DeclineLoanRoute, AdminDashboardRoute, UsersRoute, LoanRequestRoute, TeamRoute, ApprovedLoanRoute, MondateFormroute, MondateApplicationRoute, ProfileRoute, MondateFormrouteID, DebtCollectionRoute, PaidLoanRoute, DeclinedLoanRoute } from "../components/RouteName"

//* => AUTHENTICATION
import Login from "../pages/Authentication/Login"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import ResetPassword from "../pages/Authentication/ResetPassword"
import VerifiedEmail from "../pages/Authentication/VerifiedEmail"
import Logout from "../pages/Authentication/Logout"

//* =>  All routes
import Dashboard from "../pages/Users/Dashboard/index";
import AdminDashboard from "../pages/Admin/Dashboard/index";
import Loans from "../pages/Users/Loans/index";
import ApproveLoan from "../pages/Users/Loans/ApproveLoan";
import DeclineLoan from "../pages/Users/Loans/DeclineLoan";
import AdminDeclineLoan from "../pages/Admin/Declined-loan";
import AdminPaidLoan from "../pages/Admin/Paid-loan";
import AdminDebtCollection from "../pages/Admin/Debt-collection";
import Users from "../pages/Admin/Users/index";
import LoanRequest from "../pages/Admin/Loan Request/index";
import ApprovedLoanPage from "../pages/Admin/Approve-loan/index";
import MondatePage from "../pages/Admin/Mondate/index";
import MondateApplication from "../pages/Users/Mondate/index";
import Teams from "../pages/Admin/Team/index";
import Profile from "../pages/Users/Profile/index";
import Details from "../pages/Admin/Mondate/details";

const userRoutes = [
  { path: DashboardRoute, component: Dashboard },
  { path: AdminDashboardRoute, component: AdminDashboard },
  { path: LoansRoute, component: Loans },
  { path: ApproveLoanRoute, component: ApproveLoan },
  { path: DeclineLoanRoute, component: DeclineLoan },
  { path: UsersRoute, component: Users },
  { path: LoanRequestRoute, component: LoanRequest },
  { path: ApprovedLoanRoute, component: ApprovedLoanPage },
  { path: MondateFormroute, component: MondatePage },
  { path: MondateFormrouteID, component: Details },
  { path: MondateApplicationRoute, component: MondateApplication },
  { path: TeamRoute, component: Teams },
  { path: ProfileRoute, component: Profile },

  //* New update
  { path: DeclinedLoanRoute, component: AdminDeclineLoan },
  { path: PaidLoanRoute, component: AdminPaidLoan },
  { path: DebtCollectionRoute, component: AdminDebtCollection },
  { path: "/", exact: true, component: () => <Redirect to={DashboardRoute} /> },
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
