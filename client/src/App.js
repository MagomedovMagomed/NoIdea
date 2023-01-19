import{
  createBrowserRouter,
  RouterProvider,
  Router,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Write from "./pages/Write";
import Single from "./pages/Single";

const Layout = () => {
  return(
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
      path: "/",
      element: <Layout/>,
      children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/single",
        element: <Single/>
      },
      {
        path: "/write",
        element: <Write/>
      },
    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);


function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}



export default App;
