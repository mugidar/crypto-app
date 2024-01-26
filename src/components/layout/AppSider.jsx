import { Card, Layout, List, Spin, Statistic, Tag, Typography } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { CryptoContext } from "../../context/crypto-context";
import { useCrypto } from "../../hooks";

const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};
const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];
const AppSider = () => {
  const {assets} = useCrypto()

  return (
    <Layout.Sider width="25%" style={{ ...siderStyle, padding: "15px" }}>
      {assets.map((asset) => (
        <Card key={asset.id} style={{ marginBottom: "10px" }}>
          <Statistic
            title={asset.id}
            value={asset.totalAmount}
            precision={2}
            style={{ textTransform: "capitalize"}}
            valueStyle={{ color: asset.grow ? "green" : "red" }}
            prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
            suffix="$"
          />
          <List
            size="small"
            bordered
            dataSource={[
              {
                title: "Total profit",
                value: asset.totalProfit,
                isPlain: true,
                tag: true,
              },
              { title: "Asset Amount", value: asset.amount },

            ]}
            renderItem={(item) => (
              <List.Item>
                <span>{item.title}</span>
                {item.tag && <Tag color={asset.grow ? "green" : "red"}>{asset.growPercent}%</Tag>}
                {item.isPlain ? (
                  <Typography.Text type={asset.grow ? "success" : "danger"}>
                    <span>{Number(item.value).toFixed(2)}</span>
                  </Typography.Text>
                ) : (
                  <span>{item.value}</span>
                )}
              </List.Item>
            )}
          />
        </Card>
      ))}
    </Layout.Sider>
  );
};

export default AppSider;
