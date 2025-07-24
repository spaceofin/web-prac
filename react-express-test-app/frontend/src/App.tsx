import { Outlet } from "react-router";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <main className="p-10">
        <Outlet />
      </main>
    </>
  );
}
