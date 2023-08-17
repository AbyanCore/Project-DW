// Packages
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

// Pages
import Clientpage from "./Resource/View/ClientPage/Client.page";

// Views
import Homeview from "./Resource/View/ClientPage/Home/Home.view";
import Rootview from "./Resource/View/Root/Root.view";

const routers = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Rootview />} path="/">
            <Route element={<Clientpage />} path="/">
                <Route element={<Homeview />} path="/home"></Route>
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
