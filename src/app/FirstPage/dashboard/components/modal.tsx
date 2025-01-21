import { useState } from "react";

type ModalProps = {
    onSave: (item: string, duration: number, turns: number[]) => void;
    onClose: () => void;
};

const TurnCheckbox: React.FC<{ turn: number; isChecked: boolean; onToggle: () => void }> = ({
    turn,
    isChecked,
    onToggle,
}) => (
    <label className="block">
        <input type="checkbox" checked={isChecked} onChange={onToggle} />
        Turno {turn}
    </label>
);

const Modal: React.FC<ModalProps> = ({ onSave, onClose }) => {
    const [item, setItem] = useState("");
    const [duration, setDuration] = useState<number>(1);
    const [turns, setTurns] = useState<number[]>([]);
    const [error, setError] = useState<string>("");

    const toggleTurn = (turn: number) => {
        setTurns((prev) =>
            prev.includes(turn) ? prev.filter((t) => t !== turn) : [...prev, turn]
        );
    };

    const handleSave = () => {
        if (!item) {
            setError("O item é obrigatório.");
            return;
        }
        if (duration <= 0) {
            setError("A duração deve ser maior que 0.");
            return;
        }
        if (turns.length === 0) {
            setError("Selecione pelo menos um turno.");
            return;
        }
        setError("");
        onSave(item, duration, turns);
    };

    return (
        <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
            role="dialog"
            aria-labelledby="modal-title"
        >
            <div className="bg-white p-4 rounded shadow-md w-1/3">
                <h2 id="modal-title" className="text-xl font-bold mb-4">
                    Nova Produção
                </h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <label className="block mb-2">
                    Item:
                    <input
                        type="text"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                        className="border px-2 py-1 w-full"
                    />
                </label>
                <label className="block mb-2">
                    Duração (dias):
                    <input
                        type="number"
                        value={duration}
                        onChange={(e) => setDuration(Number(e.target.value))}
                        className="border px-2 py-1 w-full"
                    />
                </label>
                <div className="mb-4">
                    Turnos:
                    {[1, 2, 3].map((turn) => (
                        <TurnCheckbox
                            key={turn}
                            turn={turn}
                            isChecked={turns.includes(turn)}
                            onToggle={() => toggleTurn(turn)}
                        />
                    ))}
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={handleSave}
                        disabled={!item || duration <= 0 || turns.length === 0}
                        className={`px-4 py-2 rounded mr-2 ${
                            !item || duration <= 0 || turns.length === 0
                                ? "bg-blue-300 cursor-not-allowed"
                                : "bg-blue-500 text-white"
                        }`}
                    >
                        Salvar
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
