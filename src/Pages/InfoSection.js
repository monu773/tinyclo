import React from "react";
import infoImage from "../Images/info_section.png";
import InfoCard from "../Components/InfoCard";
import infoImage1 from "../Images/info01.png";
import infoImage2 from "../Images/info02.png";
import infoImage3 from "../Images/info03.png";

const InfoSection = () => {
  return (
    <div className="mt-16">
      <h1 className="text-[40px] text-[#323233] font-medium text-start">
        How it Works?
      </h1>
      <div className="border-2 border-[#EBB5BB] w-[360px] rounded-2xl"></div>
      <div className="flex flex-col justify-center mt-8 px-16">
        <img src={infoImage} alt="" className="h-[550px] w-full" />
        <div className="flex flex-row justify-between px-10 mt-6">
          <InfoCard
            image={infoImage3}
            para="Pick one of our plans. Choose from our curated everyday essentials, or handpick outfits from our premium brands."
          />
          <InfoCard
            image={infoImage1}
            para="When your little one outgrows their clothes, simply pop them back to us in the reusable bag. For FREE, of course"
          />
          <InfoCard
            image={infoImage2}
            para="Easily pick your next bundle of clothes in your account. They will arrive super quickly, and always with our Cleanliness Guarantee!"
          />
        </div>
        <button className="rounded-2xl self-center my-16 w-[635px] h-[79px] bg-[#147AA9] text-[32px] font-semibold text-[#FFFFFF]">
          Start Membership
        </button>
      </div>
    </div>
  );
};

export default InfoSection;
