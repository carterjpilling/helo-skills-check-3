
const initialState = {
  username: '',
  id: '',
  profile_pic: ''
}
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'

export function loginUser(user) {
  return {
    type: LOGIN_USER,
    payload: user
  }
}

export function logoutUser() {
  console.log('reducer logout')
  return {
    type: LOGOUT_USER
  }
}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, username: action.payload.username, profile_pic: action.payload.profile_pic, id: action.payload.id }
    case LOGOUT_USER:
      console.log('reducer 2 logout')
      return initialState
    default:
      return state
  }
}