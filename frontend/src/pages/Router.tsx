import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShowroomPage } from "./ShowroomPage/ShowroomPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<ShowroomPage />} />
      </Routes>
    </BrowserRouter>
  );
};
