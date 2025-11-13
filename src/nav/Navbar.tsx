import logo from "../assets/images/logo.svg";
import units from "../assets/images/icon-units.svg";
import dropdown from "../assets/images/icon-dropdown.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between lg:p-10 p-5">
      <img src={logo} alt="logo" className="lg:w-34 lg:h-10" />
      <button
        type="button"
        style={{ backgroundColor: "hsl(243, 27%, 20%)" }}
        className="flex gap-2 items-center justify-center rounded-md cursor-pointer w-28"
      >
        <img src={units} alt="units" className="text-[300px]" />
        <span className="text-white text-[14px]">Units</span>
        <img src={dropdown} alt="dropdown" />
      </button>
    </div>
  );
};

export default Navbar;
