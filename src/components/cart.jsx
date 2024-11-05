import { useSelector } from "react-redux";
import { ProdModal } from "../components/prod-modal/prod-modal";
import { nanoid } from "@reduxjs/toolkit";
import { Box } from "@mui/material";

export const Cart = () => {
    const { products_list } = useSelector((state) => state.products);

    return (
        <Box width={"400px"} bgcolor={"white"} padding={"30px"}>
            {products_list.map((item) => {
                return <ProdModal key={nanoid()} {...item} />;
            })}
        </Box>
    );
};
