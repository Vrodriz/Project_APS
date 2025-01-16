import Card from '@/app/components/Card';

export default function ProgramacaoInteligente() {
  return (
    <Card title="Programação Inteligente">
      <div className="flex flex-col gap-2">
        <select className="bg-white text-brown-700 px-4 py-2 rounded-md text-sm">
          <option>Prioridade</option>
          <option>Urgente</option>
        </select>
        <select className="bg-white text-brown-700 px-4 py-2 rounded-md text-sm">
          <option>Considerações</option>
          <option>Opção 1</option>
        </select>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-500">
          Utilizar
        </button>
      </div>
    </Card>
  );
}
