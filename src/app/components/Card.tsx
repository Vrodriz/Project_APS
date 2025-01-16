import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-customBrown text-white rounded-lg p-6 shadow-lg min-w-[480px] max-w-[900px] w-full">
      {/* Título */}
      <div className="text-center font-bold text-xl mb-6 border-b border-white pb-2">
        {title}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
};

export default Card;
