import { Link } from "react-router-dom";
import { CitySearch } from "./city-search";
import { ThemeToggle } from "./theme-toggle";
import { useTheme } from "@/context/theme-provider";

export function Header() {
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 py-2">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 gap-2">

        {/* Logo */}
        <Link
          to={"/"}
          className="flex items-center font-bold text-2xl sm:text-3xl"
        >
          <img
            src={theme === "dark" ? "/vite.svg" : "/vite.svg"}
            alt="Nimbus logo"
            className="h-10 sm:h-14 p-1"
          />
          Nimbus
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* City search responsive width */}
          <div className="w-[120px] sm:w-auto">
            <CitySearch />
          </div>

          {/* Theme toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
