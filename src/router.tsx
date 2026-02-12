// TODO: importera createBrowserRouter från "react-router"
// TODO: importera FormLayout från "./components/FormLayout"
// TODO: importera StepPersonalInfo från "./components/StepPersonalInfo"
// TODO: importera StepAddress från "./components/StepAddress"  
// TODO: importera StepPreferences från "./components/StepPreferences"
// TODO: importera Summary från "./components/Summary"

import { createBrowserRouter, Routes, Route } from "react-router";
import FormLayout from "./components/FormLayout";
import StepPersonalInfo from "./components/StepPersonalInfo";
// ... importera resten
import StepAddress from "./components/StepAddress";
import StepPreferences from "./components/StepPreferences";
import Summary from "./components/Summary";
import LandingPage from "./components/LandingPage";

const router = createBrowserRouter([
  {
    
    

    // path: "/form",
    // element: <FormLayout />,
    // children: [
    //   { path: "name", element: <StepPersonalInfo /> },
    //   // TODO: lägg till resten av stegen
    //   { path: "address", element: <StepAddress /> },
    //   { path: "preferences", element: <StepPreferences /> },
    //   { path: "summary", element: <Summary /> }
    // ],
  },
]);

export default router;