import { Button, Col, Form, Input, Row } from "antd";
import { useEffect } from "react";

interface FormProps {
  initialValues: any;
  id: string | undefined;
  onSubmit: (value: any) => void;
  loading: boolean;
}
export default function UsersForm({
  initialValues = {},
  id = "",
  onSubmit = () => {},
  loading,
}: FormProps) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (Object.keys(initialValues)?.length > 0) {
      form.resetFields();
    }
  }, [form, initialValues]);

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: 20,
        paddingBottom: 60,
        borderRadius: 20,
      }}
    >
      <Form
        layout="vertical"
        name="basic"
        initialValues={initialValues}
        form={form}
        onFinish={onSubmit}
        autoComplete="off"
        style={{ marginTop: "30px" }}
      >
        <Row gutter={40}>
          <Col xs={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Vui nhap!" />
            </Form.Item>
            {!id && (
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input placeholder="Vui nhap!" />
              </Form.Item>
            )}
            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input placeholder="Vui nhap!" />
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              {id ? "Lưu" : "Tạo mới"}
            </Button>
          </Col>
          <Col xs={12}></Col>
        </Row>
      </Form>
    </div>
  );
}
