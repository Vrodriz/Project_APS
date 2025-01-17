import React from "react";
import Card from "../../components/Card";

export default function Period() {
  return (
    <Card title="Período de Programação">
      <div className="flex flex-row py-[4px] gap-4 justify-center sm:justify-center">
        <button className="bg-white text-customBrown px-4 py-3 rounded-md text-sm hover:bg-gray-200">
          Início
        </button>
        <button className="bg-white text-customBrown px-4 py-1 rounded-md text-sm hover:bg-gray-200">
          Fim
        </button>
      </div>
      
    </Card>
  );
}
