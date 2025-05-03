import { DarkmodeBtn } from "./DarkmodeBtn";
import DropDownMenuList from "./DropDownMenuList";
import Logo from "./Logo";
import Search from "./Search";

function Navbar() {
  return (
    <nav>
      <div className="container flex justify-between gap-4 items-center py-8 flex-col sm:flex-row">
        {/* logo */}
        <Logo />
        {/* Search */}
        <Search />
        {/* Darkmode && Profile */}
        <div className="flex items-center gap-2">
          <DarkmodeBtn />
          <DropDownMenuList />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
