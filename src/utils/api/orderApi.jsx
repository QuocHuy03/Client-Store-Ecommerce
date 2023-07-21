import Http from "../http";

const http = new Http();

export const postOrder = async (data) => {
  try {
    const response = await http.post("/postOrder", data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const orderSuccess = async (data) => {
  try {
    const response = await http.post(`/orderSuccess`, { data });
    return response;
  } catch (error) {
    throw error;
  }
};
