import { Layout, theme } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MasterHeader from "./Components/MasterHeader";
import MasterFooter from "./Components/MasterFooter";
import MasterSideBar from "./Components/MasterSideBar";
import HomePage from "./HomePage";
import NewsDetail from "./Components/NewsDetail";

const { Content } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Router>
      <Layout>
        <MasterHeader />
        <Content style={{ padding: "0 50px" }}>
          <Layout style={{ padding: "24px 0", background: colorBgContainer }}>
            <Routes>
              <Route path="/detail/:title" element={<NewsDetail />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
            {/* <MasterSideBar /> */}
          </Layout>
        </Content>
        <MasterFooter />
      </Layout>
    </Router>
  );
};

export default App;
