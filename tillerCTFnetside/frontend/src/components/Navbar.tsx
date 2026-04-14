import { NavLink, useLocation } from "react-router";
import { Outlet } from "react-router";

export default function Navbar() {
  const location = useLocation();

  if (location.pathname === "/top3") {
    return <Outlet />;
  }

  return (
    <>
      <div className="bg-black">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 text-lg"
                : "text-white hover:text-green-500 text-lg"
            }
          >
            Capture the Flag
          </NavLink>

          <NavLink
            to="/leaderboard"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 text-lg"
                : "text-white hover:text-green-500 text-lg"
            }
          >
            Leaderboard
          </NavLink>

          <NavLink
            to="/top3"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 text-lg"
                : "text-white hover:text-green-500 text-lg"
            }
          >
            Top 3
          </NavLink>

          <NavLink
            to="/halloffame"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 text-lg"
                : "text-white hover:text-green-500 text-lg"
            }
          >
            Hall of Fame
          </NavLink>

          <a
            href="/#om-oss"
            className="text-white hover:text-green-500 text-lg"
          >
            Om CTF
          </a>
        </div>
      </div>

      <Outlet />
    </>
  );
}
