import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'login/CHANGE_INPUT'; // 액션

export const changeInput = createAction(CHANGE_INPUT); // 액션함수

const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: ''
  },
  login: {
    username: '',
    password: '',
  }
} // 초기 값

const Login = handleActions(
  {
    [CHANGE_INPUT]: (state, action) => state,
  },
  initialState,
)

export default Login;