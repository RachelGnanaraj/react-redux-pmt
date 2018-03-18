/*
 *
 * LOGOUT action
 */
export const LOGOUT = 'LOGOUT';
export function logout() {
  return {
    type: LOGOUT,
    payload: {},
  };
}
