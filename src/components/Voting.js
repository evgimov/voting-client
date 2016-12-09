import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Winner from './Winner';
import Vote from './Vote';
import {connect} from 'react-redux';

export const Voting = React.createClass({
  mixins: [PureRenderMixin],

  render(){
    return <div>
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner}/> :
        <Vote {...this.props}/>
      }
    </div>
  }
});

function mapStateToProps(state){
  return {
    pair: state.getIn(['vote','pair']),
    winner: state.get('winner')
  };
}

connect(mapStateToProps)(Voting)

export const VotingContainer = connect(mapStateToProps)(Voting);
