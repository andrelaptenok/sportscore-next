import {Button, Switch} from "antd";
import styled from "styled-components";

interface Props {
  background: any;
  color: any;
  border: any;
}

interface IBtn {
  w?: string
}

export const ButtonStyle = styled(Button)<Props>`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  border: ${(props) => props.border && "none"};
  box-shadow: ${(props) => props.border && "none"};
`;

export const SwitchStyle = styled(Switch)<Props>`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  border: ${(props) => props.border && "none"};
  box-shadow: ${(props) => props.border && "none"};
`;

export const Btn = styled(Button)<IBtn>`
  width: ${({w}) => w ? w : "auto"};
`
