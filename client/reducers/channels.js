const initialState = {
  current: 'general',
  data: [ 'general', 'tech', 'random', 'rsi', 'idello', 'gaming' ]
};
export default function channels(state = initialState, action) {
  switch (action.type) {
    case 'SET_CHANNEL':
      return {...state,
        current: action.channel
      }
    default:
      return state
  }
}
