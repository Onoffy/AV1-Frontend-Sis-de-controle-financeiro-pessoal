export default function ExibirTransacao({ transacao, aoRemover }) {

    const receitas = transacao.filter((movimentacao) => {
        return movimentacao.tipo === "receita";
    });

    const despesas = transacao.filter((movimentacao) => {
        return movimentacao.tipo === "despesa";
    });

    const totalReceitas = receitas.reduce((total, movimentacao) => {
        return total + movimentacao.valor;
    }, 0);

    const totalDespesas = despesas.reduce((total, movimentacao) => {
        return total + movimentacao.valor;
    }, 0);

    const saldoTotal = totalReceitas - totalDespesas;

    return (
        <section className="historico">

            <div className="resumoFinanceiro">
                <h2>Saldo Total</h2>
                <p className="saldoValor">R$ {saldoTotal}</p>

                <div className="resumo">
                    <div className="resumoReceita">
                        <span>Receitas</span>
                        <strong>R$ {totalReceitas}</strong>
                    </div>

                    <div className="resumoDespesa">
                        <span>Despesas</span>
                        <strong>R$ {totalDespesas}</strong>
                    </div>
                </div>
            </div>

            <div className="historicoMovimentacoes">

                <h2>Histórico de movimentações</h2>

                <div className="secaoMovimentacoes">
                    <h3>Receitas</h3>

                    {receitas.length === 0 ? (
                        <p className="semMovimentacoes">
                            Nenhuma receita cadastrada.
                        </p>
                    ) : (
                        receitas.map((movimentacao, index) => {
                            return (
                                <div className="movimentacao receitaCard" key={index}>
                                    <div className="informacoesMovimentacao">
                                        <p><strong>{movimentacao.descricao}</strong></p>
                                        <p>Categoria: {movimentacao.categoria}</p>
                                        <p>Valor: R$ {movimentacao.valor}</p>
                                    </div>

                                    <button
                                        className="botaoRemover"
                                        onClick={() => aoRemover(movimentacao)}
                                    >
                                        Remover
                                    </button>
                                </div>
                            );
                        })
                    )}
                </div>

                <div className="secaoMovimentacoes">
                    <h3>Despesas</h3>

                    {despesas.length === 0 ? (
                        <p className="semMovimentacoes">
                            Nenhuma despesa cadastrada.
                        </p>
                    ) : (
                        despesas.map((movimentacao, index) => {
                            return (
                                <div className="movimentacao despesaCard" key={index}>
                                    <div className="informacoesMovimentacao">
                                        <p><strong>{movimentacao.descricao}</strong></p>
                                        <p>Categoria: {movimentacao.categoria}</p>
                                        <p>Valor: R$ {movimentacao.valor}</p>
                                    </div>

                                    <button
                                        className="botaoRemover"
                                        onClick={() => aoRemover(movimentacao)}
                                    >
                                        Remover
                                    </button>
                                </div>
                            );
                        })
                    )}
                </div>

            </div>
        </section>
    );
}
