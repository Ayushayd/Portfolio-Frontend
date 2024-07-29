import axios from "axios";
import React, { useEffect, useState } from "react";

const About = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/me/portfolio",
        {
          withCredentials: true,
        }
      );
      setUser(data.user);
    };
    getMyProfile();
  });

  return (
    <div className="w-full flex flex-col overflow-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold"
          style={{ color: "var(--text-color)" }}
        >
          ABOUT
          <span className="text-tubeLight-effect font-extrabold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <img
              src={user.avatar && user.avatar.url}
              alt={user.fullName}
              className="bg-white p-2 sm:p-4 rotate-[25deg] h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px]"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
            <p>
              I am Ayush Kumar Gupta, a passionate frontend developer with a
              solid background in C/C++ and the MERN stack. I enjoy creating
              innovative web solutions and continuously expanding my skills
              through projects and certifications.
            </p>
            <p>
              In my free time, I love playing cricket and listening to music,
              which keeps me energized and inspired.
            </p>
          </div>
        </div>
        <p className="tracking-[1px] text-xl">
          My dedication and perseverance in timely delivery of work are integral
          to me. I maintain the courage to face any challenges for extended
          periods.
        </p>
      </div>
    </div>
  );
};

export default About;
