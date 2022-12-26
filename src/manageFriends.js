const initialState = {friends: []}
export function manageFriends(state = initialState, action) {
  // your code here
  switch(action.type){
    case("friends/add"):
    return {...state, friends: [...state.friends, action.payload]}
    case("friends/remove"):
    const removeFriends = [...state.friends]
    return {...state, friends: removeFriends.splice(action.payload + 1, 1)}
    default:
      return state
  }
}
