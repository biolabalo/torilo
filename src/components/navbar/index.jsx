import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import UserImg from  '../../assets/IMG-20180413-WA0005.png'

function CollapsibleNav() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">TransMonitor</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing">Search...</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Support</Nav.Link>
            <Nav.Link href="#deets">FAQ</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <svg
                width="22"
                height="24"
                viewBox="0 0 22 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2913 20.8262C11.2913 21.4027 11.063 21.9557 10.6567 22.3634C10.2503 22.771 9.69925 23.0001 9.12462 23.0001C8.54999 23.0001 7.9989 22.771 7.59257 22.3634C7.18625 21.9557 6.95798 21.4027 6.95798 20.8262"
                  stroke="#647787"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 18.6522H17.2498"
                  stroke="#647787"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.1662 18.6522H16.7079C15.5108 18.6522 13.9996 17.6794 13.9996 16.4783V11.587C13.9996 10.2898 13.486 9.04566 12.5717 8.12836C11.6575 7.21107 10.4175 6.69574 9.12463 6.69574C7.83171 6.69574 6.59175 7.21107 5.67752 8.12836C4.76329 9.04566 4.24968 10.2898 4.24968 11.587V16.4783C4.24968 17.0549 4.02141 17.6078 3.61509 18.0155C3.20876 18.4232 2.65767 18.6522 2.08304 18.6522"
                  stroke="#647787"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="14.5" cy="7.5" r="7.5" fill="#1860EC" />
                <path
                  d="M14.3066 7.32812V7.30859C13.4668 6.91797 13.0469 6.35156 13.0469 5.60938C13.0469 5.10482 13.2389 4.69141 13.623 4.36914C14.0072 4.04362 14.502 3.88086 15.1074 3.88086C15.6543 3.88086 16.1035 4.03223 16.4551 4.33496C16.8066 4.6377 16.9824 5.02669 16.9824 5.50195C16.9824 6.27669 16.5495 6.87891 15.6836 7.30859V7.32812C16.7057 7.69271 17.2168 8.32422 17.2168 9.22266C17.2168 9.80208 17.0085 10.2627 16.5918 10.6045C16.1751 10.9463 15.5957 11.1172 14.8535 11.1172C14.2546 11.1172 13.7614 10.9479 13.374 10.6094C12.9867 10.2708 12.793 9.83138 12.793 9.29102C12.793 8.39258 13.2975 7.73828 14.3066 7.32812ZM16.1621 5.59961C16.1621 5.27734 16.0612 5.02344 15.8594 4.83789C15.6576 4.65234 15.3825 4.55957 15.0342 4.55957C14.7087 4.55957 14.432 4.65723 14.2041 4.85254C13.9795 5.0446 13.8672 5.29036 13.8672 5.58984C13.8672 6.19857 14.2464 6.65755 15.0049 6.9668C15.7764 6.64779 16.1621 6.19206 16.1621 5.59961ZM14.9512 7.70898C14.0592 8.0638 13.6133 8.57812 13.6133 9.25195C13.6133 9.60026 13.7419 9.88672 13.999 10.1113C14.2594 10.3327 14.6012 10.4434 15.0244 10.4434C15.4281 10.4434 15.7568 10.3343 16.0107 10.1162C16.2679 9.89486 16.3965 9.61654 16.3965 9.28125C16.3965 8.57812 15.9147 8.05404 14.9512 7.70898Z"
                  fill="#FCFDFF"
                />
              </svg>
            </Nav.Link>
            <Nav.Link href="#deets">Oluwaleke Ojo</Nav.Link>

            <Nav.Link href="#deets">
            <img src={UserImg} alt="Logo" className="rounded-circle"/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleNav;
