import React from "react";
import "../App.css";
import profilePic from "../assets/profile-picture-one.jpg";

function Testimonials() {
  return (
    <>
      <div className="bg-[#f6f8f9] flex items-center justify-center flex-col py-[40px]" id="testimonials">
          <div className="flex items-center justify-center flex-col max-w-[750px] mb-[30px] p-[20px]">
            <h1 className="text-[#3a3f52] text-center text-[1.3rem] mb-[10px] md:text-[2.3rem] lg:text-[2.7rem] font-bold">The Best Digital Agencies Recommend Our Software</h1>
            <p className="text-[#8da2b5] text-center text-[17px] lg:text-[24px]">
              Industry experts mention their experience using our software and
              the excellent results they have achieved
            </p>
          </div>

          <div className="flex items-center justify-center flex-col md:flex-row gap-5 p-[20px]">
            <div
              class="shadow py-7 px-5 max-w-[550px] bg-[#fff] rounded-[30px] min-h-[300px]"
            >
              <div className="flex items-center gap-4 pb-[20px] mb-[10px] border-b-[2px]">
                <img src={profilePic} className="h-[60px] bg-[black] rounded-full" alt="" />
                <div>
                <h3 className="text-[#3a3f52] text-[22px] font-medium">Joshua M. Salas</h3>
                <p className="text-[#3a3f52] text-[13px] font-[500]">Marketing Intelligence | Author & Content Creator</p>
                </div>
              </div>
              <p class="font-[400] text-[#3a3f52] leading-[2] tracking-[1px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque, tortor nec mattis feugiat, velit purus euismod odio, quis vulputate velit urna sit amet enim. Maecenas vulputate auctor ligula sed sollicitudin.
              </p>
            </div>

            <div
              class="shadow py-7 px-5 max-w-[550px] bg-[#fff] rounded-[30px] min-h-[300px]"
            >
              <div className="flex items-center gap-4 pb-[20px] mb-[10px] border-b-[2px]">
                <img src={profilePic} className="h-[60px] bg-[black] rounded-full" alt="" />
                <div>
                <h3 className="text-[#3a3f52] text-[22px] font-medium">Joshua M. Salas</h3>
                <p className="text-[#3a3f52] text-[13px] font-[500]">Marketing Intelligence | Author & Content Creator</p>
                </div>
              </div>
              <p class="font-[400] text-[#3a3f52] leading-[2] tracking-[1px]">
              In euismod, metus ac elementum tincidunt, dui eros ullamcorper lorem, at euismod augue augue quis leo. Fusce non dui augue. In hac habitasse platea dictumst. Mauris quis lacinia mauris. Proin ut pretium quam. Nam at ex finibus.
              </p>
            </div>

          </div>

      </div>
    </>
  );
}

export default Testimonials;
