import { createAction } from "@ngrx/store";

export const setUser = createAction('User Set',(username:string="")=>({username}));
export const resetUser = createAction("User Reset")

