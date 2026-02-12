import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// TODO: importera RouterProvider från "react-router/dom"
// TODO: importera router från "./router"
// TODO: importera FormProvider från "./context/FormContext"
import { RouterProvider } from "react-router/dom";
// import router from "./router";
import { FormProvider } from "./context/FormContext";
import { BrowserRouter, Routes, Route } from "react-router";

import FormLayout from "./components/FormLayout";
import StepPersonalInfo from "./components/StepPersonalInfo";
import StepAddress from "./components/StepAddress";
import StepPreferences from "./components/StepPreferences";
import Summary from "./components/Summary";
import LandingPage from "./components/LandingPage";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FormProvider>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="form" element={<FormLayout />}>
            <Route path="name" element={<StepPersonalInfo/>}/>
            <Route path="address" element={<StepAddress/>}/>
            <Route path="preferences" element={<StepPreferences/>}/>
            <Route path="summary" element={<Summary/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </FormProvider>
    {/* TODO: Wrappa <RouterProvider router={router} /> med <FormProvider></FormProvider> */}
    {/* TODO: <RouterProvider router={router} /> */}
  </StrictMode>
);
