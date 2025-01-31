import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav />
          <Home />
          <About />
          <Contact />
        </>
      ),
    },
  ]);
  return <BrowserRouter></BrowserRouter>;
};
export default App;
