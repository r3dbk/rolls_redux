const initialState = "";
export default function filterTracks(state = initialState, action) {
  if (action.type === "TEST") {
    return "action.payload";
  }
  return state;
}
