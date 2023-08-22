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
import Adminpage from "./Resource/View/AdminPage/Admin.page";

// Views
import Rootview from "./Resource/View/Root/Root.view";
import ClientLoader from "./Resource/View/ClientPage/Client.loader";
import Notfoundview from "./Resource/View/ErrorPage/Notfound.view";
import UnAuthorizeview from "./Resource/View/ErrorPage/UnAuthorize.view";
import Loginview from "./Resource/View/Auth/Login/Login.view";
import Registerview from "./Resource/View/Auth/Register/Register.view";
import Dashboardview from "./Resource/View/AdminPage/Dashboard/Dashboard.view";
import ManageRoleview from "./Resource/View/AdminPage/ManageRole/ManageRole.view";
import ManageCategoryview from "./Resource/View/AdminPage/ManageCategory/ManageCategory.view";
import ManageUserview from "./Resource/View/AdminPage/ManageUser/ManageUser.view";
import ManageWisataview from "./Resource/View/AdminPage/ManageWisata/ManageWisata.view";
import Managerpage from "./Resource/View/managerPage/Manager.page";

const routers = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Rootview />} path="/">
            <Route path="/" element={<Outlet />} loader={ClientLoader}>
                <Route
                    index
                    loader={ClientLoader}
                    element={<Clientpage scrollToSection="home" />}
                />
                <Route
                    index
                    path="Home"
                    loader={ClientLoader}
                    element={<Clientpage scrollToSection="home" />}
                />
                <Route
                    path="Description"
                    loader={ClientLoader}
                    element={<Clientpage scrollToSection="description" />}
                />
                <Route
                    path="Detail"
                    loader={ClientLoader}
                    element={<Clientpage scrollToSection="detail" />}
                />
                <Route
                    path="Feedback"
                    loader={ClientLoader}
                    element={<Clientpage scrollToSection="feedback" />}
                />
            </Route>

            <Route path="/dashboard" element={<Adminpage />}>
                <Route element={<Dashboardview />} path="main"></Route>
                <Route element={<ManageRoleview />} path="managerole"></Route>
                <Route
                    element={<ManageCategoryview />}
                    path="managecategory"
                ></Route>
                <Route element={<ManageUserview />} path="manageuser"></Route>
                <Route
                    element={<ManageWisataview />}
                    path="managewisata"
                ></Route>
            </Route>

            <Route path="/manage" element={<Managerpage />}>
                <Route element={<></>} path="main"></Route>
                <Route element={<></>} path="managewisata"></Route>
                <Route element={<></>} path="komentar"></Route>
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
