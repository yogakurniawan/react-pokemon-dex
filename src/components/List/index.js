import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-flexbox-grid';
import Card from 'components/Card';
import uuid from 'uuid/v1';

function List(props) {
  return (
    <Row center="xs">
      {
        props.items.map((item, index) => (
          <Col key={uuid()} xs={12} sm={6} md={4} lg={3}>
            <Card pokemon={item.pokemon ? item.pokemon : item} showDetail={props.showDetail} />
          </Col>
        ))
      }
    </Row>
  );
}

List.propTypes = {
  showDetail: PropTypes.func,
  items: PropTypes.array,
};

export default List;
