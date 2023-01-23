
interface BotaoProps{
    cor?: 'green' | 'blue' | 'gray'
    children?: any
    className?: string
    onClick?: () => void
 }

export default function Botao(props: BotaoProps){
    const cor = props.cor ?? "gray"

    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-tl from-${cor}-400 to-${cor}-700
            text-gray-200 px-4 py-2 rounded-full
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}