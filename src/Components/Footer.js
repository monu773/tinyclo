import React from 'react'
import FooterImage from "../Images/footer.jpeg";

const Footer = () => {
  return (
    <div className='bg-[#1a95cf52] h-[446px] flex flex-row justify-between'>
      <img src={FooterImage} alt='' className='h-full' />
      <div className='flex flex-row w-full justify-evenly py-10'>
        <ul className='flex flex-col justify-between'>
            <div>
                <li className='text-[#2B2B2B] font-semibold text-[24px] text-start'>Our Company</li>
                <li className='text-[#212421] font-normal text-[24px] text-start mt-2'>Blog</li>
                <li className='text-[#212421] font-normal text-[24px] text-start mt-2'>About Us</li>
                <li className='text-[#212421] font-normal text-[24px] text-start mt-2'>Careers</li>
            </div>
            <li className='text-[#000000] text-[14px] font-normal self-baseline'>©2024 TinyClo. All rights reserved</li>
        </ul>
        <ul>
            <li className='text-[#2B2B2B] font-semibold text-[24px] text-start'>Products</li>
            <li className='text-[#212421] font-normal text-[24px] text-start mt-2'>Subscription Plans</li>
            <li className='text-[#212421] font-normal text-[24px] text-start mt-2'>Clothing</li>
            <li className='text-[#212421] font-normal text-[24px] text-start mt-2'>Equipments</li>
            <li className='text-[#212421] font-normal text-[24px] text-start mt-2'>Toys</li>
            <li className='text-[#212421] font-normal text-[24px] text-start mt-2'>Clean Out Closet</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;
