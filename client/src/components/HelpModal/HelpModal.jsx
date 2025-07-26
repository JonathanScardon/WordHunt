import {Overlay, Modal, Instructions, Button} from "./HelpModalStyles.jsx"

function HelpModal({ onClose }) {
  return (
    <Overlay>
        <Modal>
            <h2>Play</h2>
            <Instructions>
              Form words using letters on the grid. Neighboring tiles - both adjacent and diagonal - can be used.
            </Instructions>
            <h2>Solve</h2>
            <Instructions>
              Enter letters into the grid to retrieve a comprehensive list of solutions.
            </Instructions>
            <Button onClick = {onClose}>Close</Button>
        </Modal>
    </Overlay>
  );
}

export default HelpModal;
