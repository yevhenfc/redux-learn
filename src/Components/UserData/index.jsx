import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {getUserAction, getUserRequest, getUserSuccess, getUserError} from '../../actions';

function UserData(props) {
  const {user, isFetching, error, getInfoUserAction} =  props;
  
  useEffect(() => {getInfoUserAction()}, []);

  return (
    <div>
      {error && <p>load error</p>}
      {isFetching && <p>load...</p>}
      <div>{JSON.stringify(user)}</div>
    </div>
  )
}

const mapStateToProps = (state) => state.userData;

const mapDispatchToProps = (dispatch) => {
  return{
    getInfoUserAction: () => {dispatch(getUserAction())}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserData);