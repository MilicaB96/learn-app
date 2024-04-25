export const selectRole = (state: any) => state.users.role;
export const selectFirstName = (state: any) => state.users.firstName;
export const selectUsername = (state: any) => state.users.username;
export const selectPassword = (state: any) => state.users.password;
export const selectIsLoading = (state: any) => state.users.pending;
export const selectIsAuth = (state: any) => state.users.isAuth;
export const selectErrors = (state: any) => state.users.errors;
