import GlobalStyles from "./styles/GlobalStyles";
import Input from "./ui/Input";
import H1 from "./ui/H1";
import StyledApp from "./ui/StyledApp";
import Button from "./ui/Button";

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Hello from The Wild Oasis</H1>
        <Button onClick={() => alert("Check in")}>Check in</Button>
        <Button onClick={() => alert("Check out")}>Check out</Button>
        <Input type="number" placeholder="No of guest" />
      </StyledApp>
    </>
  );
}

export default App;
