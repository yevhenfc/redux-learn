import React from 'react'
import  {connect} from 'react-redux'
import * as actionCreators from '../../actions';


function ThemeSwitcher(props) {
  const {isLight, setTheme} = props; 
  const themeHandler = (e) => { return setTheme(isLight) };

  return (
  <div> 
    <button onClick={themeHandler}>Switched to theme {isLight ? 'Light' : 'Dark'}</button>
  </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    setTheme: (isLight) => dispatch(actionCreators.setTheme(isLight)),
  }
}
const mapStateToProps = (state) => {return state.themeReducer};

export default connect(mapStateToProps, mapDispatchToProps) (ThemeSwitcher);