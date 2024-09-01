function SeletorCap(props){
    return (
        <button className="seletor">
            <i className="bi bi-list-task"></i>
            <p>{`Capítulo ${props.capituloAtual}`}</p>
        </button>
    )
}

export default SeletorCap