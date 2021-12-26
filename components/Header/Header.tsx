import { Col, Row, Button, Tooltip, Switch } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { SpanLogo, Menu } from "./styleHeader";
import { ButtonStyle, SwitchStyle } from "../../styles/styleGlobals";

const Header = () => {
  return (
    <header>
      <Row className="header">
        <Col lg={12}>
          <SpanLogo href="/">SportScore.by</SpanLogo>
        </Col>
        <Col lg={12}>
          <Menu>
            <SwitchStyle
              color="#fff"
              background="#002844"
              border="none"
              checkedChildren="night"
              unCheckedChildren="day"
              defaultChecked
              loading={false}
            />
            <Tooltip title="Search">
              <ButtonStyle
                color="#fff"
                background="#00406d"
                border="none"
                type="primary"
                shape="circle"
                size="small"
                loading={false}
                icon={<SearchOutlined />}
              />
            </Tooltip>
            <ButtonStyle
              color="#fff"
              background="#00406d"
              border="none"
              type="primary"
              loading={false}
            >
              Войти
            </ButtonStyle>
            <ButtonStyle
              color="#fff"
              background="#002844"
              border="none"
              type="primary"
              loading={false}
            >
              Регистрация
            </ButtonStyle>
          </Menu>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
