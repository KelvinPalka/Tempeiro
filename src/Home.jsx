import estilos from './Home.module.css'
import Caixa from './Edições exclusivas só para membros!.png'

export default function Home(){
    return(
        <>
            <div className={estilos.conteiner}>
                <p>OI</p>
                <img src={Caixa}></img>
            </div>
        </>
    )
}
