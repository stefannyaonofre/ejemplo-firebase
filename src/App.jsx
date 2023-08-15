import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from './app/store';
import { login, logout } from './redux/authActions';

const App = () => {

  const dispatch = useDispatch();
  const user = useSelector((store) => store.authReducer.userLogged);
  const isLogged = useSelector((store) => store.authReducer.isLogged)

  const handleLogin = () => {
    dispatch(login());
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className='App'>
      <header className='App-header'>
        EJEMPLO AUTH FIREBASE CON REDUX THUNK
        {isLogged ? <button onClick={() => handleLogout()}>Logout</button> : <button onClick={() => handleLogin()}>Login with google</button>}
        {isLogged &&
          <div>
            Bienvenido {user.email}
          </div>
        }
      </header>
    </div>
  )
}

export default App