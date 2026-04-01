import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
//import notFound from "@/pages/NotFound";
import RootLayout from "@/layouts/RootLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* All routes inside RootLayout get Navbar + Footer */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* 404 has no layout */}
        {/* <Route path="*" element={<notFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
