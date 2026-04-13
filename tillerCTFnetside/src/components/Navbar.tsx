import { Link, Outlet } from "react-router";

export default function Navbar() {
  return (
    <>
      <div className=" bg-black text-white px-6 py-4 flex justify-center items-center">
        <Link to="/" className="hover:text-green-500 text-lg font-bold">
          Home
        </Link>
        <Link
          to="/halloffame"
          className="hover:text-green-500 text-lg font-bold"
        >
          Hall of Fame
        </Link>
      </div>
      <Outlet />
    </>
  );
}
