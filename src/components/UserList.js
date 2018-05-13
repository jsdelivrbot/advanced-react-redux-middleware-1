import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UserList extends React.Component {
  renderUser = (user) => {
    return (
      <li key={ user.id }>
        <div className='card card-block'>
          <h2 className='card-title'>{ user.name }</h2>
          <p className='card-text'>{ user.company.name }</p>
          <a className='btn btn-primary' href={ user.website }>Website</a>
        </div>
      </li>
    );
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <ul className='UserList'>
        { this.props.users.map((user) => this.renderUser(user)) }
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps, { fetchUsers })(UserList);
