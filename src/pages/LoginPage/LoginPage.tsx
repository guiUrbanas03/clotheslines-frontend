import { observer } from 'mobx-react';
import React from 'react';
import { api } from '../../api/api';

export const LoginPage: React.FunctionComponent = observer((): JSX.Element => {
  const login = async () => {
    await api().auth.login();
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={login}>Login</button>
    </div>
  );
});
