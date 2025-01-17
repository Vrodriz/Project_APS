import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-customBrown text-white shadow-md hover:shadow-xl p-2 transition-shadow duration-300  rounded-[10px] ease-in-out w-auto h-full flex flex-col">
      {/* Título */}
      <div className="text-center font-bold text-xl mb-4  border-opacity-50 border-white pb-2">
        {title}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col gap-6 flex-grow">{children}</div>
    </div>
  );
};

export default Card;

