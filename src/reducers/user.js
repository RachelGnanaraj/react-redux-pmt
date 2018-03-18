const initialState = {
  id: 1,
  name: 'John Doe',
  email: 'johndoe@example.com',
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {

  default:
    return state;
  }
}
