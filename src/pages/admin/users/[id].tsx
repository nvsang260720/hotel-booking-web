import { message } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { UsersForm } from "~/components";
import { getUserApi, updateUserApi, createUserApi } from "~/services/api";

export default function UsersPage({}) {
  const router = useRouter();
  const id = router.query.id;
  const checkId: any = id !== "create" ? id : undefined
  const [initialValues, setInitValues] = useState();
  const [loading, setLoading] = useState(false);

  const getUser = () => {
    if(checkId) {
      return getUserApi(checkId).then((result: any) => {
        setInitValues(result?.data?.content);
      });
    }
  };

  useEffect(() => {
    getUser();
  }, [checkId]);
  const onSubmit = async (values: any) => {
    setLoading(true);
    try {
      if (checkId) {
        await updateUserApi(checkId, values);
        message.success("Cap nhap thanh cong");
        setLoading(false);
        return router.back();
      }
      await createUserApi(values);
      message.success("Tao moi thanh cong");
      setLoading(false);
      return router.back();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UsersForm
      id={checkId}
      initialValues={initialValues}
      onSubmit={onSubmit}
      loading={loading}
    />
  );
}
