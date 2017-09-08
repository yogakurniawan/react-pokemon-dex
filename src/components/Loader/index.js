import React from 'react';
import { CircularProgress } from 'material-ui';
import { Col, Row } from 'react-flexbox-grid';

function Loader(props) {
  return (
    <Row center="xs">
      <Col xs={12}>
        <CircularProgress size={80} thickness={5} />
      </Col>
    </Row>
  );
}

export default Loader;
