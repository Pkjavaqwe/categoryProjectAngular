import { createReducer, on } from "@ngrx/store";
// import { initialState } from "./counter.reducer";
import { resetUser, setUser } from "./user.action";
import { state } from "@angular/animations";
export const initialState = "";
export const useReducer = createReducer(
    initialState,
    on(setUser,(state,action: { username: any; }) => state = action.username),
    on(resetUser,(state)=> state=""),

)