import { Routes, Route } from "react-router-dom";

import { useAuth } from "../hooks/auth";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { NewDish } from "../pages/NewDish";
import { EditDish } from "../pages/EditDish";

export function AppRoutes() {
  const { user } = useAuth();
  const isAdmin = user.is_admin;

  return (
    <Routes>
      <Route path="/" element={<Home isAdmin />} />
      <Route path="/details" element={<Details />} />
      {isAdmin ? <Route path="/newdish" element={<NewDish />} /> : ""}
      {isAdmin ? (
        <Route path="/editdish/:id" element={<EditDish />} />
      ) : (
        ""
      )}
    </Routes>
  );
}
