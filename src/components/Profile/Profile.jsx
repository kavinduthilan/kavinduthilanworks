import React from "react";
import fb from "../../images/facebook.png";
import ig from "../../images/instagram.png";
import ln from "../../images/linkedin.png";
import pic from "../../images/CS.jpeg";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="h-1/4 w-full grid grid-cols-2 gap-[auto]">
      <div className="section-content">
        <h3 className="text-5xl text-left pl-[100px] mt-[100px] mb-[-50px] text-[#00abf0]">
          Hello,
        </h3>
        <h2 className="text-5xl text-left pl-[100px] pt-[80px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          I am Kavindu Thilan
        </h2>
        <h4 className="text-[35px] text-left text-white pl-[100px] pt-[20px] animate-pulse">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 100,
              strings: ["A FULL STACK DEVELOPER!!"],
            }}
          />
        </h4>
        <div className="cv">
          <Link to="contact">
            <button className="p-5 rounded-[5px] bg-[#081b29] border-2 border-[#00abf0] text-[18px] text-[#00abf0] cursor-pointer mt-10 ml-24 mr-12 hover:bg-[#00abf0] hover:text-[#081b29]">
              Contact Me
            </button>
          </Link>
          {/* <a href={myCV} download="KavinduThilanCV.pdf">
            <button className="btn2">Download CV</button>
          </a> */}
        </div>

        <div className="flex ml-24 mt-20 w-full">
          <a href="https://www.google.com" rel="noreferrer" target="_blank">
            <img
              className="w-[75px] h-[75px] bg-none border-2 border-solid border-[#00abf0] rounded-[50%] bg-[#00abf0] mr-12 hover:bg-[#ededed] hover:border-2 hover:border-solid hover:border-[#ededed]"
              src={fb}
              alt="fb"
            />
          </a>
          <a href="https://www.google.com" rel="noreferrer" target="_blank">
            <img
              className="w-[75px] h-[75px] bg-none border-2 border-solid border-[#00abf0] rounded-[50%] bg-[#00abf0] mr-12 hover:bg-[#ededed] hover:border-2 hover:border-solid hover:border-[#ededed]"
              src={ig}
              alt="ig"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kavindu-thilan-324634210/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="w-[75px] h-[75px] bg-none border-2 border-solid border-[#00abf0] rounded-[50%] bg-[#00abf0] mr-12 hover:bg-[#ededed] hover:border-2 hover:border-solid hover:border-[#ededed]"
              src={ln}
              alt="ln"
            />
          </a>
        </div>
      </div>

      <div>
        <img className="rounded-[50%]" src={pic} alt="kavindu" />
      </div>
    </div>
  );
};

export default Profile;
