import logo from "./assets/logo.jpg";
import ticket from "./assets/ticket.png";
import diamond from "./assets/diamond.png";
import balloon from "./assets/balloon.png";
import medal from "./assets/medal.png";
import paris from "./assets/paris.jpg"
import tokyo from "./assets/tokyo.jpg"
import phuket from "./assets/phuket.jpg"
import bali from "./assets/bali.jpg"
import bangkok from "./assets/bangkok.jpg"
import cappadocia from "./assets/Cappadocia.jpg"
import roma from "./assets/roma.jpg"
import singapur from "./assets/singapur.jpg"

function App() {
  return (
    <div className="min-h-screen bg-white p-10">
      <nav className="bg-cyan-200 p-5 rounded-3xl">
        <div className="flex justify-between">
          <div>
            <img
              className="h-20 w-20 rounded-full"
              src={logo}
              alt="TravelGo Logo"
            />
          </div>
          <div className="text-black flex items-center gap-2 sm:gap-5 md:gap-10 lg:gap-20">
            <a
              className="hidden md:block font-bold hover:text-green-500"
              href=""
            >
              Destinations
            </a>
            <a
              className="hidden md:block font-bold hover:text-green-500"
              href=""
            >
              Activities
            </a>
            <a
              className="hidden md:block font-bold hover:text-green-500"
              href=""
            >
              USD
            </a>
            <button className="font-bold h-10 w-20 bg-orange-400 text-white rounded-2xl cursor-pointer hover:bg-orange-300 hover:text-black ">
              Sign up
            </button>
            <button className="font-bold h-10 w-20 bg-blue-600 text-white rounded-2xl cursor-pointer hover:bg-blue-300 hover:text-black">
              Log in
            </button>
          </div>
        </div>
      </nav>
      <main>
        <section>
          <input className="border border-gray-500 text-black rounded-3xl mt-10 p-2 focus:outline-none min-w-xs" type="text" placeholder="search" />
          <h1 className="text-black font-bold text-4xl mt-10">
            Why choose Tourz
          </h1>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-6">
              <img src={ticket} alt="ticket" />
              <h2 className="text-black font-semibold text-xl mt-2">
                Ultimate flexibility
              </h2>
              <p className="text-black mt-4">
                You're in control, with free <br /> cancellation and payment
                options to <br />
                satisfy any plan or budget.
              </p>
            </div>
            <div className="p-6">
              <img src={balloon} alt="" />
              <h2 className="text-black font-semibold text-xl mt-2">
                Memorable experiences
              </h2>
              <p className="text-black mt-4">
                Browse and book tours and activities so incredible, you'll want
                to tell your friends.
              </p>
            </div>
            <div className="p-6">
              <img src={diamond} alt="" />
              <h2 className="text-black font-semibold text-xl mt-2">
                Quality at our core
              </h2>
              <p className="text-black mt-4">
                High-quality standards. Millions of reviews. A tourz company.
              </p>
            </div>
            <div className="p-6">
              <img src={medal} alt="" />
              <h2 className="text-black font-semibold text-xl mt-2">
                Award-winning support
              </h2>
              <p className="text-black mt-4">
                New price? New plan? No problem. We're here to help, 24/7.
              </p>
            </div>
          </div>
        </section>
        <section>
          {/* <input className="border border-gray-500 text-black rounded-3xl mt-10 p-2 focus:outline-none min-w-xs" type="text" placeholder="search" /> */}
          <h1 className="text-black font-bold text-4xl mt-10">
            Trending destinations
          </h1>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:6 2xl:8">
            <div className="p-6 flex flex-col items-center">
              <img className="w-25 h-25 rounded-full object-cover" src={paris} alt="paris" />
              <h4 className="text-black font-semibold text-xl mt-3">
                Paris
              </h4>
              <p className="text-black mt-1">
                100+ Tours
              </p>
            </div>
            <div className="p-6 flex flex-col items-center">
              <img className="w-25 h-25 rounded-full object-cover" src={tokyo} alt="paris" />
              <h4 className="text-black font-semibold text-xl mt-3">
                tokyo
              </h4>
              <p className="text-black mt-1">
                400+ Tours
              </p>
            </div>
            <div className="p-6 flex flex-col items-center">
              <img className="w-25 h-25 rounded-full object-cover" src={phuket} alt="paris" />
              <h4 className="text-black font-semibold text-xl mt-3">
                phuket
              </h4>
              <p className="text-black mt-1">
                700+ Tours
              </p>
            </div>
            <div className="p-6 flex flex-col items-center">
              <img className="w-25 h-25 rounded-full object-cover" src={bali} alt="paris" />
              <h4 className="text-black font-semibold text-xl mt-3">
                bali
              </h4>
              <p className="text-black mt-1">
                200+ Tours
              </p>
            </div>
            <div className="p-6 flex flex-col items-center">
              <img className="w-25 h-25 rounded-full object-cover" src={bangkok} alt="paris" />
              <h4 className="text-black font-semibold text-xl mt-3">
                bangkok
              </h4>
              <p className="text-black mt-1">
                300+ Tours
              </p>
            </div>
            <div className="p-6 flex flex-col items-center">
              <img className="w-25 h-25 rounded-full object-cover" src={cappadocia} alt="paris" />
              <h4 className="text-black font-semibold text-xl mt-3">
                cappadocia
              </h4>
              <p className="text-black mt-1">
                500+ Tours
              </p>
            </div>
            <div className="p-6 flex flex-col items-center">
              <img className="w-25 h-25 rounded-full object-cover" src={roma} alt="paris" />
              <h4 className="text-black font-semibold text-xl mt-3">
                roma
              </h4>
              <p className="text-black mt-1">
                100+ Tours
              </p>
            </div>
            <div className="p-6 flex flex-col items-center">
              <img className="w-25 h-25 rounded-full object-cover" src={singapur} alt="paris" />
              <h4 className="text-black font-semibold text-xl mt-3">
                singapur
              </h4>
              <p className="text-black mt-1">
                450+ Tours
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
