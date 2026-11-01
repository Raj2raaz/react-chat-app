import React, { useState } from "react";

function SideNavbar() {
  const [selectedChannel, serSelectedChannel] = useState("Introductions");
  const handleClick = (channelName) => {
    serSelectedChannel(channelName);
  };
  //   console.log("This is side navbar");
  return (
    <div className="w-[30%] bg-white text-black">
      <div className="flex justify-start py-8 mx-6">
        <div className="relative w-[80px] h-[80px] bg-[#ffbaba] rounded-full p-[2px]">
          <img
            src="https://plus.unsplash.com/premium_photo-1681426472026-60d4bf7b69a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="Profile Picture"
            className="w-full h-full rounded-full object-cover"
          />
          <div className="absolute bottom-1 right-0 w-5 h-5 rounded-full bg-green-500 border-2 border-white z-10"></div>
        </div>
        <div className="grid justify-center self-center px-8">
          <div className="text-xl font-semibold font-stretch-expanded">
            Rolande Raimondi
          </div>
          <div className="text-sm font-light font-stretch-expanded">
            Research Nurse
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between p-4">
          <div className="px-5 text-xl">Conversations</div>
          <div className="w-8 h-8 border border-black rounded-full flex items-center justify-center cursor-pointer text-xl px-4 mx-3">
            +
          </div>
        </div>
        <div className="">
          <ul className="px-6">
            {["Poland Office", "Introductions", "India Office"].map(
              (channel) => {
                return (
                  <li key={channel}>
                    <button
                      onClick={() => handleClick(channel)}
                      className={`flex w-full items-center gap-6 rounded-lg border-2 border-transparent p-4 text-left text-base font-light cursor-pointer transition-colors hover:border-blue-500 my-2
                        ${
                          selectedChannel === channel
                            ? "bg-blue-500 text-white"
                            : "text-black "
                        }`}
                    >
                      <span>#</span>
                      <span>{channel}</span>
                    </button>
                  </li>
                );
              },
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar;
