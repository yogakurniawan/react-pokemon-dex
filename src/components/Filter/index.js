import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-flexbox-grid';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import uuid from 'uuid/v1';

function Filter(props) {
  return (
    <Row start="xs">
      <Col style={{ margin: '0 auto' }} xs={12} sm={10} md={10} lg={6}>
        <SelectField
          style={{ marginLeft: 8 }}
          onChange={props.onChange}
          name="Filter"
          value={props.value}
          label="Filter"
          floatingLabelText="Filter"
        >
          <MenuItem value="all" primaryText="All Types" />
          {
            props.items && props.items.map(item =>
              <MenuItem key={uuid()} value={item.name} primaryText={item.name} />
            )
          }
        </SelectField>
      </Col>
    </Row>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
  items: PropTypes.array,
  value: PropTypes.string
};

export default Filter;
