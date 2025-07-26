import {useState} from 'react';
import HelpModal from "../../components/HelpModal/HelpModal.jsx"
import {HeaderContainer, HeaderLink, HelpButton} from "./HeaderStyles.jsx"

function Header({setPaused = () => {}}) {
    const [showHelp, setShowHelp] = useState(false);


    const openHelp = () => {
        setShowHelp(true);
        setPaused(true);
    };

    const closeHelp = () => {
        setShowHelp(false);
        setPaused(false);
    };

    return (
        <HeaderContainer>
            <HeaderLink to = "/">
                Home
            </HeaderLink>
            <HelpButton onClick={openHelp}>Help</HelpButton>
            {showHelp && <HelpModal onClose={closeHelp} />}

        </HeaderContainer>
    )
}

export default Header;