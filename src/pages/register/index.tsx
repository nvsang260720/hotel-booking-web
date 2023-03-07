import style from "./logout.module.css";
import { Form, Input, Button } from "antd";
import Router from "next/router";
import { registerApi } from "~/services/api";
import { Svg } from "~/components";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const onSubmit = async (values: any) => {
    await registerApi(values).then(() => {
      router.push("/admin");
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
            autoComplete="off"
          >
            <div>
              <span className={style.logo}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Svg
                    name={"logo"}
                    width={180}
                    height={180}
                    fill={"#FF5B00"}
                  />
                </div>
              </span>
              <span className={style.errText}></span>
            </div>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Nhập email" />
            </Form.Item>

            <Form.Item
              label="Phone"
              name="phone"
              rules={[{ required: true, message: "Please input your phone!" }]}
              style={{ marginTop: 30 }}
            >
              <Input placeholder="Nhập phone" />
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
                Register
              </Button>
            </Form.Item>
            <div onClick={() => Router.push("/login")}>
              <span>
                Bạn đã có tài khoản ?{" "}
                <span
                  style={{ color: "green", fontSize: 15, cursor: "pointer" }}
                >
                  Login
                </span>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
