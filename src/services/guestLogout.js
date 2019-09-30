export const guestLogout = () => {
  return fetch('https://happy-trees-be.herokuapp.com/api/v1/auth/logout', {
    mode: 'cors',
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include'
  })
    .then(res => res.json());
};
