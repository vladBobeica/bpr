import axios from "axios";

const URL = "/api/entities";
const URL_LOGIN = "/api/entities/0";

export const getItemsData = async (username, password) => {
  const response = await axios.get(URL, {
    auth: {
      username: username,
      password: password,
    },
  });

  return response.data;
};

export const login = async (username, password) => {
  try {
    await axios.get(URL_LOGIN, {
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
    });

    return true;
  } catch (error) {
    if (error.response?.status === 404) return true;

    console.error("api/getItemsData :: ", error);
    throw error;
  }
};
