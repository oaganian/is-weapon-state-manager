import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Auth from './Auth';
import { connect } from 'react-redux';

import { userLogin } from '../../store/actions/user-login';

class AuthContainer extends Component {
    componentDidMount() {

    }
    render() {

        return (
            <Auth userLogin={this.props.userLogin}
                errorMessage={this.props.errorMessage}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        errorMessage: state.userLoginReducer.errorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogin: (data) => {
            dispatch(userLogin(data));
        }
    }
}

//Define auth container proptypes
AuthContainer.propTypes = {
    userLogin: PropTypes.func.isRequired,
    errorMessage: PropTypes.string.isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);