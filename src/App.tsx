// Packages
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Outlet,
} from "react-router-dom";

// Pages
import Clientpage from "./Resource/View/ClientPage/Client.page";
import Authpage from "./Resource/View/Auth/Auth.page";
import Adminpage from "./Resource/View/AdminPage/Dashboard/Admin.Page";

// Views
import Rootview from "./Resource/View/Root/Root.view";
import ClientLoader from "./Resource/View/ClientPage/Client.loader";
import Notfoundview from "./Resource/View/ErrorPage/Notfound.view";
import UnAuthorizeview from "./Resource/View/ErrorPage/UnAuthorize.view";
import Loginview from "./Resource/View/Auth/Login/Login.view";
import Registerview from "./Resource/View/Auth/Register/Register.view";

const routers = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Rootview />} path="/">
            <Route path="/" element={<Outlet />} loader={ClientLoader}>
                <Route
                    path="/"
                    loader={ClientLoader}
                    element={<Clientpage scrollToSection="home" />}
                />
                <Route
                    path="/Home"
                    loader={ClientLoader}
                    element={<Clientpage scrollToSection="home" />}
                />
                <Route
                    path="/Description"
                    loader={ClientLoader}
                    element={<Clientpage scrollToSection="description" />}
                />
                <Route
                    path="/Detail"
                    loader={ClientLoader}
                    element={<Clientpage scrollToSection="detail" />}
                />
                <Route
                    path="/Feedback"
                    loader={ClientLoader}
                    element={<Clientpage scrollToSection="feedback" />}
                />
            </Route>

            <Route element={<Adminpage />} path="/dashboard">
                <Route element={<>Dashboard 1</>} path="/dashboard/1"></Route>
                <Route element={<>Dashboard 2</>} path="/dashboard/2"></Route>
            </Route>

            <Route element={<Notfoundview />} path="*"></Route>
            <Route element={<UnAuthorizeview />} path="/UnAuthorized"></Route>

            <Route path="/auth" element={<Authpage />}>
                <Route path="login" element={<Loginview />}></Route>
                <Route path="register" element={<Registerview />}></Route>
            </Route>
        </Route>
    )
);

const App = () => {
    return <RouterProvider router={routers} />;
};

export default App;
