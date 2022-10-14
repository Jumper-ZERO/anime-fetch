import React from "react";

const Card = ({ img, title, titleJap }) => {
  return (
    <article className="relative w-54 h-full">
      <figure className="object-contain">
        <img className="h-80 w-60" src={img} />
      </figure>
      <header className="absolute bottom-0 bg-gradient-to-t from-blue-500 w-full p-1.5">
        <h3 className="text-sm text-white">{title}</h3>
        <h4 className="text-xs">{titleJap}</h4>
      </header>
    </article>
  );
};

export default Card;
