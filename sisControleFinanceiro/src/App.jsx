import { useState } from 'react'
import './App.css'
import Cabecalho from './components/Cabecalho'
import RealizarMovimentacao from './components/realizarMovimentacao'

function App() {
  const [count, setCount] = useState(0)

  const [movimentacoes, setMovimentacoes] = useState([]);
  
  function cadastrarMovimentacao (movimentacao) {
    setMovimentacoes ([movimentacoes, movimentacao]);
    console.log(movimentacao);
  }

  return (
    <>
      <Cabecalho></Cabecalho>
      <RealizarMovimentacao aoCadastrar={cadastrarMovimentacao}></RealizarMovimentacao>
    </>
  )
}

export default App