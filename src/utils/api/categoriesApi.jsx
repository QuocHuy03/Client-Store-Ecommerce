import Http from "../http";

const http = new Http();

export const fetchAllCategories = async () => {
  try {
    const response = await http.get(`/getAllCategories`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// export const fetchAllCategoriesPage = async (page, limit) => {
//   try {
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

export const fetchCategoryBySlug = async (slug) => {
  try {
    const response = await http.get(`/getCategoryBySlug/${slug}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

