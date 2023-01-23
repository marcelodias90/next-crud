
interface EntradaProps{
    texto: string
    tipo?: 'texto' | 'number'
    valor: any
    className?: string
    somenteLeitura?: boolean
    valorMudou?: (valor: any) => void
}

export default function Entrada(props: EntradaProps){
    return(
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.texto}
            </label>
            <input type={props.tipo?? 'text'}
                    value={props.valor}
                    readOnly={props.somenteLeitura}
                    onChange={e => props.valorMudou?.(e.target.value)}
                    className={`
                        border border-purple-500 rounded-lg focus:outline-none bg-gray-100
                        px-4 py-2 ${props.somenteLeitura ? 'bg-gray-300' : 'focus:bg-white' }
                    `} 
                />
        </div>
    )
}