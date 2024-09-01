function BotooesControle(props){
    return (
        <div className="caixa-botoes">
            <button onClick={props.voltarFaixa}>
                <i className="bi bi-skip-start"></i>
            </button>
            <button onClick={props.voltar15s}>
                <i className={`bi bi-arrow-counterclockwise`}></i>
            </button>
            <button onClick={props.tocarOupausarFaixa}>
                <i className={`bi bi-${props.taTocando ? "pause":"play"}-circle-fill`}></i>
            </button>
            <button onClick={props.avancar15s}>
                <i className={`bi bi-arrow-clockwise`}></i>
            </button>
            <button onClick={props.pularFaixa}>
                <i className="bi bi-skip-end"></i>
            </button>
        </div>
    )
};

export default BotooesControle