import React from 'react'
import image from "../Images/home_image.jpeg";
import image01 from "../Images/home_image01.png";
import image02 from "../Images/home_image02.png";
import image03 from "../Images/home_image03.png";
import HomeCard from '../Components/HomeCard';

const Home = () => {
  return (
    <div className='h-full w-full'>
        <div className='w-full bg-[#FBFBFD] flex flex-row justify-between'>
            <div className='pt-16 pl-12'>
                <h1 className='font-bold text-[44px]'><span className='text-[#FC6565]'>BABIES</span> GROW FAST</h1>
                <h2 className='text-[#323233] text-[24px] font-normal'>Simplify Your Life with Our </h2>
                <button className='mt-4 font-bold text-[22px] text-white rounded-md py-1 px-3 bg-[#FC6565]'>TinyClo Subscription</button>
                <div className='flex flex-row gap-3 mt-20'>
                    <button className='font-semibold text-[20px] text-[#323233] rounded-md w-[209px] h-[52px] bg-[#FCEBA3]'>How it works?</button>
                    <button className='font-semibold text-[20px] text-white rounded-md w-[209px] h-[52px] bg-[#147AA9]'>Start Membership</button>
                </div>
            </div>
            <img src={image} alt='home_image' className='h-[562px] w-1/2' />
        </div>
        <div className='flex flex-row justify-between mt-24'>
            <HomeCard
                backgroundColor="bg-[#4695CF26]"  
                title="Kids Clothing"
                image={image01}
                justify="justify-end"
                image_align="end-0 top-[-75px]"
            />
            <HomeCard 
                backgroundColor="bg-[#DF88929E]" 
                title="Equipments"
                image={image02}
                justify="justify-start"
                image_align="end-0 top-[-43px]"
            />
            <HomeCard 
                backgroundColor="bg-[#2CA06E4D]" 
                title="Toys"
                image={image03}
                justify="justify-start"
                image_align="end-0 top-[-46px]"
            />
        </div>
    </div>
  )
}

export default Home;
