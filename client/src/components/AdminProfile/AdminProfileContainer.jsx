import React, { Component } from 'react';
import { connect } from 'react-redux';

import history from '../../history';
import AdminProfile from './AdminProfile';
import { fetchAdmin, adminLogout } from '../../store/actions/admin-profile';
import { adminFetchUsers, tableChange, closeDrawer, adminFetchUserById, adminDeleteUserById, adminAddNewUser, closePopover } from '../../store/actions/admin-all-users';


class AdminProfileContainer extends Component {

  componentDidMount() {
    const jwt = localStorage.getItem('admin-login');
    if (!jwt) {
      history.push('/auth-admin');
    } else {
      this.props.fetchAdmin();
      this.props.adminFetchUsers(this.props.pagination.current, this.props.limit);

    }

  }

  render() {
    return (
      <AdminProfile
        admin={this.props.admin}
        adminLogout={this.props.adminLogout}
        loading={this.props.loading}
        data={this.props.data}
        pagination={this.props.pagination}
        limit={this.props.limit}
        tableChange={this.props.tableChange}
        drawer={this.props.drawer}
        //openDrawer={this.props.openDrawer}
        closeDrawer={this.props.closeDrawer}
        adminFetchUserById={this.props.adminFetchUserById}
        currentUser={this.props.currentUser}
        adminDeleteUserById={this.props.adminDeleteUserById}
        adminAddNewUser={this.props.adminAddNewUser}
        successVisible={this.props.successVisible}
        closePopover={this.props.closePopover}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    admin: state.adminProfileReducer.admin,
    loading: state.adminAllUsersReducer.loading,
    data: state.adminAllUsersReducer.data,
    pagination: state.adminAllUsersReducer.pagination,
    limit: state.adminAllUsersReducer.limit,
    drawer: state.adminAllUsersReducer.drawer,
    currentUser: state.adminAllUsersReducer.currentUser,
    successVisible: state.adminAllUsersReducer.successVisible,
    closePopover: state.adminAllUsersReducer.closePopover
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAdmin: () => {
      dispatch(fetchAdmin());
    },
    adminLogout: () => {
      dispatch(adminLogout());
    },
    adminFetchUsers: (current, limit) => {
      dispatch(adminFetchUsers(current, limit));
    },
    tableChange: (current, limit) => {
      dispatch(tableChange(current, limit));
    },
    /*openDrawer: (userId) => {
      dispatch(openDrawer(userId));
    },*/
    closeDrawer: () => {
      dispatch(closeDrawer());
    },
    adminFetchUserById: (id) => {
      dispatch(adminFetchUserById(id));
    },
    adminDeleteUserById: (id) => {
      dispatch(adminDeleteUserById(id));
    },
    adminAddNewUser: (data) => {
      dispatch(adminAddNewUser(data));
    },
    closePopover: () => {
      dispatch(closePopover());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProfileContainer);