import axios from "axios";

const URL = "/api/entities";
const username = process.env.REACT_APP_FIWARE_API_LOGIN;
const password = process.env.REACT_APP_FIWARE_API_PASSWORD;

export const getItemsData = async () => {
  try {
    const response = await axios.get(URL, {
      auth: {
        username: username,
        password: password,
      },
    });

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
