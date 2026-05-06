import Link from 'next/link';
import React from 'react';

export const RegisterBanner: React.FC = () => {
  return (
    <div className="h-[469px] lg:h-[481px] bg-gradient-to-r from-[#7057FD] to-[#2679FD]">
        <div className="flex flex-col items-center justify-center gap-y-7 h-[469px] lg:h-[481px] px-6 lg:px-0">
          <h4 data-aos="fade-down" className="text-white text-center font-venimg font-medium leading-none text-[41px] lg:text-[57px]">hurry up register <br className="hidden lg:block"/>now</h4>
          <p className="text-white text-sm w-[360px] lg:w-full lg:text-[17px] font-custom-regular text-center">
          Access the people, insights, and opportunities driving the next phase of blockchain globally.
          <br className="hidden lg:block"/>
          Join thousands of builders, investors, and innovators shaping what comes next - beyond borders, on chain.
          </p>
          <div className="flex items-center lg:items-start flex-col lg:flex-row w-full lg:w-max gap-4 lg:gap-6">
            <Link  href="/register" passHref className="block bg-black border-2 text-center w-[90%] lg:w-max border-solid border-black px-6 py-2.5 lg:py-2 no-underline outline-none">
              <span className="text-white text-base font-custom-regular font-medium whitespace-nowrap">Register now</span>
            </Link>
            <Link  href="/become-sponsor" passHref className="block border-2 w-[90%] text-center lg:w-max border-solid border-black px-6 py-2.5 lg:py-2 no-underline outline-none">
              <span className="text-black text-base font-custom-regular font-medium whitespace-nowrap">Become Sponsor</span>
            </Link>
          </div>
          </div>
  </div>
  )
};
