import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-flexbox-grid';
import { CircularProgress } from 'material-ui';
import List from 'components/List';

function ContentList({ error, loading, showDetail, component, payload }) {
  if (loading) {
    return <Row center="xs">
      <Col xs={12}>
        <CircularProgress size={50} />
      </Col>
    </Row>;
  }

  if (error) {
    return <div>Something went wrong, please try again!</div>;
  }

  if (payload.length) {
    return (
      <Row center="xs" style={{ margin: '20px 10px' }}>
        <Col xs={12} sm={10} md={10} lg={6}>
          <List items={payload} showDetail={showDetail} />
        </Col>
      </Row>
    );
  }

  return null;
}

ContentList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  payload: PropTypes.array,
  showDetail: PropTypes.func,
};

export default ContentList;
