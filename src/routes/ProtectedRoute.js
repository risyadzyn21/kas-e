import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest }) => {

  let isLoggedIn = localStorage.getItem('token')

  return (
    <Route {...rest} render={props => isLoggedIn
      ? (
        <Component key={props.match.params.id || 'empty'} {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    } />
  )
}

export default ProtectedRoute