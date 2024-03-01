// import React from 'react'
// import "../App.css";
// import { FaCheck } from "react-icons/fa";


// function Pricing() {
//   return (
//     <>
//       <div className="bg-[#fff] flex items-center justify-center flex-col py-[40px] mb-[20px]">
//           <div className="flex items-center justify-center flex-col max-w-[700px] mb-[30px] p-[20px]">
//             <h1 className="text-[#3a3f52] text-center text-[1.8rem] md:text-[2.5rem] lg:text-[3rem] font-bold">Plans and Pricing</h1>
//             <p className="text-[#8da2b5] text-center text-[18px] md:text-[24px] font-[300]">
//             The best software to develop perfect content and advertising strategies to increase leads and sales.
//             </p>
//           </div>

//           <div className='flex items-center justify-center flex-wrap lg:flex-nowrap	max-w-[1200px] p-[20px] gap-5 mt-[40px]'>

//           <div className='shadow2 bg-[re] max-w-[340px] lg:w-[auto] px-[20px] py-[30px] flex justify-center flex-col rounded-[10px]'>
//             <div className='border-b-[1px] pb-[30px]'>
//                 <h3 className='text-[#6772e5] tracking-[3px] text-[20px]'>Demo Version</h3>
//                 <h1 className='text-[#3a3f52] text-[3rem] font-bold'>Free</h1>
//                 <p className='text-[#8da2b5] text-[14px] tracking-[2px]'>forever</p>
//                 <p className='text-[#53627c] text-[18px] mt-[15px] tracking-[1px]'>Demo gives you full access to all features for 7 days</p>
//             </div>
//             <div className='mt-[20px]'>
//                 <p className='text-[#8da2b5] flex items-center gap-3 mb-[5px]'><FaCheck size={12} className='text-[#6772e5]' /> Marketing plan</p>
//                 <p className='text-[#8da2b5] flex items-center gap-3 mb-[5px]'><FaCheck size={12} className='text-[#6772e5]' /> Seo reporting tool</p>
//                 <p className='text-[#8da2b5] flex items-center gap-3 mb-[5px]'><FaCheck size={12} className='text-[#6772e5]' /> Keywords explorer</p>
//                 <p className='text-[#8da2b5] flex items-center gap-3 mb-[5px]'><FaCheck size={12} className='text-[#6772e5]' /> Competitive analysis</p>
//                 <p className='text-[#8da2b5] flex items-center gap-3 mb-[5px]'><FaCheck size={12} className='text-[#6772e5]' /> Five projects -<span className='font-[600] text-[#6772e5]'>¡New!</span></p>                
//                 <a className='bg-[#6772e5] block text-center py-[10px] mt-[20px] rounded-[5px] text-white font-semibold tracking-[1px]' href="#">Demo version</a>
//             </div>
//           </div>

//           <div className='shadow2 bg-[re] max-w-[340px] lg:w-[auto] px-[20px] py-[30px] flex justify-center flex-col rounded-[10px]'>
//             <div className='border-b-[1px] pb-[30px]'>
//                 <h3 className='text-[#0095f7] tracking-[3px] text-[20px]'>Standard Version</h3>
//                 <h1 className='text-[#3a3f52] text-[3rem] font-bold'>$9</h1>
//                 <p className='text-[#8da2b5] text-[14px] tracking-[2px]'>per month</p>
//                 <p className='text-[#53627c] text-[18px] mt-[15px] tracking-[1px]'>Outrank your competitors with this amazing software</p>
//             </div>
//             <div className='mt-[20px]'>
//                 <p className='text-[#8da2b5] flex items-center gap-3 mb-[5px]'><FaCheck size={12} className='text-[#0095f7]' /> Marketing plan</p>
//                 <p className='text-[#8da2b5] flex items-center gap-3 mb-[5px]'><FaCheck size={12} className='text-[#0095f7]' /> Seo reporting tool</p>
//                 <p className='text-[#8da2b5] flex items-center gap-3 mb-[5px]'><FaCheck size={12} className='text-[#0095f7]' /> Keywords explorer</p>
//                 <p className='text-[#8da2b5] flex items-center gap-3 mb-[5px]'><FaCheck size={12} className='text-[#0095f7]' /> Competitive analysis</p>
//                 <p className='text-[#8da2b5] flex items-center gap-3 mb-[5px]'><FaCheck size={12} className='text-[#0095f7]' /> Unlimited projects -<span className='font-[600] text-[#6772e5]'>¡New!</span></p>                
//                 <a className='bg-[#0095f7] block text-center py-[10px] mt-[20px] rounded-[5px] text-white font-semibold tracking-[1px]' href="#">Buy now</a>
//             </div>
//           </div>

