import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import GptModule from "../gpt-module/gpt";

const TabHdv = ({ pulsar, loading }) => {
  const [activeKey, setActiveKey] = useState("1");
  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  };

  return (
    <>
      <div className="section my-3 ">
        <Card className="shadow p-5">
          <Nav variant="tabs" activeKey={activeKey} onSelect={handleSelect}>
            <Nav.Item>
              <Nav.Link eventKey="1">
                <div
                  style={{
                    borderRadius: "50%",
                    backgroundColor: activeKey === "1" ? "#6A1B9A" : "#eee",
                    border: "1px solid #6A1B9A",
                    width: "15px",
                    height: "15px",
                  }}
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2">
                <div
                  style={{
                    borderRadius: "50%",
                    backgroundColor: activeKey === "2" ? "#6A1B9A" : "#eee",
                    border: "1px solid #6A1B9A",
                    width: "15px",
                    height: "15px",
                  }}
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3">
                <div
                  style={{
                    borderRadius: "50%",
                    backgroundColor: activeKey === "3" ? "#6A1B9A" : "#eee",
                    border: "1px solid #6A1B9A",
                    width: "15px",
                    height: "15px",
                  }}
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="4">
                <div
                  style={{
                    borderRadius: "50%",
                    backgroundColor: activeKey === "4" ? "#6A1B9A" : "#eee",
                    border: "1px solid #6A1B9A",
                    width: "15px",
                    height: "15px",
                  }}
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="5">
                <div
                  style={{
                    borderRadius: "50%",
                    backgroundColor: activeKey === "5" ? "#6A1B9A" : "#eee",
                    border: "1px solid #6A1B9A",
                    width: "15px",
                    height: "15px",
                  }}
                />
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <h1 id="register">Hoja de vida</h1>
          <GptModule activeKey={activeKey} pulsar={pulsar} loading={loading} />
        </Card>
      </div>
    </>
  );
};

export default TabHdv;
