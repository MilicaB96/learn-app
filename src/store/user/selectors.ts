export const selectUser = (state: any) => state.users;
export const selectRole = (state: any) => state.users.role;
export const selectFirstName = (state: any) => state.users.firstName;
export const selectEmail = (state: any) => state.users.email;
export const selectUsername = (state: any) => state.users.username;
export const selectPassword = (state: any) => state.users.password;
export const selectGeneratedPassword = (state: any) =>
	state.users.generatedPassword;
export const selectIsLoading = (state: any) => state.users.pending;
export const selectIsAuth = (state: any) => state.users.isAuth;
export const selectErrors = (state: any) => state.users.errors;
export const selectFlag = (state: any) => state.users.flag;
export const selectSpecializations = (state: any) =>
	state.users.specializations;

export const selectMyTrainers = (state: any) => state.users.myTrainers;
export const selectMyStudents = (state: any) => state.users.myStudents;
export const selectAllTrainers = (state: any) => state.users.allTrainers;
