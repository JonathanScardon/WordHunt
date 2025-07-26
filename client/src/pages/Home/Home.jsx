import {Link} from "react-router-dom"
import logoImg from "../../assets/logo-horizontal.png"
import backgroundImg from "../../assets/background.png"
import {Background, HomeContainer, Logo, Button, ButtonContainer} from "./HomeStyles.jsx"

function Home(){
    return (
        <>
        <Background src = {backgroundImg}/>
        
        <HomeContainer>
            <Logo src = {logoImg} alt = ""/>
            
            <ButtonContainer>
                <Link to = "/play">
                    <Button>Play</Button>
                </Link>
                <Link to = "/solve">
                    <Button>Solve</Button>
                </Link>
            </ButtonContainer>
        
        </HomeContainer>
        </>
       
    )
}

export default Home;