import { Card, Space } from "antd";
import Text from "antd/es/typography/Text";
const { Meta } = Card;
const NewsLists = (props: {
  news: {
    description: string;
    title: string;
    urlToImage: string;
  }[];
  handleClick: (title: String) => void;
}) => {
  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        {props.news.map((item, index) => (
          <Card
            cover={<img alt="example" src={item.urlToImage} />}
            hoverable={true}
            key={index}
            onClick={() => props.handleClick(item.title)}
          >
            <Text strong>{item.title}</Text>
            <Text> {item.description} </Text>
          </Card>
        ))}
      </Space>
    </div>
  );
};

export default NewsLists;
