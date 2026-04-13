import { Link, Outlet } from "react-router";

export default function Navbar() {
  return (
    <>
      <div className="bg-black text-white px-6 py-4 flex justify-center items-center gap-10">
        <Link to="/" className="hover:text-green-500 text-lg font-bold">
          Capture the Flag
        </Link>

        <Link
          to="/leaderboard"
          className="hover:text-green-500 text-lg font-bold"
        >
          Hall of Fame
        </Link>

        <a href="/#om-oss" className="hover:text-green-500 text-lg font-bold">
          Om oss
        </a>
      </div>

      <Outlet />
    </>
  );
}
