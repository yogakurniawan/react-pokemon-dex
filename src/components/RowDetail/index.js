import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-flexbox-grid';

function RowDetail({ label, content }) {
  return (
    <Row style={{ margin: '10px 0' }} start="xs">
      <Col xs={6} sm={6} md={4} lg={4}>
        <label style={{ fontWeight: 500 }}>{label}</label>
      </Col>
      <Col xs={6} sm={6} md={8} lg={8}>
        {content}
      </Col>
    </Row>
  );
}

RowDetail.propTypes= {
  label: PropTypes.string,
  content: PropTypes.node
}

export default RowDetail;