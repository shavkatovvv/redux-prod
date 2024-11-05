import { createSlice } from "@reduxjs/toolkit";

const prodReducer = createSlice({
    name: "product",
    initialState: {
        products_list: [],
        count: 0,
    },
    reducers: {
        addProd: (state, action) => {
            const oldproduct = state.products_list.find(
                (item) => item.id === action.payload.id
            );
            if (!oldproduct) {
                return {
                    ...state,
                    products_list: [
                        ...state.products_list,
                        {
                            ...action.payload,
                            prod_price: action.payload.price,
                            prod_count: 1,
                        },
                    ],
                };
            }
        },

        togglePrice: (state, action) => {
            const newProductList = state.products_list.map((item) => {
                if (
                    action.payload.type === "increment" &&
                    item.id === action.payload.id
                ) {
                    return {
                        ...item,
                        prod_count: item.prod_count + 1,
                        prod_price: (item.prod_count + 1) * item.price,
                    };
                } else if (
                    action.payload.type === "decrement" &&
                    item.id === action.payload.id &&
                    item.prod_count > 1
                ) {
                    return {
                        ...item,
                        prod_count: item.prod_count - 1,
                        prod_price: (item.prod_count - 1) * item.price,
                    };
                }

                return item;
            });
            return { ...state, products_list: newProductList };
        },
        deleteProd: (state, action) => {
            const newProd = state.products_list.filter(
                (item) => item.id !== action.payload.id
            );
            return { ...state, products_list: newProd };
        },

        totalCount: (state) => {
            let newCount = 0;
            for (let i of state.products_list) {
                newCount++;
            }
            return { ...state, count: newCount };
        },
    },
});

export default prodReducer.reducer;

export const { addProd, togglePrice, deleteProd, totalCount } =
    prodReducer.actions;
