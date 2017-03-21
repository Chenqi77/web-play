
import style from './style.css';


import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input, Button } from 'antd';

import * as actions from './actions';


function mapStateToProps(state) {
  return {
    state: state.geoip,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
class GeoIP extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  static defaultProps = {
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      country: '',
      subdivisions: '',
      city: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ country: e.target.value.trim() });
    console.log(this.state);
  }

  handleClick() {
    this.props.actions.getIpList(this.state);
  }

  render() {
    return (
      <div className={style.geoip}>
        <div className={style.label}>国家：</div>
        <Input
          value={this.state.country}
          className={style.input}
          onChange={this.handleChange}
          placeholder="请录入..."
        />

        <div className={style.label}>省份：</div>
        <Input value={this.state.subdivisions} className={style.input} placeholder="请录入..." />

        <div className={style.label}>城市：</div>
        <Input value={this.state.city} className={style.input} placeholder="请录入..." />

        <Button onClick={this.handleClick}>确定</Button>
      </div>
  );
  }
}

export default GeoIP;
