import React from "react";
import Card from "@/app/components/Card";
import ScopeControl from "@/app/FirstPage/component/Abrangências/ScopeControl";

export default function Coverage() {
  return (
    <Card title="Abrangências">
      <div className="flex flex-row gap-4 justify-center items-center">
      <ScopeControl label="Recursos"/>
      <ScopeControl label="Turnos"/>
      <ScopeControl label="O.Ps"/>

      </div>
    </Card>
  );
}
