const goals = (state = new Date(), action) => {
  switch (action.type) {
    case 'SET_DUEDATE':
      return action.date
    default:
      return state
  }
}
export default goals
