import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      if (product) {
        // Kiểm tra xem product đã tồn tại hay chưa
        const existingProduct = state.carts.find(
          (item) => item.id === product.id
        );
        const newQuantity = parseInt(quantity);
        if (existingProduct) {
          // CẬP NHẬT SỐ LƯỢNG MỚI CHO SẢN PHẨM ĐÃ TỒN TẠI
          existingProduct.quantity += newQuantity;
        } else {
          // THÊM SẢN PHẨM MỚI
          state.carts.push({ ...product, quantity: newQuantity });
        }
      }
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      state.carts = state.carts.filter((item) => item.id !== product.id);
    },
    decreaseQuantity: (state, action) => {
      const product = action.payload;
      const existingProduct = state.carts.find((item) => item.id === product.id); // Tìm sản phẩm trong giỏ hàng dựa vào id
      if (existingProduct && existingProduct.quantity > 1) {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng và số lượng của nó lớn hơn 1
        existingProduct.quantity -= 1; // Giảm số lượng của sản phẩm đi 1
      } else {
        // Nếu sản phẩm không tồn tại trong giỏ hàng hoặc số lượng của nó chỉ còn 1
        state.carts = state.carts.filter((item) => item.id !== product.id); // Xóa sản phẩm khỏi giỏ hàng
      }
    },
    increasingQuantity: (state, action) => {
      const product = action.payload; 
      const existingProduct = state.carts.find((item) => item.id === product.id); 
      if (existingProduct) {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng
        existingProduct.quantity += 1; // Tăng số lượng của sản phẩm đi 1
      } else {
        // Nếu sản phẩm chưa tồn tại trong giỏ hàng
        state.carts.push({ ...product, quantity: 1 }); // Thêm sản phẩm vào giỏ hàng với số lượng là 1
      }
    },
    clearCart: (state) => {
      state.carts = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increasingQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export const cartSelector = (state) => state.cart.cart;

export default cartSlice.reducer;
