import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header className="bg-gray-800 text-white p-4 text-center">
        <h1>Moja aplikacja</h1>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
