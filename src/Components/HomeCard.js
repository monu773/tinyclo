import React from 'react'

const HomeCard = ({backgroundColor, title, image, justify, image_align}) => {
  return (
    <div>
        <p className='font-medium text-[#323233] text-[20px] text-start'>Starting from 100 INR</p>
        <div className={`w-[415px] h-[162px] ${backgroundColor} rounded-3xl relative px-6 py-4`}>
            <img src={image} alt='' className={`absolute top-[-67px] h-[235px] ${image_align}`} />
            <div className={`flex flex-col ${justify}`}>
                <h1 className='text-[32px] text-start font-medium text-[#323233]'>{title}</h1>
                <h2 className='font-medium text-start text-[#323233] text-[20px]'>Age (0 - 6)</h2>
                <button className='mt-2 bg-[#FCEBA3] rounded-md w-[100px] h-[35px] font-semibold text-[16px] text-[#323233]' style={{boxShadow: "0px 3px 15.4px 0px #419EE217"}}>Explore &gt;</button>
            </div>
        </div>
    </div>
  )
}

export default HomeCard;
