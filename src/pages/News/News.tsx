import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsapi"
import Loading from '../Loading';

const { Text, Title } = Typography;
const { Option } = Select;

interface Stats {
  simplified: any,
}

const News: React.FC<Stats> = ({ simplified }) => {

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 6 : 12
  });

  console.log(cryptoNews);
  if (!cryptoNews?.value) return <Loading/>;
  return (
    <div>
    <Row gutter={[24, 24]}>
      {cryptoNews.value.map((news : { id: any, url: string, name: string, image: any, description: any, provider: any, datePublished: any } ) => (
        <Col xs={24} sm={12} lg={8} key={news.id}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>

                <img
                  src={news?.image?.thumbnail?.contentUrl }
                  alt=""
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>

              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl
                    }
                    alt=""
                  />
                  <Text>
                    {moment(news.datePublished).startOf("hour").fromNow()}
                  </Text>
                </div>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
  )
}

export default News