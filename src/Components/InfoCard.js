import React from "react";

const InfoCard = ({ image, para }) => {
  return (
    <div
      className="rounded-3xl w-[343px] h-[463px]"
      style={{
        boxShadow: "0px 4px 15.5px 0px #5D96CF0D",
        border: "1px solid #3232330D"
      }}
    >
      <img src={image} alt="" className="w-full" />
      <div className="px-10">
        <p className="text-[20px] text-center font-normal text-[#000000]">
          {para}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
