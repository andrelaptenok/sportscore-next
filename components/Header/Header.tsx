import {useState} from "react";
import {Col, Row, Tooltip} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import {SpanLogo, Menu} from "./styleHeader";
import {ButtonStyle, SwitchStyle} from "../../styles/styleGlobals";
import SignUp from "../Account/SignUp/SignUp";
import SignIn from "../Account/SignIn/SignIn";

const Header = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [context, setContext] = useState<string>("");


  const showModal = (title: string) => {
    setVisible(true);
    setContext(title)
  };

  return (
    <header>
      <Row className="header">
        <Col lg={12}>
          <SpanLogo>SportScore.by</SpanLogo>
        </Col>
        <Col lg={12}>
          <Menu>
            <SwitchStyle
              color="#fff"
              background={"#002844"}
              border="none"
              checkedChildren="night"
              unCheckedChildren="day"
              defaultChecked
              loading={false}
            />
            <Tooltip title="Search">
              <ButtonStyle
                color="#fff"
                background={"#00406d"}
                border="none"
                type="primary"
                shape="circle"
                size="small"
                loading={false}
                icon={<SearchOutlined/>}
              />
            </Tooltip>
            <ButtonStyle
              color="#fff"
              background={"#00406d"}
              border="none"
              type="primary"
              loading={false}
              onClick={() => showModal("SignIn")}
            >
              Войти
            </ButtonStyle>
            <ButtonStyle
              color="#fff"
              background={"#002844"}
              border="none"
              type="primary"
              loading={false}
              onClick={() => showModal("SignUp")}
            >
              Регистрация
            </ButtonStyle>
          </Menu>
        </Col>
      </Row>
      {context === "SignIn" ? <SignIn setVisible={setVisible} visible={visible}/> :
        <SignUp setVisible={setVisible} visible={visible}/>}
    </header>
  );
};

export default Header;
