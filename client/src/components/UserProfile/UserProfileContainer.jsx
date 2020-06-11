import React, { Component } from 'react';
import { connect } from 'react-redux';


import UserProfile from './UserProfile';
import history from '../../history';
import { fetchUser, userLogout } from '../../store/actions/user-profile';


class UserProfileContainer extends Component {
  componentDidMount() {
    const jwt = localStorage.getItem('user-login');
    if (!jwt) {
      history.push('/auth');
    } else {

      this.props.fetchUser();
    }

  }

  render() {
    return (
      <UserProfile user={this.props.user} userLogout={this.props.userLogout} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userProfileReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => {
      dispatch(fetchUser());
    },
    userLogout: () => {
      dispatch(userLogout());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);