import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";

import useClientes from "../hooks/useClientes";


export default function Home() {

  const {clientes, cliente, novoCliente, excluirCliente, salvarCliente, clienteSelecionado, tabelaVisivel, exibirTabela } = useClientes()

  return (
    <div className={`flex h-screen justify-center items-center bg-gradient-to-tl from-purple-500  to-blue-600 text-white`}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4" onClick={novoCliente}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado}
              clienteExcluido={excluirCliente}
            ></Tabela>
          </>
        ) : (
          <Formulario cliente={cliente}
            cancelado={exibirTabela}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  )
}
