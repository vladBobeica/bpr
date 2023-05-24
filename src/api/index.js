import axios from "axios";

const URL = "/api/entities";
const username = process.env.REACT_APP_FIWARE_API_LOGIN;
const password = process.env.REACT_APP_FIWARE_API_PASSWORD;

export const getItemsData = async (lat, lng) => {
  try {
    const response = await axios.get(URL, {
      auth: {
        username: username,
        password: password,
      },
      // location: {
      //   value: {
      //     coordinates: {
      //       value: [lat, lng],
      //     },
      //   },
      // },
    });

    return response.data;
  } catch (error) {
    console.log(error.response);
    throw error;
  }
};
