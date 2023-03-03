import { Layout } from "antd";
import { CustomHeader, CustomSider } from "~/components";

const { Content } = Layout;

const DefaultLayout: React.FC = ({
  children,
}: {
  children?: JSX.Element;
  currentUser?: any;
  pageProps?: any;
  globalSettings?: any;
}) => {
  return (
    <Layout
      className={"default-layout relative"}
      style={{ minHeight: "100vh" }}
    >
      <CustomSider />
      <Layout className="site-layout">
        <CustomHeader />
        <Content className={"mt-[10px] relative !-z-0 p-[20px]"}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
