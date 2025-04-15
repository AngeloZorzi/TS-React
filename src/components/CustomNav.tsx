import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function CustomNav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          🚀 Spaceflight News
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
export default CustomNav;
