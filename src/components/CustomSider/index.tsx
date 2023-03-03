import { Layout, Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useState, useEffect, useMemo } from "react";
import { Svg } from "~/components";

const { Sider } = Layout;

interface MenuItem {
  key: string;
  title: string;
  icon?: JSX.Element;
  href?: string;
  submenu?: MenuItem[];
}

const menus: MenuItem[] = [
  {
    key: "(Dashboard)",
    title: "Dashboard",
    icon: <Svg name={"dashboard"} fill={"var(--orange)"} />,
    href: "/admin/dashboard",
  },
  {
    key: "(User)",
    title: "Người dùng",
    icon: <Svg name={"users"} fill={"var(--orange)"} />,
    href: "/admin/users",
    submenu: undefined,
  },
  {
    key: "(Category)",
    title: "Thể loại",
    icon: <Svg name={"categories"} fill={"var(--orange)"} />,
    href: "/admin/categories",
    submenu: undefined,
  },
  {
    key: "(Product)",
    title: "Sản phẩm",
    href: "/admin/products",
    icon: <Svg name={"products"} fill={"var(--orange)"} />,
    submenu: undefined,
  },
];

const CustomSider = ({}) => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const getSelectedSubmenu = useCallback(() => {
    const keys: { [key: string]: () => string } = {
      "/admin/users": function () {
        return "(User)(Policy)";
      },
      "/admin/policies": function () {
        return "(User)(Policy)";
      },
      "/admin/customers/b2c": function () {
        return "(B2C)(B2B)";
      },
      "/admin/customers/b2b": function () {
        return "(B2C)(B2B)";
      },
      "/admin/orders/b2c": function () {
        return "(Order)(B2C)";
      },
      "/admin/orders/incomplete": function () {
        return "(Order)(Incomplete)";
      },
      default: function () {
        return "()";
      },
    };

    return (
      keys[currentPath] ||
      keys[`/admin${currentPath}`] ||
      keys["default"]
    )();
  }, [currentPath]);

  useEffect(() => {
    setOpenKeys([getSelectedSubmenu()]);
  }, [currentPath, getSelectedSubmenu]);

  const renderMenus = () => {
    return menus.map((item: any) => {
      return (
        <React.Fragment key={item.key}>
          <Menu.Item
            className={"!bg-[color:var(--black-bg)]"}
            key={item.key}
            {...(item.icon && {
              icon: item.icon,
            })}
            onClick={() => item.href && router.push(item.href)}
          >
            <span
              className={`hover:text-[color:var(--orange)] text-[14px] ${
                currentPath === item.href
                  ? "text-[color:var(--orange)] selected-menu-item"
                  : "text-white"
              } ml-[10px] inline-block`}
            >
              {item.title}
            </span>
          </Menu.Item>
        </React.Fragment>
      );
    });
  };

  return (
    <Sider className={"main-sider"}>
      <div
        className={
          "!bg-[color:var(--black-bg)]  fixed left-0 top-0 bottom-0 hover:overflow-auto w-[200px]"
        }
      >
        <Link href="/">
          <div className={" h-[68px] px-5 flex cursor-pointer "}>
            <div
              onClick={() => router.push("/")}
              className={
                "text-white text-[28px] font-bold cursor-pointer leading-[26px] text-left self-center"
              }
            >
              <Svg
                name={"logo"}
                fill={"var(--orange)"}
                width={120}
                height={120}
              />
            </div>
          </div>
        </Link>
        <Menu
          mode="inline"
          openKeys={openKeys}
        >
          {renderMenus()}
        </Menu>
      </div>
    </Sider>
  );
};

CustomSider.menus = menus;
export default CustomSider;
