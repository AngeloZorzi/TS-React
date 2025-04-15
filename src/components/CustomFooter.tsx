import { Container } from "react-bootstrap";

function CustomFooter() {
  return (
    <footer className="footer bg-dark text-white mt-5 py-3">
      <Container className="text-center">
        <small>
          &copy; {new Date().getFullYear()} Spaceflight News. Tutti i diritti
          riservati.
        </small>
      </Container>
    </footer>
  );
}

export default CustomFooter;
