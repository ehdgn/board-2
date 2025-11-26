import { Link, Route, Routes } from "react-router-dom";
import { SocialLoginButtons } from "./components/SocialLoginButtons";
import LoginPage from "./pages/auth/LoginPage";
import { useAuthStore } from "./stores/auth.store";
import RegisterPage from "./pages/auth/RegisterPage";
import OAuth2CallbackPage from "./pages/auth/OAuth2CallbackPage";
import { GlobalStyle } from "./styles/global";
import Layout from "./components/layout/Layout";
import MainRouter from "./pages/MainRouter";
import AuthRouter from "./pages/auth/AuthRouter";

export default function App() {
  const { isInitialized, accessToken, user } = useAuthStore();

  if (!isInitialized) return <div>Loading...</div>;

  const isLoggedIn = Boolean(accessToken && user);

  return (
    <>
      <GlobalStyle />
      {isLoggedIn ? (
        <Layout>
          <MainRouter />
        </Layout>
      ) : (
        <AuthRouter  />
      )}
    </>
  );
}