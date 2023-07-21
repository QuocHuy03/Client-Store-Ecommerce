import Http from "../http";

const http = new Http();

export const fetchAllUsers = async () => {
  try {
    const response = await http.get(`/getAllUsers`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const updateInfo = async (data) => {
  try {
    const response = await http.update(`/updateInfo/${data.userID}`, data.values);
    return response;
  } catch (error) {
    console.error(error);
  }
};
