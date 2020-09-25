import React, { useContext }  from 'react';
import { Route, Redirect } from 'react-router-dom';
import { userContext } from '../../App';

function PrivateRoute({ children, ...rest }) {
    const [loggedInuser, setLoggedInUser] =useContext(userContext);
    return (
      <Route
        {...rest}
        render={({ location }) =>
        loggedInuser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
// const PrivateRoute = () => {
  
//     return (
//         <>
//             <h1>Let's book a DOuble Room</h1>
//         </>
//     );
// };

export default PrivateRoute;