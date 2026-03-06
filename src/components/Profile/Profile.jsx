import React from "react";
import fb from "../../images/facebook.png";
import ig from "../../images/instagram.png";
import ln from "../../images/linkedin.png";
import pic from "../../images/LOV09312.jpg";
import Typewriter from "typewriter-effect";

const Profile = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden flex flex-col-reverse md:grid md:grid-cols-2 md:gap-8 items-center px-6 sm:px-10 md:px-0 py-16 md:py-0">
      {/* Text Content */}
      <div className="section-content flex flex-col items-center md:items-start text-center md:text-left md:pl-[100px] mt-8 md:mt-0">
        <h3 className="text-3xl sm:text-4xl md:text-5xl text-[#00abf0] mb-2">
          Hello,
        </h3>

        <h2 className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-4">
          I am Kavindu Thilan
        </h2>

        <h4 className="text-2xl sm:text-[28px] md:text-[35px] text-white mt-4 animate-pulse min-h-[50px]">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 100,
              strings: ["A FULL STACK DEVELOPER!!"],
            }}
          />
        </h4>

        <div className="mt-8">
          <a href="#contact">
            <span className="inline-block p-2 px-5 rounded-[5px] bg-[#081b29] border-2 border-[#00abf0] text-[18px] text-[#00abf0] cursor-pointer hover:bg-[#00abf0] hover:text-[#081b29] transition-colors duration-300">
              Contact Me
            </span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-10 justify-center md:justify-start">
          <a
            href="https://www.facebook.com/kavindu.thilan.35/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="w-[55px] h-[55px] sm:w-[65px] sm:h-[65px] md:w-[75px] md:h-[75px] border-2 border-solid border-[#00abf0] rounded-full bg-[#00abf0] hover:bg-[#ededed] hover:border-[#ededed] transition-all duration-300"
              src={fb}
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.instagram.com/kavindu_thilan/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="w-[55px] h-[55px] sm:w-[65px] sm:h-[65px] md:w-[75px] md:h-[75px] border-2 border-solid border-[#00abf0] rounded-full bg-[#00abf0] hover:bg-[#ededed] hover:border-[#ededed] transition-all duration-300"
              src={ig}
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kavindu-thilan-324634210/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="w-[55px] h-[55px] sm:w-[65px] sm:h-[65px] md:w-[75px] md:h-[75px] border-2 border-solid border-[#00abf0] rounded-full bg-[#00abf0] hover:bg-[#ededed] hover:border-[#ededed] transition-all duration-300"
              src={ln}
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>

      {/* ── Profile Image – Enhanced Section ── */}
      <div className="flex justify-center items-center">
        <div className="relative flex justify-center items-center">
          {/* Outermost slow-spinning gradient ring */}
          <div
            className="absolute w-[260px] h-[260px] sm:w-[370px] sm:h-[370px] md:w-[510px] md:h-[510px] lg:w-[560px] lg:h-[560px] rounded-full bg-gradient-to-tr from-[#00abf0] via-purple-500 to-pink-500 opacity-30 animate-spin"
            style={{ animationDuration: "8s" }}
          />

          {/* Middle pulsing glow ring */}
          <div className="absolute w-[245px] h-[245px] sm:w-[350px] sm:h-[350px] md:w-[485px] md:h-[485px] lg:w-[535px] lg:h-[535px] rounded-full bg-gradient-to-br from-[#00abf0] via-blue-600 to-purple-600 opacity-40 animate-pulse" />

          {/* Dashed counter-spinning orbit ring */}
          <div
            className="absolute w-[255px] h-[255px] sm:w-[360px] sm:h-[360px] md:w-[500px] md:h-[500px] lg:w-[548px] lg:h-[548px] rounded-full border-2 border-dashed border-[#00abf0] opacity-50 animate-spin"
            style={{ animationDuration: "15s", animationDirection: "reverse" }}
          />

          {/* Solid border ring just outside image */}
          <div className="absolute w-[235px] h-[235px] sm:w-[335px] sm:h-[335px] md:w-[465px] md:h-[465px] lg:w-[518px] lg:h-[518px] rounded-full border-4 border-[#00abf0] opacity-70" />

          {/* Soft glow backdrop */}
          <div className="absolute w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full bg-[#00abf0] opacity-20 blur-2xl" />

          {/* Profile Image */}
          {/* <img
            className="relative z-10 w-[220px] h-[620px] sm:w-[320px] sm:h-[420px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full object-cover border-4 border-[#00abf0] shadow-[0_0_40px_#00abf0aa] hover:scale-105 transition-transform duration-500 cursor-pointer"
            src={pic}
            alt="Kavindu Thilan"
          /> */}
          <img
            className="relative z-10 
              w-[220px] h-[220px] 
              sm:w-[320px] sm:h-[320px] 
              md:w-[450px] md:h-[450px] 
              lg:w-[500px] lg:h-[500px] 
              rounded-full object-center
              border-4 border-[#00abf0] 
              shadow-[0_0_40px_#00abf0aa] 
              hover:scale-105 transition-transform duration-500 cursor-pointer"
            src={pic}
            alt="Kavindu Thilan"
          />

          {/* Floating dot — top right */}
          <div className="absolute top-2 right-4 sm:top-4 sm:right-6 md:top-6 md:right-8 z-20 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#00abf0] shadow-[0_0_12px_#00abf0] animate-bounce" />

          {/* Floating dot — bottom left */}
          <div
            className="absolute bottom-2 left-4 sm:bottom-4 sm:left-6 md:bottom-6 md:left-8 z-20 w-3 h-3 md:w-4 md:h-4 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-bounce"
            style={{ animationDelay: "0.4s" }}
          />

          {/* Floating dot — left middle */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-2 h-2 md:w-3 md:h-3 rounded-full bg-pink-400 shadow-[0_0_8px_rgba(244,114,182,0.8)] animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
