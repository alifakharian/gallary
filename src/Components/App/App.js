import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY   (api address)
  //  8-zs-Ke4aRNiMEPQi2TICWUcuSk_vwOV1AZB2h-p75Y    (acsses key)
  const [voroodi, setvorrodi] = useState("");
  const [image, setimage] = useState([]);

  const fethchapi = async () => {
    let data = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=8-zs-Ke4aRNiMEPQi2TICWUcuSk_vwOV1AZB2h-p75Y&query=${voroodi}`
    );
    let res = await data.json();

    setimage(res.results);
    console.log(image);
  };

  useEffect(() => {
    fethchapi();
  }, []);

  return (
    <div className=" main mx-auto   pb-[72.80vh]">
    
   <div className="">
   <h1 className="title  mx-auto  text-center  text-pink-950 tracking-[0.5rem] text-[50px] font-extrabold">Gallary API</h1>
      <div className="container  rounded-4  mt-3 p-3 mx-auto text-center text-white">
        <div className="flex mt-3 justify-center  gap-3 ">
          <input
            type="text"
            name="search"
            id="search"
            onChange={(e) => setvorrodi(e.target.value)}
            placeholder="Search Here..."
            // value={value}
            className="w-[50%] h-[50px] text-center rounded-xl  outline-none font-bold text-black bg-[#ffffff]  shadow-inner"
          />
          <button
            className="bg-green-700 result p-3 text-center rounded-lg"
            onClick={fethchapi}
          >
            result
          </button>
        </div>
        <div className="flex justify-around gap-4 flex-wrap mt-4">
          {image.map((elem, index) => {
            return (
              <div key={index}>
                <img
                  src={elem.urls.regular}
                  className="image bg-white w-[300px] h-[300px] rounded-xl"
                />
              </div>
            );
          })}
        </div>
      </div>
   </div>
    </div>
  );
};

export default App;
