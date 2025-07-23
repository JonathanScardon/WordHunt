import {Link} from "react-router-dom"
import logoImg from "../../assets/logo-horizontal.png"
import backgroundImg from "../../assets/background.png"
import {Background, HomeContainer, Logo} from "./HomeStyles.jsx"

function Home(){
    return (
        <>
        <Background src = {backgroundImg}/>
        
        <HomeContainer>
            <Logo src = {logoImg} alt = ""/>

             <Link to = "/solve">
                <button >Solve</button>
            </Link>

            <Link to = "/play">
                <button>Play</button>
            </Link>
        </HomeContainer>
        </>
       
    )
}

export default Home;