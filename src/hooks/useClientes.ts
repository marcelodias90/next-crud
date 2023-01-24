import { useEffect, useState } from "react"
import ColecaoCliente from "../../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const {exibirForm, exibirTabela, tabelaVisivel} = useTabelaOuForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function clienteSelecionado(cliente: Cliente) {
        setCliente(cliente)
        exibirForm()
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    function novoCliente() {
        setCliente(Cliente.vazio())
        exibirForm()
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    return {
        cliente,
        clientes,
        obterTodos,
        novoCliente,
        excluirCliente,
        salvarCliente,
        clienteSelecionado,
        tabelaVisivel,
        exibirTabela
    }
}