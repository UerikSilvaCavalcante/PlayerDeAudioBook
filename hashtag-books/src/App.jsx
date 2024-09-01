import { useState , useRef , useEffect} from 'react';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import brasCubasImg from './assets/bras_cubas.jpeg';
import Capa from './Capa';
import SeletorCap  from './SeletorCapitulos';
import BotooesControle  from './BotoesControle';
import livro from './assets/capitulos/livro';
import GerenciadorFaixa from './GerenciadorFaixa';
import ConteinerProgress from './ContainerProgress';


function App() {
  const [taTocando, definirtaTocando] = useState(false);
  const [faixaAtual, definirfaixaAtual] = useState(0);
  const [tempoTotalFaixa, setempoTotalFaixa] = useState(0);
  const [tempoAtualFaixa, setempoAtualFaixa] = useState(0);
  const tagAudio = useRef(null);
  const barraProgresso = useRef(null)

  useEffect(()=>{
    if(taTocando){
      tocarFaixa();
    }
  }, [
    faixaAtual
  ])

  const informacoesLivro = {
    nome: 'Mémorias Póstumas de Brás Cubas',
    autor: 'Machado de Assis',
    totalCapitulos: 2,
    capa: brasCubasImg,
    textoalternativo: `Capa do Livro`,
    capitulos: livro
  };

  function tocarFaixa() {
    tagAudio.current.play();
    definirtaTocando(true);
  };

  const pausarFaixa = () => {
    tagAudio.current.pause();
    definirtaTocando(false);
  };

  const tocarOupausarFaixa = () => {
    if(taTocando){
      pausarFaixa();
    }else{
      tocarFaixa();
    }
  };

  const pularFaixa = () => {
    if (faixaAtual < 1){
      definirfaixaAtual(faixaAtual + 1)
      
    }else {
      definirfaixaAtual(1)
    }
    
  }

  const voltarFaixa = () => {
    if(faixaAtual > 0){
      definirfaixaAtual(faixaAtual - 1)
    }else{
      definirfaixaAtual(0)
    }
  }

  const avancar15s = ()=>{
    tagAudio.current.currentTime += 15
  }

  const voltar15s = () => {
    tagAudio.current.currentTime -= 15
  }

  const avancarPara = (evento) => {
    const largura = barraProgresso.current.clientWidth;
    const novoTempo = (evento.nativeEvent.offsetX/ largura) * tempoTotalFaixa;
    tagAudio.current.currentTime = novoTempo;
  }

  return (
    <>
      <Capa 
      imagemCapa={informacoesLivro.capa}
      textoalternativo={informacoesLivro.textoalternativo} 
      />
      <SeletorCap
      capituloAtual={faixaAtual + 1}
      />
      <GerenciadorFaixa 
      faixa={informacoesLivro.capitulos[faixaAtual]}
      referencia = {tagAudio}
      setTempoTotalFaixa={setempoTotalFaixa}
      setTempoAtualFaixa = {setempoAtualFaixa}
      />
      <ConteinerProgress tempoTotalFaixa={tempoTotalFaixa} tempoAtualFaixa={tempoAtualFaixa} referencia = {barraProgresso} avancarPara={avancarPara}/>
      <BotooesControle
      taTocando = {taTocando}
      definirtaTocando = {definirtaTocando}
      tocarOupausarFaixa = {tocarOupausarFaixa}
      pularFaixa = {pularFaixa}
      voltarFaixa = {voltarFaixa}
      avancar15s = {avancar15s}
      voltar15s = {voltar15s}
      />
    </>
  )
}

export default App
