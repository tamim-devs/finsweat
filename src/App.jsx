import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Pricing from "./pages/pricing/Pricing";
import Feature from "./pages/feature/Feature";
import Blog from "./pages/blog/Blog";
import ReadBlog from "./pages/readBlog/ReadBlog";
import Work from "./pages/work/Work";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Privacy from "./pages/privacy/Privacy";
import Condition from "./pages/condition/Condition";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>}>
          <Route path="/" element={<Home />}/>
          <Route path="/work" element={<Work />} />
          <Route path="/work/read-case-study" element={<Portfolio />} />
          <Route path="/about us" element={<About />}/>
          <Route path="/pricing" element={<Pricing />}/>
          <Route path="/feature" element={<Feature />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/blog/read blog" element={<ReadBlog />} />
          <Route path="/contact-us" element={<Contact/>} />
          <Route path="/privacy-policy" element={<Privacy/>} />
          <Route path="/terms&condition" element={<Condition/>} />
      </Route>
    )
  );  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App