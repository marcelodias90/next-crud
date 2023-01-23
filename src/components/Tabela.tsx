import Cliente from "../core/Cliente"
import BotaoAcoes from "./BotaoAcoes"
import { IconeEdicao, IconeLixo } from "./Icones"

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                <th className="text-center p-4">Ações</th>
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4 ">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {renderizarAcoes(cliente)}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente){
        return (
            <td className="flex justify-center">
                <BotaoAcoes cor="green" onClick={() => props.clienteSelecionado?.(cliente)}>
                        {IconeEdicao}
                </BotaoAcoes>
                <BotaoAcoes cor="red" onClick={() => props.clienteExcluido?.(cliente)}>
                    {IconeLixo}
                </BotaoAcoes>
            </td>
        )
    }
    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-tl from-purple-500 to-purple-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody className="font">
                {renderizarDados()}
            </tbody>
        </table>
    )
}