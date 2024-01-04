export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserEmail = state => state.auth.user.email;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectError = state => state.auth.error;
