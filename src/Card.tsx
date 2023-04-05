import React from "react";
import { GrTwitter } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
import { Card as Noticia } from "./types/Card.type";

interface CardProps {
  noticia: Noticia;
}

const background = {
  MIN: "bg-green-primary/50",
  MED: "bg-blue-primary/50",
  MAX: "bg-red-primary/50",
};

const border = {
  MIN: "border-l-green-primary/60",
  MED: "border-l-blue-primary/60",
  MAX: "border-l-red-primary/60",
};

const shadow = {
  MIN: "shadow-green-primary/10",
  MED: "shadow-blue-primary/10",
  MAX: "shadow-red-primary/10",
};

export const Card: React.FC<CardProps> = ({ noticia }: CardProps) => {
  let color = background[noticia.nivel as keyof typeof background];
  let borderColor = border[noticia.nivel as keyof typeof border];
  let shadowColor = shadow[noticia.nivel as keyof typeof shadow];

  const handleRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div
      className={`flex flex-col md:flex-row backdrop-blur-sm bg-black/10 p-2 md:p-6 rounded-lg border-l-2 shadow-lg ${shadowColor} drop-shadow-lg  ${borderColor}`}
    >
      <div className="flex flex-col md:flex-col lg:flex-row gap-2 md:gap-5 m-2">
        <div className="flex flex-col justify-center items-center align-center justify-items-center">
          <img
            src={`${noticia.img}`}
            alt="Berni"
            className="rounded-md shadow-2xl shadow-black/20 backdrop-blur-xl"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col justify-start text-start gap-3">
            <h1 className="text-slate-200 text-xl md:text-2xl xl:text-3xl font-semibold">
              {noticia.title}
            </h1>
            <div className="flex flex-row justify-start">
              <h2 className="text-slate-200/70 font-semibold text-xs md:text-sm xl:text-md">
                {noticia.date}
              </h2>
            </div>
            <div className="flex flex-row justify-start text-justify ">
              <h2 className="text-slate-200 text-sm md:text-md lg:text-base xl:text-lg">
                {noticia.description}
              </h2>
            </div>
            <div className="flex flex-row justify-center mt-5 align-middle justify-items-center sm:mb-4 md:mt-2 md:mb-5 gap-10 mb-5 lg:mb-2  ">
              <button
                className="text-slate-200 text-2xl md:text-5xl"
                onClick={() => handleRedirect(noticia.twitter.toString())}
              >
                <GrTwitter />
              </button>
              <button
                className="text-slate-200 text-2xl md:text-5xl"
                onClick={() => handleRedirect(noticia.youtube.toString())}
              >
                <FaYoutube />
              </button>
            </div>
          </div>
          <div className="w-[100%] justify-end items-end justify-items-end flex">
            <div
              className={`h-5 w-5 sm:h-8 sm:w-8 rounded-full  ${color}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
