export default function authHeader() {
  let user = JSON.parse(localStorage.getItem('user'));

  if (user && user.jwtToken) {
    return { Authorization: 'Bearer ' + user.jwtToken }; // for Spring Boot back-end
     //return { 'x-access-token': user.jwtToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}
