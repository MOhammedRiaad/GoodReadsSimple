import axios from 'axios';

const API_URL = 'http://localhost:4000/users/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'authenticate', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        // eslint-disable-next-line no-debugger
        debugger
        // eslint-disable-next-line no-console
        console.log(response)
        if (response.data.jwtToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'CreateUser'
    , {
      username: user.username,
      email: user.email,
      password: user.password ,
      firstName : user.firstName ,
      lastName : user.lastName,
      role:user.role ? user.role : 'User'
    });
  }
}

export default new AuthService();
