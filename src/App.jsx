import styled from "styled-components";
import "./App.scss";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import { flexMixin } from "./components/style/styled";

const SectionStyled = styled.section`
  display: flex;
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-direction: ${(props) => props.direction || "row"};
  gap: 20px;
  padding: 20px 40px;
`;

const FlexBox = styled.div`
  ${flexMixin("row", "flex-start", "flex-start")};
  flex-wrap: wrap;
  background-color: #f9f9f9;
  padding: 20px;
`;

function App() {
  return (
    <main>
      <Header />
      <FlexBox>
      <SectionStyled justify="flex-start" align="flex-start" direction="row" wrap= "wrap">
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </SectionStyled>
      </FlexBox>
    </main>
  );
}

export default App;
