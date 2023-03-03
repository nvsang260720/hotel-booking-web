import { Popover } from "antd";
import { useRouter } from "next/router";
import { Svg } from "~/components";

const CustomHeader: React.FC = ({}) => {
  const router = useRouter();

  return (
    <div
      className={
        "flex justify-between p-[25px] pt-[10px] w-full h-[68px] bg-white border-[1px] rounded-br-[10px]"
      }
    >
      <div></div>
      <div>
        <div className={"flex flex-row gap-5 items-center"}>
          <div className={"flex flex-col text-right"}>
            <div
              className={
                "font-medium text-[18px] text-[color:var(--black)] leading-[21px]"
              }
            ></div>
            <div
              className={
                "font-medium text-[14px] text-[color:var(--light-gray)] leading-[16px]"
              }
            ></div>
          </div>
          <div className={"flex flex-row items-center gap-3 cursor-pointer"}>
            <Popover
              placement="bottomRight"
              title={
                <div className={"mx-[8px] text-[15px]"}>
                  Thiết lập tài khoản
                </div>
              }
              content={
                <div>
                  <div
                    className={
                      "flex items-center gap-[4px] mx-[8px] cursor-pointer hover:text-primary-color"
                    }
                    onClick={() => router.push("/admin/account")}
                  >
                    <div className={"w-[30px] h-[30px] flex items-center"}>
                      <Svg
                        name={"users"}
                        width={20}
                        height={20}
                        fill={"var(--black)"}
                      />
                    </div>
                    Thông tin cá nhân
                  </div>
                  <div
                    className={
                      "flex items-center gap-[4px] mx-[8px] cursor-pointer hover:text-primary-color"
                    }
                    //onClick={logout}
                  >
                    <div className={"w-[30px] h-[30px] flex items-center"}>
                      <Svg
                        name={"exit"}
                        width={24}
                        height={24}
                        fill={"var(--black)"}
                      />
                    </div>
                    Đăng xuất
                  </div>
                </div>
              }
              trigger="click"
              className={"flex flex-row items-center gap-3 cursor-pointer"}
            >
              <Svg name={"avatar"} width={40} height={40} />
              <Svg name={"expand-down"} width={14} height={7} />
            </Popover>
          </div>
          <div className={"cursor-pointer"}>
            <Svg name={"notify-true"} width={24} height={24} />
          </div>
          <div className={"cursor-pointer"}>
            <Svg name={"exit"} width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;
