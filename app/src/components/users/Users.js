import React from 'react';
import RoleManagement from './RoleManagement';
import ViewUserRole from './ViewUserRole';

export default class Users extends React.Component {
    render() {
        return (
            <div className="section">
                <h1>Users</h1>
                <ViewUserRole />
                <RoleManagement />
            </div>
        );
    }
}
