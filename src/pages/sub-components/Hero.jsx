import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Facebook,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReactTyped } from "react-typed";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { serverUrl } from "@/ServerUrl.js";

const Hero = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axios.get(
        `${serverUrl}/api/v1/user/me/portfolio`,
        {
          withCredentials: true,
        }
      );
      setUser(data.user);
    };
    getMyProfile();
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center px-5 mt-4 sm:mt-6 md:mt-8 lg:mt-7 xl:mt-6 sm:mx-auto w-full max-w-[1050px]">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-green-400 rounded-full h-2 w-2"></span>
          <p>Online</p>
        </div>
        <ModeToggle />
      </div>
      <h1 className="overflow-x-hidden text-[1.3rem] sm:text-[1.7rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[2px] mb-4">
        Hey, I'm {user.fullName}
      </h1>
      <h1 className="text-tubeLight-effect overflow-x-hidden text-[1.3rem] sm:text-[1.7rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[15px]">
        <ReactTyped
          strings={[
            "Frontend Developer",
            "Backend Developer",
            "Designer",
            "Full Stack Developer",
          ]}
          typeSpeed={80}
          backSpeed={70}
          backDelay={1000}
          loop
        />
      </h1>
      <div className="w-fit px-5 py-2 bg-slate-50 rounded-[20px] flex gap-5 items-center mt-4 md:mt-8 lg:mt-10">
        <Link to={user.instagramURL} target="_blank">
          <Instagram className="text-pink-500 w-7 h-7" />
        </Link>
        <Link to={user.facebookURL} target="_blank">
          <Facebook className="text-blue-800 w-7 h-7" />
        </Link>
        <Link to={user.linkedInURL} target="_blank">
          <Linkedin className="text-sky-800 w-7 h-7" />
        </Link>
        {/* <Link to={user.githubURL} target="_blank">
          <Github className="text-slate-800 w-7 h-7" />
        </Link> */}
      </div>
      <div className="mt-4 md:mt-8 lg:mt-10 flex gap-3">
        <Link to={user.githubURL} target="_blank">
          <Button className="rounded-[30px] items-center gap-2 flex-row">
            <span>
              <Github />
            </span>
            <span>Github</span>
          </Button>
        </Link>
        <Link to={user.resume && user.resume.url} target="_blank">
          <Button className="rounded-[30px] items-center gap-2 flex-row">
            <span>
              <ExternalLink />
            </span>
            <span>Resume</span>
          </Button>
        </Link>
      </div>
      <p className="mt-8 text-xl tracking-[2px]">{user.aboutMe}</p>
      <hr className="my-8 md:my-10" />
    </div>
  );
};

export default Hero;
