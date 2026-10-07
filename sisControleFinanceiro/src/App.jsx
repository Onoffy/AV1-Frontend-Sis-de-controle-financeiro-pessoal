import { useState } from 'react'
import './App.css'
import Cabecalho from './components/Cabecalho'
import RealizarMovimentacao from './components/realizarMovimentacao'
import ExibirTransacao from './components/ExibirTransacao'

function App() {

  const [movimentacoes, setMovimentacoes] = useState([]);



  function cadastrarMovimentacao(movimentacao) {
    setMovimentacoes([...movimentacoes, movimentacao]);
    console.log(movimentacao);
  }

  function removerMovimentacao(movimentacao) {
    const novasMovimentacoes = movimentacoes.filter((item) => {
      return item !== movimentacao;
    });
    setMovimentacoes(novasMovimentacoes);
  }

  return (
    <>
      <Cabecalho></Cabecalho>
      <ExibirTransacao
        transacao={movimentacoes}
        aoRemover={removerMovimentacao}>
      </ExibirTransacao>
      <RealizarMovimentacao aoCadastrar={cadastrarMovimentacao}></RealizarMovimentacao>
    </>
  )
}

export default App