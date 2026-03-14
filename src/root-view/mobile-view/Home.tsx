import { useState, useCallback } from "react";
import AppLoading from "./appLoading";
import { Skeleton } from "./Skeleton";
import { REMPHome } from "./REMPHome";

interface HomeProps {
  activePage: string;
}

export function Home({ activePage }: HomeProps) {
  if (activePage === "AppLoading") {
    return <AppLoading />;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-[2px]">
        {activePage === "Home" && <REMPHome />}
        {activePage === "Explore" && <ExploreContent />}
        {activePage === "Profile" && <ProfileContent />}
        {activePage === "Skeleton" && <Skeleton />}
      </div>
    </div>
  );
}

function HomeContent() {
  return (
    <div className="flex flex-col gap-[2px]">
      <div className="text-[15px] font-semibold text-cremp-blue mb-[1px]">
        Welcome Back
      </div>
      <p className="text-[12px] text-cremp-gray leading-snug">
        Your personalized dashboard is ready. Browse recent activity, explore
        new content, or update your profile.
      </p>
      <div className="grid grid-cols-2 gap-[2px] mt-[2px]">
        {["Activity", "Messages", "Saved", "Settings"].map((item) => (
          <div
            key={item}
            className="bg-cremp-bg rounded-[5px] p-[2px] text-center"
          >
            <div className="text-[20px] mb-[1px]">
              {item === "Activity"
                ? "📊"
                : item === "Messages"
                  ? "💬"
                  : item === "Saved"
                    ? "⭐"
                    : "⚙️"}
            </div>
            <div className="text-[11px] text-cremp-blue">{item}</div>
          </div>
        ))}
      </div>
      <div className="mt-[2px] bg-cremp-bg rounded-[5px] p-[2px]">
        <div className="text-[12px] font-medium text-cremp-blue mb-[1px]">
          Recent Updates
        </div>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex items-center gap-[2px] py-[1px] border-b border-cremp-lightgray last:border-0"
          >
            <div className="w-6 h-6 bg-cremp-lightgray rounded-[5px] flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-[11px] text-cremp-blue truncate">
                Update item {i}
              </div>
              <div className="text-[10px] text-cremp-gray">Just now</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExploreContent() {
  return (
    <div className="flex flex-col gap-[2px]">
      <div className="text-[15px] font-semibold text-cremp-blue">Explore</div>
      <p className="text-[12px] text-cremp-gray">
        Discover new content and trending topics.
      </p>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="bg-cremp-bg rounded-[5px] p-[2px]">
          <div className="h-24 bg-cremp-lightgray rounded-[5px] mb-[1px]" />
          <div className="text-[11px] text-cremp-blue">Featured item {i}</div>
        </div>
      ))}
    </div>
  );
}

function ProfileContent() {
  return (
    <div className="flex flex-col items-center gap-[2px] pt-4">
      <div className="w-14 h-14 bg-cremp-lightgray rounded-full" />
      <div className="text-[14px] font-medium text-cremp-blue">User Name</div>
      <div className="text-[11px] text-cremp-gray">user@example.com</div>
      <div className="w-full mt-[2px]">
        {["Edit Profile", "Preferences", "Log Out"].map((label) => (
          <div
            key={label}
            className="py-[2px] px-[2px] border-b border-cremp-lightgray text-[12px] text-cremp-blue"
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
