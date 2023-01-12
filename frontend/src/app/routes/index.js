import { useRoutes } from "react-router-dom";
import { PageLayout } from "../../components/PageLayout";
import { Feed } from "../pages/article/Feed";
import { AuthRoutes } from "./Auth";
import { ArticleRoutes } from "./Article";

export const AppRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        { path: "", element: <Feed /> }
      ]
    },
    {
      path: "/auth",
      children: AuthRoutes
    },
    {
      path: "/articles",
      element: <PageLayout />,
      children: ArticleRoutes
    },
  ]);

  return element;
};