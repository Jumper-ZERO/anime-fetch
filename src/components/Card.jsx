import React from "react";

const Card = ({ img, title, titleJap }) => {
  return (
    <article className="relative w-54 m-3">
      <figure className="object-contain">
        <img className="" src={img} />
      </figure>
      <header className="flex flex-col justify-end absolute bottom-0 bg-gradient-to-t from-black w-full h-24 p-1.5">
        <h3 className="font-cobin font-bold text-lg text-white">{title}</h3>
        <h4 className="font-zen text-sm text-white">{titleJap}</h4>
      </header>
    </article>
  );
};

export default Card;
