import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-customBrown text-white shadow-md hover:shadow-xl p-2 transition-shadow duration-300  rounded-[10px] ease-in-out w-[400px] h-[100px] flex flex-col">
      {/* Título */}
      <div className="text-center font-bold  border-opacity-50 border-white">
        {title}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col flex-grow">{children}</div>
    </div>
  );
};

export default Card;

