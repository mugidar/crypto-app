import React, { useEffect, useState } from "react";
import { Button, Drawer, Layout, Modal, Select, Space } from "antd";
import { useCrypto } from "../../hooks";
const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  textAlign: "center",
  color: "#fff",
  height: 60,
  backgroundColor: "gray",
};

const options = [
  {
    label: "China",
    value: "china",
    emoji: "🇨🇳",
    desc: "China (中国)",
  },
  {
    label: "USA",
    value: "usa",
    emoji: "🇺🇸",
    desc: "USA (美国)",
  },
  {
    label: "Japan",
    value: "japan",
    emoji: "🇯🇵",
    desc: "Japan (日本)",
  },
  {
    label: "Korea",
    value: "korea",
    emoji: "💋",
    desc: "Korea (韩国)",
  },
];

const AppHeader = () => {
  const { crypto } = useCrypto();
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedCoin, setSelectedCoin] = useState({});
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [placement, setPlacement] = useState("right");

  const showDrawer = () => {
    setIsDrawerOpen(true);
  };

  const onClose = () => {
    setIsDrawerOpen(false);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (value) => {
    setSelectedValue(value);
    showModal();
  };

  useEffect(
    () => setSelectedCoin(crypto.find((c) => c.id === selectedValue)),
    [selectedValue]
  );

  useEffect(() => {
    const callback = (e) => {
      if (e.key === "/") setIsSelectOpen((prev) => !prev);
    };
    window.addEventListener("keypress", callback);

    return () => removeEventListener("keypress", callback);
  }, []);

  return (
    <Layout.Header style={headerStyle}>
      <Select
        onClick={() => setIsSelectOpen((prev) => !prev)}
        style={{
          width: 300,
        }}
        open={isSelectOpen}
        placeholder="Select coin"
        defaultValue={crypto[0]?.name}
        onChange={handleChange}
        options={crypto.map((c) => {
          return { icon: c.icon, label: c.name, value: c.id };
        })}
        optionRender={(option) => (
          <Space>
            <img
              style={{ width: 40, height: 40, objectFit: "cover" }}
              src={option.data.icon}
            />
            {option.data.value}
          </Space>
        )}
      />
      <Button onClick={() => showDrawer()}>Add coin</Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {selectedCoin && (
          <h1>
            Buy {selectedCoin.name} - {selectedCoin.price}$
          </h1>
        )}
      </Modal>

      <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={isDrawerOpen}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </Layout.Header>
  );
};

export default AppHeader;
