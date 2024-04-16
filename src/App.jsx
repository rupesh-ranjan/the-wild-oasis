import GlobalStyles from "./styles/GlobalStyles";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import StyledApp from "./ui/StyledApp";
import Button from "./ui/Button";
import Row from "./ui/Row";

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">Hello from The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Hello from The Wild Oasis</Heading>
              <Button onClick={() => alert("Check in")}>Check in</Button>
              <Button
                variation="seconday"
                size="small"
                onClick={() => alert("Check out")}
              >
                Check out
              </Button>
            </div>
          </Row>
          <Row type="vertical">
            <div>
              <Heading as="h3">Form</Heading>
              <Input type="number" placeholder="No of guest" />
            </div>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
