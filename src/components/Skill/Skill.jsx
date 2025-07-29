import React from "react";
import html from "../../images/HTML.svg";
import css from "../../images/CSS.svg";
import js from "../../images/JavaScript.svg";
import react from "../../images/React-Dark.svg";
import c from "../../images/C.svg";
import java from "../../images/Java-Dark.svg";
import mysql from "../../images/MySQL-Dark.svg";
import sass from "../../images/Sass.svg";
import github from "../../images/Github-Dark.svg";
import dotnet from "../../images/DotNet.svg";

const Skill = () => {
  return (
    <div className="text-center mb-20" id="skills">
      <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        My Skills
      </h1>
      <div className="flex justify-center items-center flex-wrap">
        <img className="w-24 h-24 m-8" src={html} alt="html" />
        <img className="w-24 h-24 m-8" src={css} alt="css" />
        <img className="w-24 h-24 m-8" src={js} alt="js" />
        <img className="w-24 h-24 m-8" src={react} alt="react" />
        <img className="w-24 h-24 m-8" src={c} alt="c" />
        <img className="w-24 h-24 m-8" src={java} alt="java" />
        <img className="w-24 h-24 m-8" src={mysql} alt="mysql" />
        <img className="w-24 h-24 m-8" src={sass} alt="sass" />
        <img className="w-24 h-24 m-8" src={github} alt="github" />
        <img className="w-24 h-24 m-8" src={dotnet} alt="dotnet" />
      </div>
    </div>
  );
};

export default Skill;
