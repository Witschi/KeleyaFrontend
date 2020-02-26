const goals = (state = 5, action) => {
  switch (action.type) {
    case 'SET_LEVEL':
      return action.level
    default:
      return state
  }
}
export default goals
