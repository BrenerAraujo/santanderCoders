import { useState } from "react";

export default function Contador() {
    const [contador, setContador] = useState(0)

    function aumentar() {
        setContador(contador + 1)
    }

    function diminuir() {
        setContador(contador - 1)
    }

    if(contador > 5) {
        return (
            <div>
                <h1>Valor muito grande</h1>
                <button onClick={aumentar}>Aumentar</button>
                <button onClick={diminuir}>Diminuir</button>
            </div>
        )
    }

    return (
        <div>
            <h1>Meu Contador: {contador}</h1>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
        </div>
    )
}