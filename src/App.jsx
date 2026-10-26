import logo from "./assets/logo.jpg";

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
          <div className="text-black flex items-center gap-20">
            <a className="font-bold hover:text-green-500" href="">Destinations</a>
            <a className="font-bold hover:text-green-500" href="">Activities</a>
            <a className="font-bold hover:text-green-500" href="">USD</a>
            <button className="font-bold h-10 w-20 bg-orange-400 text-white rounded-2xl cursor-pointer hover:bg-orange-300 hover:text-black">Sign up</button>
            <button className="font-bold h-10 w-20 bg-blue-600 text-white rounded-2xl cursor-pointer hover:bg-blue-300 hover:text-black">Log in</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
