const ConteinerProgress = ({tempoTotalFaixa , tempoAtualFaixa, referencia, avancarPara}) =>{
    const formatarTempo = (tempoEmSegundos) => {
        const Tempo = new Date(null);
        Tempo.setSeconds(tempoEmSegundos)
        return Tempo.toISOString().slice(14, 19);
    }
    return (
        <section className="container-progresso">
            <div className="progresso-total" ref={referencia} onClick={avancarPara}>
                <div className="progresso-atual" style={{width: `${tempoAtualFaixa*100/tempoTotalFaixa}%`}}></div>
                <div className="marcador-posicao" style={{left: `${tempoAtualFaixa*100/tempoTotalFaixa}%`}}></div>
            </div>
            <div className="metricas-tempo">
                <p>{formatarTempo(tempoAtualFaixa)}</p>
                <p>{formatarTempo(tempoTotalFaixa)}</p>
            </div>
        </section>
    )
};

export default ConteinerProgress