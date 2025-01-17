import React from "react";
import Card from "@/app/components/Card";
import ScopeControl from "@/app/FirstPage/component/Abrangências/ScopeControl";

export default function Coverage() {
  return (
    <Card title="Abrangências">
      <div className="flex flex-row gap-4 py-2 justify-center items-center">
      <ScopeControl label="Recursos" options={["TF-1", "TF-2", "TF-3", "TF-4"]} />
      <ScopeControl label="Turnos" options={["Turno 1", "Turno 2", "Turno 3"]} />
      <ScopeControl label="O.Ps" options={["OP-1", "OP-2", "OP-3", "OP-4"]} />

      </div>
    </Card>
  );
}
