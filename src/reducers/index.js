import { combineReducers } from "redux";

import filterTracks from "./test";
import modal_show from "./modal";
import roll_show from "./roll_show.js";

export default combineReducers({
  filterTracks,
  modal_show,
  roll_show,
});


// export default function filterTracks(state = initialState, action) {
//   if (action.type === "TEST") {
//     return 'action.payload';
//   }
//   return state;
// }
