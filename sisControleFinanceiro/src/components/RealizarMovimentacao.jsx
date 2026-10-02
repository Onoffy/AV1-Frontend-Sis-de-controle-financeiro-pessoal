import { use, useState } from 'react'

export default function RealizarMovimentacao ({aoCadastrar}) {

    const categorias = [
        "Salário",
        "Alimentação",
        "Saúde",
        "Lazer",
        "Transporte",
        "Outros"
    ]

    const [tipo, setTipo] = useState("receita");
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");
    const [categoria, setCategoria] = useState("");
    const [erro, setErro] = useState("");

    function enviar (evento) {
        evento.preventDefault();
        
        if (descricao === "") {
            setErro("É necessário uma descrição para prosseguir");
            return;
        };

        if (categoria === "" || categoria === "Selecionar") {
            setErro("É necessário selecionar uma categoria para prosseguir");
            return;
        };

        setErro("");

        const movimentacao = {
            tipo: tipo,
            descricao: descricao,
            valor: Number(valor),
            categoria: categoria
        };

        aoCadastrar(movimentacao);
    }

    return <section className='novaMovimentacao'>

        <h2>Nova movimentação</h2>

        <form onSubmit={enviar}>

            <div className='tipoMovimentacao'>
                <button 
                    type='button' 
                    className={tipo === "receita" ? "receita selecionado" : "receita"} 
                    onClick={() => setTipo("receita")}
                >
                Receitas
                </button>

                <button 
                    type='button'
                    className={tipo === "despesa" ? "despesa selecionado" : "despesa"} 
                    onClick={() => setTipo("despesa")}
                >
                    Despesas
                </button>
            </div>

            <div className='descricaoMovimentacao'>
                <label>Descrição</label>
                <input 
                    type="text" 
                    placeholder='Ex: Salário do mês' 
                    value={descricao} 
                    onChange={(evento) => setDescricao(evento.target.value)}
                />
            </div>

            <div className='valorCategoriaMovimentacao'>
                <div className='valorMovimentacao'>
                    <label>Valor</label>
                    <input 
                        type="number"
                        placeholder='0,00'
                        value={valor} 
                        onChange={(evento) => setValor(evento.target.value)}
                    />
                </div>
                
                <div className='categoriaMovimentacao'>
                    <label>Categoria</label>
                    <select 
                        name="categorias" 
                        id="categorias" 
                        value={categoria}
                        onChange={(evento) => setCategoria(evento.target.value)}
                    >
                        <option>Selecionar</option>
                            {categorias.map((categoria) => (
                                <option key={categoria} value={categoria}>
                                    {categoria}
                                </option>
                            ))}
                    </select>
                </div>
            </div>
            
            {erro && <p className='mensagemErro'>{erro}</p>}

            <button type='submit' className='botaoMovimentacao'>Cadastrar</button>
            
        </form>

    </section>

}