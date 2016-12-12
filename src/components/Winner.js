import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'; //using for performance, when render function renders the same result (given the same props and state)

const Winner = React.createClass({
  mixins: [PureRenderMixin],

  render() {
    return (
      <div className="winner">
        Winner is {this.props.winner}!
      </div>
    );
  }
});

export default Winner;
