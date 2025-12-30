import Breadcrumbs from "@/components /Breadcrumbs";
import OurDoctors from "@/components /teams/OurDoctors";
import OurTeam from "@/components /teams/OurTeam";

const Teams = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <Breadcrumbs title="Our Team" />
      <OurDoctors />
      <OurTeam />
    </div>
  );
};

export default Teams;
