import { LuCircleArrowRight } from "react-icons/lu";
import { TbPhoneCall } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
import {
  BsCheckCircle,
  BsCheckCircleFill,
  BsQuestionCircle,
} from "react-icons/bs";

import Image from "next/image";
import React from "react";
import Breadcrumbs from "@/components /Breadcrumbs";
import { BiCheckCircle } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import AboutUs from "@/components /about/AboutUs";
import MissionVision from "@/components /about/MissionVision";
import LeadershipTeam from "@/components /about/LeadershipTeam";
import OurTeam from "@/components /teams/OurTeam";

const About = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <Breadcrumbs title="About Us" />
      <AboutUs />
      <MissionVision />
      <LeadershipTeam />
      <OurTeam />
    </div>
  );
};

export default About;
