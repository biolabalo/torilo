import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const SideBar = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const OtherProps = {
    name: 'Enable both scrolling & backdrop',
    scroll: true,
    backdrop: true,
  }

  return (
    <Offcanvas show={show} onHide={handleClose} backdrop={false}>
    <Offcanvas.Body>
      Some text as placeholder. In real life you can have the elements you
      have chosen. Like, text, images, lists, etc.
    </Offcanvas.Body>
  </Offcanvas>
  );
};

export default SideBar;
