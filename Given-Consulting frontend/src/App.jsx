import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Blogs from "./pages/Blogs";
import BlogPage from "./pages/BlogPage";
import NextGen from "./pages/Nextgen";
import DevelopmentMarketing from "./pages/DevelopmentMarketing";

import { Footer, Navbar } from "./component";
import {
  Home,
  HumanResources,
  PageNotFound,
  ImprotExport,
  Login,
  SignUp,
  International,
  RecruitmentComp,
  Consulting,
} from "./pages";
import VerifySignupOtp from "./pages/verifySignupOTP";
import { useMyProfileQuery } from "./Redux/userRoutes/userApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProfile } from "./Redux/userRoutes/userSlice";
import Contact from "./pages/contact";
import MyProfile from "./pages/profile/myProfile";
import ChangePassword from "./pages/profile/ChangePassword";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ProtectedRoute from "./pages/ProtectedRoute";
import ItServices from "./pages/ItServices";
import ScrollToTop from "./ScrollToTop";

const MainLayout = () => (
  <div className="px-4 lg:mx-auto lg:max-w-7xl">
    <Navbar />
    <ScrollToTop /> {/* Scroll to top on route change */}
    <Outlet />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/international", element: <International /> },
      { path: "/consultancy", element: <Consulting /> },
      { path: "/human-resources", element: <HumanResources /> },
      { path: "/import-export", element: <ImprotExport /> },
      { path: "/recruitment-comp", element: <RecruitmentComp /> },
      { path: "/it", element: <ItServices /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/team", element: <Team /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/blogs/:id", element: <BlogPage /> },
      { path: "/nextgen", element: <NextGen /> },
      { path: "/development-marketing", element: <DevelopmentMarketing /> },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <MyProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/update-password",
        element: (
          <ProtectedRoute>
            <ChangePassword />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/verify-signup-otp",
    element: <VerifySignupOtp />,
  },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },
]);

function App() {
  const dispatch = useDispatch();
  const { data: profile } = useMyProfileQuery();

  useEffect(() => {
    dispatch(setProfile(profile?.user));
  }, [profile, dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
