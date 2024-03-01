import React from "react";
import demoImage from "../assets/demo-image.png";

function Features() {
  return (
    <>
      <div className="flex items-center justify-center bg-[#fff] min-h-[90vh] py-[40px]" id="features">
        <div className="flex justify-center max-w-[1200px] flex-col md:flex-row">
          <div className="md:max-w-[320px] lg:max-w-[420px] mt-[50px] px-[20px]">
            <p className="text-[#0095f7]">ORGANIC SEARCH REPORT</p>
            <h1 className="text-[#3a3f52] text-[1.8rem] sm:text-[2rem] lg:text-[3rem] font-bold">
              Search Insights
            </h1>
            <p className="text-[#8da2b5] text-[20px] font-[300]">
              Boost your digital marketing campaigns and increase your
              conversion rates
            </p>
            <a
              href="#"
              className="bg-[#0095f7] text-white py-3 px-6 block w-fit mt-[20px] rounded-md"
            >
              Start Free Trial
            </a>
          </div>
          <div className="w-[100%] md:w-[55%] p-[20px]">
            <img
              src={demoImage}
              className="bg-[] h-[100%] w-[100%] object-contain"
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
