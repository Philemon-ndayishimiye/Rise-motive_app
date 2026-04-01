import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
//import notFound from "@/pages/NotFound";
import RootLayout from "@/layouts/RootLayout";
import OurModel from "@/pages/OurModel";
import Clusters from "@/pages/Clusters";
import Login from "@/pages/Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* All routes inside RootLayout get Navbar + Footer */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/model" element={<OurModel />} />
          <Route path="/cluster" element={<Clusters />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* 404 has no layout */}
        {/* <Route path="*" element={<notFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
