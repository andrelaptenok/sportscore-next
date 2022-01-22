import {Form, Input, Modal} from "antd"
import {Btn} from "../../../styles/styleGlobals";
import {IAccount} from "../SignUp/SignUp";


const SignIn = ({setVisible, visible}: IAccount) => {
  const handleOk = () => {
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  const onFinish = (values: string) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: object) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Modal
      title="Войти"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 18,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'E-mail должен быть введен верно (например, name@example.com).',
            },
          ]}
        >
          <Input type="email" placeholder="Email"/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Пароль должен состоять как минимум из 5 символов.',
            },
          ]}
        >
          <Input.Password type="password" placeholder="Password"/>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 18,
          }}
        >
          <Btn type="primary" htmlType="submit" w="100%">
            Войти
          </Btn>
        </Form.Item>
      </Form>
    </Modal>
  )
}
export default SignIn