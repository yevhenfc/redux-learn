import React from 'react';
import { connect } from 'react-redux';
import {deleteUser, updateUser} from '../../actions';

const UserList = (props) => {
  const {users, deleteAction, updateAction} = props;
  const mapUsers = (u, index) => {
    const deleteHandler = () => {deleteAction(u.id);}
    const updateHandler = () => {updateAction({id: u.id, isPay: !u.isPay})}
  return (
      <li key={u.id}>
          User id {u.id} : {u.login} {u.email};
          <input type="checkbox" checked={u.isPay} onChange={updateHandler} />
          <button onClick={deleteHandler}>delete user</button>
      </li>
    )
  }
  
  return (
    <ul>{users.map(mapUsers)}</ul>
  )
}


const mapStateToProps = (state) => state.user; // user reducer

const mapDispatchToProps = (dispatch) => {
  return{
    deleteAction: id => {dispatch(deleteUser(id))},
    updateAction: newData => {dispatch(updateUser(newData))},
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (UserList);