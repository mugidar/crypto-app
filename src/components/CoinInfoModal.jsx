import { Divider, Flex, Tag, Typography } from "antd";

const CoinInfoModal = ({ coin }) => {
  console.log(coin);
  return (
    <>
      <div
        style={{
          display: "flex",

          alignItems: "center",
        }}
      >
        <img src={coin.icon} alt={coin.icon} style={{ width: 40 }} />
        <Typography.Title
          style={{ textAlign: "center", flex: 1, marginBottom: 0 }}
          level={1}
        >
          {coin.symbol}
        </Typography.Title>
        {coin && (
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <h1 style={{ margin: "0" }}>{coin.name}</h1>
            <h1 style={{ fontSize: "16px" }}> {coin.price}$</h1>
          </div>
        )}
      </div>
      <Divider />
      <Typography.Paragraph>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginBottom: 10,
              paddingBottom: 10,
              borderBottom: "1px solid black",
            }}
          >
            <span>
              <Typography.Text>{coin.name} price: </Typography.Text>
              <Tag>{coin.price}$</Tag>
            </span>
            <span>
              <Typography.Text>BTC price: </Typography.Text>
              <Tag>{coin.priceBtc}</Tag>
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>
              <Typography.Text>1 hour: </Typography.Text>
              <Tag color={coin.priceChange1h > 0 ? "green" : "red"}>
                {coin.priceChange1h}
              </Tag>
            </span>
            <span>
              <Typography.Text>24 hours: </Typography.Text>
              <Tag color={coin.priceChange24h > 0 ? "green" : "red"}>
                {coin.priceChange1h}
              </Tag>{" "}
            </span>
            <span>
              {" "}
              <Typography.Text>1 week: </Typography.Text>
              <Tag color={coin.priceChange1w > 0 ? "green" : "red"}>
                {coin.priceChange1w}
              </Tag>{" "}
            </span>
          </div>
        </div>
      </Typography.Paragraph>
    </>
  );
};

export default CoinInfoModal;
