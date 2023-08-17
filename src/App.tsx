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

// Views
import Rootview from "./Resource/View/Root/Root.view";

const routers = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Rootview />} path="/">
            <Route path="/" element={<Outlet />}>
                <Route
                    path="/"
                    element={<Clientpage scrollToSection="home" />}
                />
                <Route
                    path="/Home"
                    element={<Clientpage scrollToSection="home" />}
                />
                <Route
                    path="/Description"
                    element={<Clientpage scrollToSection="description" />}
                />
                <Route
                    path="/Detail"
                    element={<Clientpage scrollToSection="detail" />}
                />
                <Route
                    path="/Feedback"
                    element={<Clientpage scrollToSection="feedback" />}
                />
            </Route>

            <Route element={<>Dashboard</>} path="/dashboard">
                <Route element={<>Dashboard 1</>} path="/dashboard/1"></Route>
                <Route element={<>Dashboard 2</>} path="/dashboard/2"></Route>
            </Route>
        </Route>
    )
);

const App = () => {
    return <RouterProvider router={routers} />;
};

export default App;
