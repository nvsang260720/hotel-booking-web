import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Space, Popconfirm, Table, Row, Col, Button } from "antd";
import { getAllUserApi, deleteUserApi } from "~/services/api";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const Users: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const getUser = async () => {
    await getAllUserApi().then((e) => {
      const result = e?.data?.content;
      return setData(result.reverse());
    });
  };
  useEffect(() => {
    getUser();
  }, []);

  const handleDelete = async (record: any) => {
    return await deleteUserApi(record.id)
      .then((e: any) => {
        getUser();
      })
      .catch((error) => console.log(error));
  };

  const rederectUsers = async (record: any) => {
    return router.push(`/admin/users/${record?.id}`);
  };

  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      width: "20%",
    },
    {
      title: "Action",
      width: "20%",
      render: (_: any, record: any) => {
        return (
          <Space size="middle">
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record)}
            >
              <a>
                <DeleteOutlined style={{ color: "red", fontSize: 20 }} />
              </a>
            </Popconfirm>
            <a onClick={() => rederectUsers(record)}>
              <Space>
                <EditOutlined style={{ color: "blue", fontSize: 20 }} />
              </Space>
            </a>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      <div className={"bg-white mb-[20px] p-[20px]"}>
        <Row>
          <Col xs={12} style={{ fontSize: 20 }}>
            Danh sách người dùng
          </Col>
          <Col xs={12} className={"flex justify-end text-end"}>
            <Button
              type={"primary"}
              onClick={() => router.push("/admin/users/create")}
            >
              Thêm
            </Button>
          </Col>
        </Row>
      </div>
      <div className={"bg-white"}>
        <Table
          rowKey={(record) => record?.id}
          columns={columns}
          dataSource={data}
        />
      </div>
    </>
  );
};

export default Users;
