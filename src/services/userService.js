```javascript
import axios from 'axios';
import { userSlice } from '../redux/slices/userSlice';

const { actions } = userSlice;

export const userService = {
  login,
  logout,
};

function login(username, password) {
  return axios
    .post('/api/authenticate', { username, password })
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function handleResponse(response) {
  const data = response.data;
  if (response.status !== 200) {
    if (response.status === 401) {
      // auto logout if 401 response returned from api
      logout();
      location.reload(true);
    }

    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }

  return data;
}
```