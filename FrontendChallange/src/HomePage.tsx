import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Divider, Layout, Pagination, Row, theme } from "antd";

import NewsLists from "./Components/NewsLists";

const { Content } = Layout;

const HomePage = () => {
  const [news, setNews] = useState(null);
  const [totalNews, setTotalNews] = useState(0);
  const [pageSize, setPageSize] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const newsapiUrl =
    `https://newsapi.org/v2/everything?` +
    `apiKey=e34a08409f0e4bfd86ff2c6604cc17de&` +
    `q=games&` +
    `sortBy=popularity&` +
    `pageSize=${pageSize}&` +
    `page=${currentPage}`;

  const onChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const handleClick = (title: String): void => {
    navigate(`/detail/${title.replaceAll(" ", "-")}`);
  };

  function fetchNews() {
    fetch(newsapiUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNews(data.articles);
        setTotalNews(data.totalResults);
      });
  }

  useEffect(() => {
    fetchNews();
  }, [currentPage, pageSize]);

  return (
    <Content style={{ padding: "0 24px" }}>
      <Row justify="center">
        <Col lg={{ span: 20 }} xl={{ span: 15 }} xxl={{ span: 12 }}>
          <Row justify="center">
            <Divider orientation="left">Popular News</Divider>
            {news && (
              <NewsLists news={news} handleClick={handleClick}></NewsLists>
            )}
            <Pagination
              current={currentPage}
              total={totalNews}
              pageSize={pageSize}
              pageSizeOptions={[2, 5, 10, 50]}
              onChange={onChange}
              style={{ marginTop: "25px" }}
            />
          </Row>
        </Col>
        {/* <Col lg={{ span: 20 }} xl={{ span: 5, offset: 4 }}>
          <Divider orientation="left">Popular News</Divider>
          {news && (
            <NewsLists news={news} handleClick={handleClick}></NewsLists>
          )}
        </Col> */}
      </Row>
    </Content>
  );
};

export default HomePage;
