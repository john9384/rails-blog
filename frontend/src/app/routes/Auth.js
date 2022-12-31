import { SignIn } from "../pages/auth/SignIn";
import { SignUp } from "../pages/auth/SignUp";

export const AuthRoutes = [
  { path: "signin", element: <SignIn /> },
  { path: "signup", element: <SignUp /> },
];