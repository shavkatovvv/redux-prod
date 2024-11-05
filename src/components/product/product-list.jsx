import { Box, Button, Typography } from "@mui/material";
import React from "react";
import formatter from "../../utils/formatter";
import { useDispatch } from "react-redux";
import { addProd } from "../../redux/reducers/product-reducer";

export const ProductList = (props) => {
    const dispatch = useDispatch();
    return (
        <Box>
            <Box>
                <img width={"400px"} src={props.img} alt="img" />
                <Typography>{props.title}</Typography>
                <Typography>{formatter(props.price)} sum</Typography>
                <Typography>{props.brand}</Typography>
                <Button
                    sx={{ padding: "15px" }}
                    onClick={() => dispatch(addProd(props))}
                    fullWidth
                    variant="contained"
                >
                    ADD
                </Button>
            </Box>
        </Box>
    );
};
