import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";


export default function Home() {
  
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Marcelo', 31, '2'),
    new Cliente('João', 24, '3'),
    new Cliente('Ricardo', 12, '4')
  ]
  return (
      <div className={`flex h-screen justify-center items-center bg-gradient-to-tl from-purple-500  to-blue-600 text-white`}>
        <Layout titulo="Cadastro Simples">
          <Tabela clientes={clientes}></Tabela>
        </Layout>
      </div>
  )
}
