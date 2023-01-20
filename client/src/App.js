import{
  createBrowserRouter,
  RouterProvider,
  Router,
  Outlet,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Write from "./pages/Write";
import Single from "./pages/Single";
import "./style.scss";
//Оболочка главной страницы
const Layout = () => {
  //Верхнее меню
  //Вывод постов
  //Подвал
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {   //Путь оболочки главной страницы
      path: "/",
      element: <Layout/>,
      children:[
      {
        //Путь главной страницы
        path: "/",
        element: <Home/>
      },
      {
        //Путь отдельного поста
        path: "/post/:id",
        element: <Single/>
      },
      {
        //Путь на страницу создания нового поста
        path: "/write",
        element: <Write/>
      },
    ]
  },
  {
    //Путь на страницу регистрации
    path: "/register",
    element: <Register/>,
  },
  {
    //Путь на страницу авторизации
    path: "/login",
    element: <Login />,
  },
]);

//Функция главной страницы
function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
