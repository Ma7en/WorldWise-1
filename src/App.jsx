import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import { DarkModeProvider } from "./contexts/DarkModeContext";

// import SpinnerFullPage from "./components/SpinnerFullPage";
import GlobalStyles from "./styles/GlobalStyles";

import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import CountryList from "./components/CountryList";
import ResetPassword from "./pages/ResetPassword";
import ProtectedRoute from "./ui/auth/ProtectedRoute";
import AppLayout from "./pages/AppLayout";
import CityList from "./features/cities/CityList";
import City from "./features/cities/City";
import CreateCityForm from "./features/cities/CreateCityForm";
import Account from "./pages/Account";
import PageNotFound from "./pages/PageNotFound";
import CountryList from "./features/cities/CountryList";
import { App_Url } from "./utils/constants";
import EditCityForm from "./features/cities/EditCityForm";
// import EditCityForm from "./features/cities/EditCityForm";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // staleTime: 60 * 1000,
            staleTime: 0,
        },
    },
});

function App() {
    // const App_Url = "app";
    return (
        <>
            <DarkModeProvider>
                <QueryClientProvider client={queryClient}>
                    <ReactQueryDevtools initialIsOpen={false} />

                    <GlobalStyles />

                    <BrowserRouter>
                        <Routes>
                            <Route
                                // path="app"
                                element={
                                    <ProtectedRoute>
                                        <AppLayout />
                                    </ProtectedRoute>
                                }
                            >
                                <Route
                                    index
                                    element={
                                        <Navigate
                                            replace
                                            to={`${App_Url}/cities`}
                                        />
                                    }
                                />
                                <Route exact path="/app" component={App} />
                                <Route
                                    path={`${App_Url}/cities`}
                                    element={<CityList />}
                                />
                                <Route
                                    path={`${App_Url}/cities/:cityId`}
                                    element={<City />}
                                />
                                <Route
                                    path={`${App_Url}/cities/edit/:cityId`}
                                    element={<EditCityForm />}
                                />

                                <Route
                                    path={`${App_Url}/countries`}
                                    element={<CountryList />}
                                />

                                <Route
                                    path={`${App_Url}/account`}
                                    element={<Account />}
                                />

                                <Route
                                    path={`${App_Url}/form`}
                                    element={<CreateCityForm />}
                                />
                                {/* <Route
                                    path={`${App_Url}/form/:cityId`}
                                    element={<EditCityForm />}
                                /> */}
                            </Route>

                            {/* <Route index element={<Homepage />} /> */}
                            <Route path="/home" element={<Homepage />} />

                            <Route path="product" element={<Product />} />

                            <Route path="pricing" element={<Pricing />} />

                            <Route path="login" element={<Login />} />

                            <Route path="signup" element={<Signup />} />

                            <Route
                                path="resetpassword"
                                element={<ResetPassword />}
                            />

                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </BrowserRouter>

                    <Toaster
                        position="top-center"
                        gutter={12}
                        containerStyle={{ margin: "8px" }}
                        toastOptions={{
                            success: {
                                duration: 3000,
                            },
                            error: {
                                duration: 5000,
                            },
                            style: {
                                fontSize: "16px",
                                maxWidth: "500px",
                                padding: "16px 24px",
                                backgroundColor: "var(--color-grey-0)",
                                color: "var(--color-grey-700)",
                            },
                        }}
                    />
                </QueryClientProvider>
            </DarkModeProvider>
        </>
    );
}

export default App;
