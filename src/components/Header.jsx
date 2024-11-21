import styled from "styled-components";
import { flexMixin } from "./style/styled";

const StyleHearder = styled.header`
  ${flexMixin("row", "space-between", "center")};
  padding: 10px 20px;
  background-color: black;
`

const StyleMenu = styled.nav`
  ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  } li {
  list-style: none;
  font-weight: 400;
  font-size: 13px;
}
`

export default function Header() {
  return (
    <StyleHearder>
      <h1>OZ코딩스쿨</h1>
      <StyleMenu>
        <ul>
          <li>로그인</li>
          <li>회원가입</li>
          <li>내클래스</li>
        </ul>
      </StyleMenu>
    </StyleHearder>
  );
}
