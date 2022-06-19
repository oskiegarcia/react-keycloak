import * as React from 'react'
import {useKeycloak} from '@react-keycloak/web'

export default () => {
  const {keycloak} = useKeycloak()
  return (
    <div className="ui card">
      <div>User is {!keycloak?.authenticated ? 'NOT ' : ''} authenticated</div>
      <div className="extra content"/>

      {!!keycloak?.authenticated && (
        <div className="ui basic green button"  onClick={() => keycloak.logout()}>Logout</div>
      )}

    </div>
  )
}
