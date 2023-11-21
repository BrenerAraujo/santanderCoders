const minhaLista = [
    { id: '1', value: 'Fruta' },
    { id: '2', value: 'Legume' },
    { id: '3', value: 'Carne' }
]

export default function MinhaLista() {
    return (
        <>
            <h1>Listas</h1>
            {minhaLista.map((item) => {
            return (
                <div key={item.id}>
                    <h4>{item.value}</h4>
                </div>
            )
            })}
        </>
    )
}