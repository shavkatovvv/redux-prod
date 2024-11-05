import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import formatter from "../../utils/formatter";
import { useDispatch } from "react-redux";
import { deleteProd, togglePrice } from "../../redux/reducers/product-reducer";
export const ProdModal = (props) => {
    const dispatch = useDispatch();
    return (
        <Box>
            <Stack
                mb={"20px"}
                direction={"column"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Stack>
                    <Box>
                        <img src={props.img} alt="img" />
                    </Box>
                    <Typography>{props.title}</Typography>
                    <Typography>{formatter(props.price)} sum</Typography>
                </Stack>
                <Box>
                    <Stack direction="row" alignItems={"center"}>
                        <IconButton
                            onClick={() =>
                                dispatch(
                                    togglePrice({
                                        id: props.id,
                                        type: "increment",
                                    })
                                )
                            }
                        >
                            +
                        </IconButton>
                        <Typography>{props.prod_count}</Typography>
                        {props.prod_count < 2 ? (
                            <IconButton
                                onClick={() =>
                                    dispatch(deleteProd({ id: props.id }))
                                }
                            >
                                remove
                            </IconButton>
                        ) : (
                            <IconButton
                                onClick={() =>
                                    dispatch(
                                        togglePrice({
                                            id: props.id,
                                            type: "decrement",
                                        })
                                    )
                                }
                            >
                                -
                            </IconButton>
                        )}
                    </Stack>
                    <Typography>{formatter(props.prod_price)} sum</Typography>
                </Box>
            </Stack>
        </Box>
    );
};
