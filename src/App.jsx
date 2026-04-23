import React from "react";
import Router from "./router/Router";
import Aos from "aos";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Router />
    </div>
  );
};

export default App;
