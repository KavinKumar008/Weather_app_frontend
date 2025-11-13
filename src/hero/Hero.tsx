import bg from "../assets/images/bg-today-large.svg";
import sunny from "../assets/images/icon-sunny.webp";
import rain from "../assets/images/icon-rain.webp";
import dropdown from "../assets/images/icon-dropdown.svg";

const Hero = () => {
  return (
    <div className="lg:flex gap-10 lg:p-10 p-3">
      <main className="">
        <section
          className="lg:w-[800px] lg:h-[250px] md:w-full w-[350px] h-[300px] rounded-3xl p-6 lg:flex md:flex justify-between items-center"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-white text-center sm:text-center p-3">
            <h2 className="text-3xl font-semibold">Berlin, Germany</h2>
            <p className="opacity-80">Tuesday, Aug 5, 2025</p>
          </div>

          <div className="flex items-center gap-7 text-white">
            <img src={sunny} alt="sunny" className="w-32 h-32" />
            <h1 className="text-8xl font-bold">20°</h1>
          </div>
        </section>
        <section className="lg:w-[800px] lg:flex lg:justify-between md:flex md:justify-between grid grid-cols-2">
          <div className="lg:w-42 lg:h-24 w-[155px] h-28 border border-gray-400 bg-[hsl(243,27%,20%)] text-white mt-5 p-3 lg:space-y-3 space-y-5 rounded-lg">
            <p className="opacity-80 text-xl">Feels like</p>
            <h3 className="text-3xl font-semibold">18</h3>
          </div>
          <div className="lg:w-42 lg:h-24 w-[155px] h-28 border border-gray-400 bg-[hsl(243,27%,20%)] text-white mt-5 p-3 lg:space-y-3 space-y-5 rounded-lg">
            <p className="opacity-80">Feels like</p>
            <h3 className="text-3xl">18</h3>
          </div>
          <div className="lg:w-42 lg:h-24 w-[155px] h-28 border border-gray-400 bg-[hsl(243,27%,20%)] text-white mt-5 p-3 lg:space-y-3 space-y-5 rounded-lg">
            <p className="opacity-80">Feels like</p>
            <h3 className="text-3xl">18</h3>
          </div>
          <div className="lg:w-42 lg:h-24 w-[155px] h-28 border border-gray-400 bg-[hsl(243,27%,20%)] text-white mt-5 p-3 lg:space-y-3 space-y-5 rounded-lg">
            <p className="opacity-80">Feels like</p>
            <h3 className="text-3xl">18</h3>
          </div>
        </section>
        <div className="mt-10 text-xl">
          <h3 className="text-white">Daily forecast</h3>
        </div>
        <section className="lg:w-[800px] w-full lg:flex lg:justify-between md:flex md:justify-between grid grid-cols-3">
          <div className="lg:w-22 lg:h-32 w-[100px] h-36 text-white mt-6 border border-gray-300 flex flex-col items-center justify-center rounded-lg bg-[hsl(243,27%,20%)]">
            <p className="text-xl">Tue</p>
            <img src={rain} alt="Rainimage" className="w-16 h-16" />
            <div className="space-x-10">
              <span>20</span>
              <span>14</span>
            </div>
          </div>
          <div className="lg:w-22 lg:h-32 w-[100px] h-36 text-white mt-6 border border-gray-300 flex flex-col items-center justify-center rounded-lg bg-[hsl(243,27%,20%)]">
            <p className="text-xl">Tue</p>
            <img src={rain} alt="Rainimage" className="w-16 h-16" />
            <div className="space-x-10">
              <span>20</span>
              <span>14</span>
            </div>
          </div>
          <div className="lg:w-22 lg:h-32 w-[100px] h-36 text-white mt-6 border border-gray-300 flex flex-col items-center justify-center rounded-lg bg-[hsl(243,27%,20%)]">
            <p className="text-xl">Tue</p>
            <img src={rain} alt="Rainimage" className="w-16 h-16" />
            <div className="space-x-10">
              <span>20</span>
              <span>14</span>
            </div>
          </div>
          <div className="lg:w-22 lg:h-32 w-[100px] h-36 text-white mt-6 border border-gray-300 flex flex-col items-center justify-center rounded-lg bg-[hsl(243,27%,20%)]">
            <p className="text-xl">Tue</p>
            <img src={rain} alt="Rainimage" className="w-16 h-16" />
            <div className="space-x-10">
              <span>20</span>
              <span>14</span>
            </div>
          </div>
          <div className="lg:w-22 lg:h-32 w-[100px] h-36 text-white mt-6 border border-gray-300 flex flex-col items-center justify-center rounded-lg bg-[hsl(243,27%,20%)]">
            <p className="text-xl">Tue</p>
            <img src={rain} alt="Rainimage" className="w-16 h-16" />
            <div className="space-x-10">
              <span>20</span>
              <span>14</span>
            </div>
          </div>
          <div className="lg:w-22 lg:h-32 w-[100px] h-36 text-white mt-6 border border-gray-300 flex flex-col items-center justify-center rounded-lg bg-[hsl(243,27%,20%)]">
            <p className="text-xl">Tue</p>
            <img src={rain} alt="Rainimage" className="w-16 h-16" />
            <div className="space-x-10">
              <span>20</span>
              <span>14</span>
            </div>
          </div>
          <div className="lg:w-22 lg:h-32 w-[100px] h-36 text-white mt-6 border border-gray-300 flex flex-col items-center justify-center rounded-lg bg-[hsl(243,27%,20%)]">
            <p className="text-xl">Tue</p>
            <img src={rain} alt="Rainimage" className="w-16 h-16" />
            <div className="space-x-10">
              <span>20</span>
              <span>14</span>
            </div>
          </div>
        </section>
      </main>
      <main className="lg:w-[400px] lg:h-[580px] lg:mt-0 md:mt-0 mt-8 border border-gray-700 rounded-lg bg-[hsl(243,27%,20%)] overflow-y-auto md:overflow-y-auto md:curstom-scrollbar custom-scrollbar">
        <div className="flex items-center justify-between p-5">
          <h4 className="text-white text-xl font-semibold">Hourly forecast</h4>
          <button
            type="button"
            className="flex items-center justify-center gap-3 bg-[hsl(243,23%,30%)] lg:w-24 lg:h-8 w-28 h-10 rounded-lg"
          >
            <p className="text-white lg:text-[14px]">Tuesday</p>
            <img src={dropdown} alt="dropdown" className="w-3 h-3" />
          </button>
        </div>
        <div className="pl-5 pr-5 space-y-4">
          <div className="border border-gray-700 flex justify-between items-center p-2 rounded-lg bg-[hsl(243,23%,24%)]">
            <div className="flex items-center gap-3">
              <img src={rain} alt="" className="w-8 h-8" />
              <h4 className="text-white">3 PM</h4>
            </div>
            <p className="text-white">20</p>
          </div>
          <div className="border border-gray-700 flex justify-between items-center p-2 rounded-lg bg-[hsl(243,23%,24%)]">
            <div className="flex items-center gap-3">
              <img src={rain} alt="" className="w-8 h-8" />
              <h4 className="text-white">3 PM</h4>
            </div>
            <p className="text-white">20</p>
          </div>
          <div className="border border-gray-700 flex justify-between items-center p-2 rounded-lg bg-[hsl(243,23%,24%)]">
            <div className="flex items-center gap-3">
              <img src={rain} alt="" className="w-8 h-8" />
              <h4 className="text-white">3 PM</h4>
            </div>
            <p className="text-white">20</p>
          </div>
          <div className="border border-gray-700 flex justify-between items-center p-2 rounded-lg bg-[hsl(243,23%,24%)]">
            <div className="flex items-center gap-3">
              <img src={rain} alt="" className="w-8 h-8" />
              <h4 className="text-white">3 PM</h4>
            </div>
            <p className="text-white">20</p>
          </div>
          <div className="border border-gray-700 flex justify-between items-center p-2 rounded-lg bg-[hsl(243,23%,24%)]">
            <div className="flex items-center gap-3">
              <img src={rain} alt="" className="w-8 h-8" />
              <h4 className="text-white">3 PM</h4>
            </div>
            <p className="text-white">20</p>
          </div>
          <div className="border border-gray-700 flex justify-between items-center p-2 rounded-lg bg-[hsl(243,23%,24%)]">
            <div className="flex items-center gap-3">
              <img src={rain} alt="" className="w-8 h-8" />
              <h4 className="text-white">3 PM</h4>
            </div>
            <p className="text-white">20</p>
          </div>
          <div className="border border-gray-700 flex justify-between items-center p-2 rounded-lg bg-[hsl(243,23%,24%)]">
            <div className="flex items-center gap-3">
              <img src={rain} alt="" className="w-8 h-8" />
              <h4 className="text-white">3 PM</h4>
            </div>
            <p className="text-white">20</p>
          </div>
          <div className="border border-gray-700 flex justify-between items-center p-2 rounded-lg bg-[hsl(243,23%,24%)]">
            <div className="flex items-center gap-3">
              <img src={rain} alt="" className="w-8 h-8" />
              <h4 className="text-white">3 PM</h4>
            </div>
            <p className="text-white">20</p>
          </div>
          <div className="border border-gray-700 flex justify-between items-center p-2 rounded-lg bg-[hsl(243,23%,24%)]">
            <div className="flex items-center gap-3">
              <img src={rain} alt="" className="w-8 h-8" />
              <h4 className="text-white">3 PM</h4>
            </div>
            <p className="text-white">20</p>
          </div>
          <div className="border border-gray-700 flex justify-between items-center p-2 rounded-lg bg-[hsl(243,23%,24%)]">
            <div className="flex items-center gap-3">
              <img src={rain} alt="" className="w-8 h-8" />
              <h4 className="text-white">3 PM</h4>
            </div>
            <p className="text-white">20</p>
          </div>
          <div className="border border-gray-700 flex justify-between items-center p-2 rounded-lg bg-[hsl(243,23%,24%)]">
            <div className="flex items-center gap-3">
              <img src={rain} alt="" className="w-8 h-8" />
              <h4 className="text-white">3 PM</h4>
            </div>
            <p className="text-white">20</p>
          </div>
          <div className="border border-gray-700 flex justify-between items-center p-2 rounded-lg bg-[hsl(243,23%,24%)]">
            <div className="flex items-center gap-3">
              <img src={rain} alt="" className="w-8 h-8" />
              <h4 className="text-white">3 PM</h4>
            </div>
            <p className="text-white">20</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
