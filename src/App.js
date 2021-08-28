import './App.css';
import { useAuth0 } from '@auth0/auth0-react';


function App() {


  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
  } = useAuth0();
  return (
    <div className="App">
     

      {isAuthenticated && (
    <button onClick={() => {
      logout({ returnTo: window.location.origin });
    }}>Log out</button>)}
      {!isAuthenticated && (
        <button onClick={loginWithRedirect}>Log in</button>
      )}

      <div>Hello {user?JSON.stringify(user):null}</div>
    </div>
  );
}

export default App;
