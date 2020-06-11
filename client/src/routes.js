import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthContainer from './components/Auth/AuthContainer';
import Home from './components/Home/Home';
import UserProfileContainer from './components/UserProfile/UserProfileContainer';
import AuthAdminContainer from './components/AuthAdmin/AuthAdminContainer';
import AdminProfileContainer from './components/AdminProfile/AdminProfileContainer';
import Laws from './components/Laws/Laws';
import ArmsRegServicesAddr from './components/ArmsRegServicesAddr/ArmsRegServicesAddr';
import MedInstitutionsAddr from './components/MedInstitutionsAddr/MedInstitutionsAddr';


export default (
  <Switch>
    <Route exact path="/" render={() => <Home />} />
    <Route path="/auth" render={() => <AuthContainer />} />
    <Route path='/auth-admin' render={() => <AuthAdminContainer />} />
    <Route path='/user-profile' render={() => <UserProfileContainer />} />
    <Route path='/admin-profile' render={() => <AdminProfileContainer />} />
    <Route path="/laws" component={Laws} />
    <Route path="/adresa-sluzhb-po-registracii-oruzhiya" component={ArmsRegServicesAddr} />
    <Route path="/adresa-med-uchrezhdenij" component={MedInstitutionsAddr} />
  </Switch>
);