import { Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";

const MasterSideBar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const sidebar = [
    {
      key: "sub1",
      label: "Popular News 1",
      children: [
        {
          key: 1,
          label: "news 1",
        },
        {
          key: 2,
          label: "news 2",
        },
        {
          key: 3,
          label: "news 3",
        },
        {
          key: 4,
          label: "news 4",
        },
      ],
    },
    {
      key: "sub2",
      label: "Popular News 2",
      children: [
        {
          key: 5,
          label: "news 5",
        },
        {
          key: 6,
          label: "news 6",
        },
        {
          key: 7,
          label: "news 7",
        },
        {
          key: 8,
          label: "news 8",
        },
      ],
    },
    {
      key: "sub3",
      label: "Popular News 3",
      children: [
        {
          key: 9,
          label: "news 9",
        },
        {
          key: 10,
          label: "news 10",
        },
        {
          key: 11,
          label: "news 11",
        },
        {
          key: 12,
          label: "news 12",
        },
      ],
    },
  ];
  return (
    <Sider style={{ background: colorBgContainer }} width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%" }}
        items={sidebar}
      />
    </Sider>
  );
};

export default MasterSideBar;
