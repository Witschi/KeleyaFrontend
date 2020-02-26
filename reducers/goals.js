const goals = (state = {find_workouts: false, maintain_weight: false,birth_preparation: false,feel_relaxed: false}, action) => {
  switch (action.type) {
    case 'TOGGLE_GOAL':
		state[action.goal] = !state[action.goal]
		return {...state}
    default:
      return state
  }
}
export default goals
