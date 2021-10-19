import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Card.scss';
import { BsSafeFill, BsTrash } from "react-icons/bs";

const Card = () => {
  return (
    <div>
      <div className="cards">
        <div className="card-list">
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="card-icons"
          >
            <div
              style={{ color: "royalblue", marginLeft: 150 }}
              className="card"
            >
              <BsSafeFill />
            </div>
            <div
              style={{ color: "royalblue", marginRight: 50 }}
              className="card"
            >
              <BsTrash />
            </div>
          </div>
          <div style={{ marginLeft: 50, marginTop: 20 }} className="card-text">
              <Row className="card-content1">
                <Col xs="auto">
                <h5>Safe Name</h5>
                <p>Jalan-jalan</p>
                </Col>
                <Col xs="auto">
                <h5>Income</h5>
                <p>Rp 3.000.000</p>
                </Col>
                </Row>
              <div className="card-content3">
                <h5>Currency</h5>
                <p>Rupiah</p>
              </div>
            </div>
            </div>
          </div>
        </div>
  )
}

export default Card

