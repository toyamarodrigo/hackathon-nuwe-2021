import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RegisterFormPersonal, RegisterFormLocalization, RegisterFormVerification} from '../components';
import { RegisterPage } from '../pages';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <RegisterPage />
        </Route>
        <Route path="/register/step/1">
          <RegisterFormPersonal />
        </Route>
        <Route path="/register/step/2">
          <RegisterFormLocalization />
        </Route>
        <Route path="/register/step/3">
          <RegisterFormVerification />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