//           <div className='shadow2 bg-[re] max-w-[340px] lg:w-[auto] px-[20px] py-[30px] flex justify-center flex-col rounded-[10px]'>
//             <div className='border-b-[1px] pb-[30px]'>
//                 <h3 className='text-[#0095f7] tracking-[3px] text-[20px]'>Agency Version</h3>
//                 <h1 className='text-[#3a3f52] text-[3rem] font-bold'>$29</h1>
//                 <p className='text-[#8da2b5] text-[14px] tracking-[2px]'>per month</p>
//                 <p className='text-[#53627c] text-[18px] mt-[15px] tracking-[1px]'>For agencies and businesses with extensive web presence</p>
//             </div>
//             <div className='mt-[20px]'>
//                 <p className='text-[#8da2b5] flex items-center gap-3 mb-[5px]'><FaCheck size={12} className='text-[#0095f7]' /> Marketing plan</p>
//                 <p className='text-[#8da2b5] flex items-center gap-3 mb-[5px]'><FaCheck size={12} className='text-[#0095f7]' /> Seo reporting tool</p>
//                 <p className='text-[#8da2b5] flex items-center gap-3 mb-[5px]'><FaCheck size={12} className='text-[#0095f7]' /> Keywords explorer</p>
//                 <p className='text-[#8da2b5] flex items-center gap-3 mb-[5px]'><FaCheck size={12} className='text-[#0095f7]' /> Competitive analysis</p>
//                 <p className='text-[#8da2b5] flex items-center gap-3 mb-[5px]'><FaCheck size={12} className='text-[#0095f7]' /> Unlimited projects -<span className='font-[600] text-[#6772e5]'>¡New!</span></p>                
//                 <a className='bg-[#0095f7] block text-center py-[10px] mt-[20px] rounded-[5px] text-white font-semibold tracking-[1px]' href="#">Buy now</a>
//             </div>
//           </div>

//           </div>

//       </div>
//     </>
//   )
// }

// export default Pricing

import React from 'react';
import { FaCheck } from "react-icons/fa";
import plansData from "./Data"

function Pricing() {


  return (
    <div className="bg-[#fff] flex items-center justify-center flex-col py-[40px] mb-[20px]" id='pricing'>
      <div className="flex items-center justify-center flex-col max-w-[700px] mb-[30px] p-[20px]">
        <h1 className="text-[#3a3f52] text-center text-[1.8rem] md:text-[2.5rem] lg:text-[3rem] font-bold">Plans and Pricing</h1>
        <p className="text-[#8da2b5] text-center text-[18px] md:text-[24px] font-[300]">
          The best software to develop perfect content and advertising strategies to increase leads and sales.
        </p>
      </div>

      <div className='flex items-center justify-center flex-wrap lg:flex-nowrap max-w-[1200px] p-[20px] gap-5 mt-[40px]'>
        {plansData.map((plan, index) => (
          <div key={index} className={`shadow2 bg-[${plan.bgcolor}] max-w-[340px] lg:w-[auto] px-[20px] py-[30px] flex justify-center flex-col rounded-[10px]`}>
            <div className='border-b-[1px] pb-[30px]'>
              <h3 className={`text-[${plan.color}] tracking-[3px] text-[20px]`}>{plan.name}</h3>
              <h1 className='text-[#3a3f52] text-[3rem] font-bold'>{plan.price}</h1>
              <p className='text-[#8da2b5] text-[14px] tracking-[2px]'>{plan.frequency}</p>
              <p className='text-[#53627c] text-[18px] mt-[15px] tracking-[1px]'>{plan.description}</p>
            </div>
            <div className='mt-[20px]'>
              {plan.features.map((feature, index) => (
                <p key={index} className='text-[#8da2b5] flex items-center gap-3 mb-[5px]'>
                  <FaCheck size={12} className={`text-[${plan.color}]`} />
                  {feature}
                </p>
              ))}
              <a className={`bg-[${plan.color}] block text-center py-[10px] mt-[20px] rounded-[5px] text-white font-semibold tracking-[1px]`} href="#">{plan.buttonText}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
