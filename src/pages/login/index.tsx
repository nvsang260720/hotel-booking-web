import style from "./login.module.css";
import { Form, Input, Button } from "antd";
import { useRouter } from "next/router";
import { loginApi } from "../../services/api";
import { Svg } from "~/components";

export default function Login() {
  const router = useRouter();
  const onSubmit = async (values: any) => {
    await loginApi(values).then((result) => {
      console.log(result);
    });
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.childContainer}>
          <Form
            name="basic"
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 17 }}
            initialValues={{ remember: true }}
            onFinish={onSubmit}
            //onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Svg name={"logo"} width={120} height={120} fill={"#FF5B00"} />
            </div>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Nhập email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
            <div onClick={() => router.push("/register")}>
              <span>
                Bạn đã có tài khoản ?{" "}
                <span style={{ color: "green", fontSize: 15 }}>Register</span>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
