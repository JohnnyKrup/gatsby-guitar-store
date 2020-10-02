import axios from "axios"
import url from "../utils/URL"

const registerUser = async ({ username, email, password }) => {
  console.log("Register User")
  console.log({ url })

  const response = await axios
    .post(`${url}/auth/local/register`, {
      username,
      email,
      password,
    })
    .catch(error => console.log(error))
  return response
}

export default registerUser
