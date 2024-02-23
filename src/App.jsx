// import React from "react";
import Marquee from "react-fast-marquee";

function App() {
  return (
    <>
      <div className="text-3xl w-full h-screen text-center bg-kitty-bg flex items-center justify-center bg-cover bg-center bg-slate-500">
        {/* <h1>Hello, world!</h1> */}
        {/* <marquee direction="left" scrollamount="10"  className="w-full h-10 text-black font-bold text-2xl bg-yellow-300 border border-black"  > Under Construction ;)  </marquee> */}
        <Marquee
          pauseOnHover="true"
          className="w-full h-10 origin-top rotate-12  text-black font-bold text-2xl bg-yellow-300 border-dashed border-4 py-6 border-black"
        >
          <h1 className="mx-10 ">Under Construction ;) </h1>
          <h1 className="mx-10">Under Construction ;) </h1>
          <h1 className="mx-10">Under Construction ;) </h1>
          <h1 className="mx-10">Under Construction ;) </h1>
          <h1 className="mx-10">Under Construction ;) </h1>
        </Marquee>
        {/* <h2>It is {new Date().toLocaleTimeString()}.</h2> */}
      </div>
    </>
  );
}

export default App;
