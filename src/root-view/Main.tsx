import { useState } from "react";
import { useDevice } from "../context/DeviceContext";
import { Navigation } from "./Navigation";
import { PagesNav } from "./PagesNav";
import { Layout } from "./Layout";
import { Home as MobileHome } from "./mobile-view/Home";
import { Home as DesktopHome } from "./desktop-view/Home";

const mobilePages = ["AppLoading", "Skeleton","Home", "Explore", "Profile"] as const;
const desktopPages = ["Dashboard", "Projects", "Team", "Settings"] as const;


export function Main() {
  const { device } = useDevice();
  const [mobilePage, setMobilePage] = useState<string>("AppLoading");
  const [desktopPage, setDesktopPage] = useState<string>("Dashboard");

  return (
    <div className="h-screen flex flex-col">
      <Navigation />
      {device === "mobile" ? (
        <PagesNav
          pages={mobilePages as unknown as string[]}
          active={mobilePage}
          onNavigate={setMobilePage}
        />
      ) : (
        <PagesNav
          pages={desktopPages as unknown as string[]}
          active={desktopPage}
          onNavigate={setDesktopPage}
        />
      )}
      <Layout>
        {device === "mobile" ? (
          <MobileHome activePage={mobilePage} />
        ) : (
          <DesktopHome activePage={desktopPage} />
        )}
      </Layout>
    </div>
  );
}
