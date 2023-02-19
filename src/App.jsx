import { useState } from "react";

function App() {
  const [moreInfo, setMoreInfo] = useState(false)
  const rotateArrow = ({target}) => {
    target.classList.toggle('rotate-180');
    setMoreInfo(prev => !prev);
  }
  return (
    <main className="w-full min-h-screen bg-hero bg-center grid place-items-center">
      <div className="bg-white/40 blur-[0.5px] w-1/3 min-w-[250px] pb-4 flex flex-col shadow-md shadow-black gap-4 rounded-lg">
        <h1 className="font-thin text-5xl w-full text-center mx-auto mt-4 ">Chía</h1>
        <h2 className="font-thin text-8xl text-center ml-4">14º</h2>
        <p className="font-thin text-xl text-center w-1/2 mx-auto ">Nublado</p>
        <div className=" font-thin flex flex-col text-xl w-full justify-center items-center gap-4">
        <div className="flex gap-4">
        <p>Max 19º</p>
        <p>Min 10º</p>
        </div>
        <div className="flex justify-center">
        <i className="fi fi-rr-angle-small-down transition-transform" onClick={rotateArrow}></i>
        </div>
        </div>
        <div className={`${!moreInfo && 'hide'} ${ moreInfo && "show"}`}>
          <div >Info</div>

        </div>
      </div>
    </main>
  )
}

export default App
