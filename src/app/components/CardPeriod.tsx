export default function CardProgramacao() {
  return (
    <div className="bg-brown-700 text-white rounded-lg p-4 shadow-md w-80">
      {/* Título do Card */}
      <div className="text-lg font-bold mb-2 text-center">
        APS - Programação de Produção
      </div>

      {/* Período de Programação */}
      <div className="mb-4">
        <div className="text-sm font-semibold">Período de Programação</div>
        <div className="flex justify-between gap-2 mt-2">
          <button className="bg-white text-brown-700 px-4 py-1 rounded-md text-sm hover:bg-gray-200">
            Início
          </button>
          <button className="bg-white text-brown-700 px-4 py-1 rounded-md text-sm hover:bg-gray-200">
            Fim
          </button>
        </div>
      </div>

      {/* Abrangências */}
      <div className="mb-4">
        <div className="text-sm font-semibold">Abrangências</div>
        <div className="mt-2">
          <span className="bg-white text-brown-700 px-4 py-1 rounded-md text-sm inline-block">
            C. Recursos: 2
          </span>
          <span className="bg-white text-brown-700 px-4 py-1 rounded-md text-sm inline-block ml-2">
            Turnos: 2
          </span>
        </div>
      </div>

      {/* Botões de Ação */}
      <div className="flex justify-between gap-4 mt-4">
        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 text-sm">
          Gerar
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 text-sm">
          Salvar
        </button>
      </div>
    </div>
  );
}
