import styled from "styled-components";
import { tag_color, gray } from "./style/styled";
import { fontMixin } from "./style/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  img {
  width: 300px;
  border-radius: 10px;
  margin-bottom: 3px;
} span {
  ${fontMixin("12px")};
  color: ${tag_color};
  border: 1px solid ${tag_color};
  padding: 4px 5px;
  border-radius: 3px;
} div {
  ${fontMixin("18px", 600)};
} p {
  ${fontMixin("12px")};
  color: ${gray};
}
`;

export default function Content({ content }) {
  return (
    <Container>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </Container>
  );
}
