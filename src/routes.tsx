import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ListPage from "./pages/List";
import OrderDetailsPage from "./pages/OrderDetails";

const RoutesApplication: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/order" element={<OrderDetailsPage />}>
          <Route path=":orderId" element={<OrderDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApplication;
