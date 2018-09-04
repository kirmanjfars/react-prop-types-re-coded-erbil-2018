// Code Goes Here

import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {
 
  render() {
    return (
      <div className="order">
        <ul>
          <li>{this.props.cone ? 'Cone' : 'Cup'}</li>
          <li>{this.props.size}</li>
          <li>{this.props.scoops.length} scoops: {this.props.scoops.join(', ')}</li>
          <li>Ordered by {this.props.orderInfo.customerName} at {this.props.orderInfo.orderedAt}.</li>
        </ul>
      </div>
    );
  }
}


Order.propTypes = {
  cone: PropTypes.bool,
  size: PropTypes.string
  scoops: PropTypes.array.isRequired
};

Order.defaultProps = {
  cone: true,
  size: 'regular'
};
 




export default Order;