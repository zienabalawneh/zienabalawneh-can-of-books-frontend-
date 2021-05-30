import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class User extends Component {
    render() {
        const { user, isAuthenticated } = this.props.auth0;
        // return <div>Hello {user.name}</div>;
        return (
            <>
                { isAuthenticated &&
                    <>
                        <div>Hello {user.name}</div>
                        <div>Email: {user.email}</div>
                    </>

                }
            </>
        )
    }
}

export default withAuth0(User);