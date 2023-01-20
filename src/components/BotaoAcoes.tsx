interface BotaoAcoesProps {
    cor: string
    children: any
}

export default function BotaoAcoes(props: BotaoAcoesProps) {
    return (
        <button className={`
        flex justify-center items-center
        ${props.cor} rounded-full p-2 m-1
        hover:bg-purple-50
        `}>
            {props.children}
        </button>
    )
}