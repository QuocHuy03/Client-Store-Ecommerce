import Http from "../http";

const http = new Http();

export const vnpayAPI = async (amout) => {
  try {
    const response = await http.post(`/apiVnpay`, { amout });
    return response;
  } catch (error) {
    throw error;
  }
};

