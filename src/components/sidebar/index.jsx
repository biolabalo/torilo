import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from "react-bootstrap/Offcanvas";

const SideBar = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const OtherProps = {
    name: "Enable both scrolling & backdrop",
    scroll: true,
    backdrop: true,
  };

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      backdrop={false}
      style={{ width: '260px', paddingTop: '33px'}}
    >
      <Offcanvas.Body>
          <div style={{paddingLeft: '33px'}}>
             <button className="invoice-btn">GENERATE INVOICE</button>
          </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
export default SideBar;
