import Http from "../http";

const http = new Http();

export const applyDiscount = async (data) => {
  try {
    const response = await http.post("/applyDiscount", data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getDiscount = async () => {
  try {
    const response = await http.get("/getAllDiscount");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteDiscount = async (id) => {
  try {
    const response = await http.delete(`/deleteDiscount/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
