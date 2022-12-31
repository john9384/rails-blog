import { useRoutes } from "react-router-dom";
import { PageLayout } from "../../components/PageLayout";
import { Feed } from "../pages/article/Feed";
import { AuthRoutes } from "./Auth";
export const AppRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <PageLayout><Feed /></PageLayout>
    },
    {
      path: "/auth",
      children: AuthRoutes
    },
  ]);

  return element;
};