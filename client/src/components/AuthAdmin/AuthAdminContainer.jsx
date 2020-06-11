import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuthAdmin from './AuthAdmin';
import { adminLogin } from '../../store/actions/admin-login';

class AuthAdminContainer extends Component {
  render() {
    return (
      <AuthAdmin
        adminLogin={this.props.adminLogin}
        errorMessage={this.props.errorMessage}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.adminLoginReducer.errorMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    adminLogin: (data) => {
      dispatch(adminLogin(data));
    }
  }
}

//Define auth container proptypes
/*AuthContainer.propTypes = {
  userLogin: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired
}*/


export default connect(mapStateToProps, mapDispatchToProps)(AuthAdminContainer);
