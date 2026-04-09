import { Link, Outlet } from "react-router";

export default function Navbar() {
  return (
    <>
      <div className="bg-green-900 text-black px-6 py-4 flex justify-center items-center">
        <Link
          to="/halloffame"
          className="hover:text-gray-200 text-lg font-bold"
        >
          Hall of Fame
        </Link>
      </div>
      <Outlet />
    </>
  );
}
