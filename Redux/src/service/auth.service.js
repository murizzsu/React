import axios from "axios";
import { jwtDecode } from "jwt-decode"

export const Authlogin = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      // console.log(res)
      callback(true, res.data.token);
    })
    .catch((error) => {
      callback(false, error);
    });
  // parameter data merupakan data yang dibutuhkan yang nantinya dikirimkan
};

export const getUsername = (token) => {
    const decoded = jwtDecode(token)
    // console.log(decoded)
    return decoded.user
}
