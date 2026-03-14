import AppLoading from "../mobile-view/appLoading";

interface HomeProps {
  activePage: string;
}

export function Home({ activePage }: HomeProps) {
  return (
    <div className="flex flex-col h-full min-h-[600px]">
      <div className="flex-1 p-[2px] overflow-y-auto">
        {activePage === "Dashboard" && <DashboardContent />}
        {activePage === "Projects" && <ProjectsContent />}
        {activePage === "Team" && <TeamContent />}
        {activePage === "Settings" && <SettingsContent />}
      </div>
    </div>
  );
}

function DashboardContent() {
  return (
    <div className="flex flex-col gap-[2px]">
      <div className="text-[16px] font-semibold text-cremp-blue">Dashboard</div>
      <p className="text-[13px] text-cremp-gray">
        Overview of your workspace activity and metrics.
      </p>
      <div className="grid grid-cols-3 gap-[2px] mt-[2px]">
        {[
          { label: "Active Projects", value: "12" },
          { label: "Team Members", value: "8" },
          { label: "Tasks Due", value: "24" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-cremp-bg rounded-[5px] p-[2px] text-center"
          >
            <div className="text-[18px] font-bold text-cremp-blue">
              {stat.value}
            </div>
            <div className="text-[10px] text-cremp-gray">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-[2px] bg-cremp-bg rounded-[5px] p-[2px]">
        <div className="text-[13px] font-medium text-cremp-blue mb-[1px]">
          Recent Activity
        </div>
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="flex items-center gap-[2px] py-[1px] border-b border-cremp-lightgray last:border-0"
          >
            <div className="w-5 h-5 bg-cremp-lightgray rounded-[5px] flex-shrink-0" />
            <div className="flex-1">
              <div className="text-[12px] text-cremp-blue">
                Activity entry {i}
              </div>
            </div>
            <div className="text-[10px] text-cremp-gray">2m ago</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsContent() {
  return (
    <div className="flex flex-col gap-[2px]">
      <div className="text-[16px] font-semibold text-cremp-blue">Projects</div>
      <div className="grid grid-cols-2 gap-[2px]">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-cremp-bg rounded-[5px] p-[2px]">
            <div className="h-20 bg-cremp-lightgray rounded-[5px] mb-[1px]" />
            <div className="text-[12px] font-medium text-cremp-blue">
              Project {i}
            </div>
            <div className="text-[10px] text-cremp-gray">Updated recently</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamContent() {
  return (
    <div className="flex flex-col gap-[2px]">
      <div className="text-[16px] font-semibold text-cremp-blue">Team</div>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="flex items-center gap-[2px] p-[2px] bg-cremp-bg rounded-[5px]"
        >
          <div className="w-8 h-8 bg-cremp-lightgray rounded-full flex-shrink-0" />
          <div>
            <div className="text-[12px] text-cremp-blue">Team Member {i}</div>
            <div className="text-[10px] text-cremp-gray">Developer</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SettingsContent() {
  return (
    <div className="flex flex-col gap-[2px]">
      <div className="text-[16px] font-semibold text-cremp-blue">Settings</div>
      {["General", "Notifications", "Privacy", "Account"].map((section) => (
        <div
          key={section}
          className="p-[2px] border-b border-cremp-lightgray text-[13px] text-cremp-blue"
        >
          {section}
        </div>
      ))}
    </div>
  );
}
