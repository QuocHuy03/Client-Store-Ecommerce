import Http from "../http";

const http = new Http();

export const fetchAllProducts = async () => {
  try {
    const response = await http.get(`/getAllProducts`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// export const fetchAllCategoriesPage = async (page, limit) => {
//   try {
//     const state = store.getState();
//     const accessToken = state.auth.user.accessToken;
//     http.setAccessToken(accessToken);
//     const response = await http.get(
//       `/getAllCategories?page=${page}&limit=${limit}`
//     );
//     if (response.status === false) {
//       message.error(`${response.message}`);
//     } else {
//       return response;
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

export const fetchProductBySlug = async (slug) => {
  try {
    const response = await http.get(`/getProductBySlug/${slug}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchProductOfCategory = async (id) => {
  try {
    const response = await http.get(`/getProductOfCategory/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
