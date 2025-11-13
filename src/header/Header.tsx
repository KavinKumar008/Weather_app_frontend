import { useEffect } from "react";
import searchicon from "../assets/images/icon-search.svg";

const Header = () => {
  const weatherApi = async () => {
    try {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=11.0168&longitude=76.9558&current_weather=true"
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    weatherApi();
  }, []);
  return (
    <section className="mt-10">
      <h1 className="font-extrabold lg:text-5xl text-6xl leading-16 text-white text-center">
        How's the sky looking today?
      </h1>
      <div className="lg:flex md:flex space-y-4 lg:space-y-0 md:space-y-0 p-3 items-center justify-center gap-5 mt-10">
        <div className="relative">
          <img
            src={searchicon}
            alt="searchicon"
            className="absolute lg:left-3 lg:top-3 left-3 top-4 w-5 h-5"
          />
          <input
            type="text"
            placeholder="Search for the place..."
            className="lg:w-[500px] md:w-[500px] w-full outline-none text-white lg:p-3 p-4 rounded-md lg:pl-12 md:pl-12 pl-12 placeholder-white placeholder:text-xl"
            style={{ backgroundColor: "hsl(243, 27%, 20%)" }}
          />
        </div>
        <button
          type="button"
          className="text-white lg:p-2 lg:w-26 md:w-30 md:p-3 p-3 w-full cursor-pointer rounded-md lg:text-xl md:text-xl text-2xl font-medium md:font-normal"
          style={{ backgroundColor: "hsl(233, 67%, 56%)" }}
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default Header;
