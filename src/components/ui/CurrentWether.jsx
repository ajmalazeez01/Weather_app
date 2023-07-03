import React from "react";

function CurrentWether({data}) {
  console.log(data)
  return (
    <div 
      
     className="text-white md:mt-8 mt-4 w-full  ">
      <div 
     style={{ backgroundImage: `url(assets/images/joy-stamp-pGQbWXBC1dA-unsplash.jpg)`,
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     backgroundRepeat: 'no-repeat',
     
   }}
    
    className="  h-52  w-11/12  md:mx-10 mx-5 rounded-t-xl flex ">
      <div className="backdrop-blur-md  w-full flex justify-center  ">

        <div className=" w-1/2 mx-2 md:mx-14 my-auto">
          <p className="text-2xl md:text-5xl font-extrabold">{data.city}</p>
          <p className="text-sm md:text-xl">{data?.weather[0]?.description}</p>
          <p className="text-2xl md:text-5xl font-thin">{Math.round(data.main.temp)}&#176;C</p>
        </div>
        <div className="my-auto md:mx-20">
          <img src={`assets/images/${data?.weather[0]?.icon}.png`} alt="sunny" className="w-36 " />
        </div>

      </div>
      </div>
      <div 
       style={{ backgroundImage: `url(assets/images/joy-stamp-pGQbWXBC1dA-unsplash.jpg)`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat',
       
       
     }}
      
      className=" backdrop-blur-md  h-72 md:h-96  w-11/12  md:mx-10 mx-5 rounded-b-xl flex p-3  ">
        
        <div className="backdrop-blur-lg flex w-full ">

        <div className="w-full h-full  ">
          <div className="w-full h-1/2 rounded-xl    border-2  border-whilep-0.5  ">
            <p className="text-xs md:text-lg p-2 font-bold">Feels like</p>
            <div className="flex items-center justify-center">
              <img
                src="assets/images/thermometer.png"
                alt="Feets like"
                className="w-9 md:w-12 "
              />
              <p className="pl-1 md:text-lg font-bold">{Math.round(data.main.feels_like)}&#176;C</p>
            </div>
          </div>
          <div className="w-full h-1/2 rounded-xl border-2  border-while   p-0.5 ">
            <p className="text-xs md:text-lg te p-2 font-bold">Wind</p>
            <div className="flex items-center justify-center">
              <img
                src="assets/images/wind.png"
                alt="visibility"
                className="w-9 ml-1 md:w-12 "
              />
              <p className="pl-1 md:text-lg font-bold">{data.wind.speed}m/s</p>
            </div>
          </div>
        </div>

        <div className="w-full h-full ">
          <div className="w-full h-1/2  rounded-xl border-2  border-while   p-0.5">
            <p className="text-xs md:text-lg p-2 font-bold">Humidity</p>
            <div className="flex items-center justify-center">
              <img
                src="assets/images/humidity.png"
                alt="Humidity"
                className="w-9 md:w-12 "
              />
              <p className="pl-1 md:text-lg font-bold">{data.main.humidity}%</p>
            </div>
          </div>
          <div className="w-full h-1/2  rounded-xl border-2  border-while   p-0.5 ">
            <p className="text-xs md:text-lg p-2 font-bold">Pressure</p>
            <div className="flex items-center justify-center">
              <img
                src="assets/images/air.png"
                alt="Presser"
                className="w-10 ml-2 md:w-14 "
              />
              <p className="pl-1 md:text-lg font-bold">{data.main.pressure}hpa</p>
            </div>
          </div>
        </div>

        </div>


      </div> 
    </div>
  );
}

export default CurrentWether;
