import { PAGE_SIZE } from "../../env";
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

export const fetchAllProductPage = async (page) => {
  try {
    const response = await http.get(
      `/getAllProducts?page=${page}&limit=${PAGE_SIZE}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSearchProduct = async (search) => {
  try {
    const response = await http.get(`/getAllProducts?filter=${search}`);

    return response;
  } catch (error) {
    console.error(error);
  }
};

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
