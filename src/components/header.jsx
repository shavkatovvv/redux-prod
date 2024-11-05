import { Badge, Box, Drawer, IconButton, Stack } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import { Cart } from "./cart";
import { CartIcon } from "../assets/bag-icon";

export const Header = () => {
    const [state, setState] = React.useState(false);

    return (
        <Box bgcolor={"primary.main"} padding={10}>
            <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
                <Drawer
                    onClose={() => setState(false)}
                    open={state}
                    anchor="left"
                >
                    <Cart />
                </Drawer>

                <Box sx={{ alignItems: "center" }}>
                    <IconButton
                        color="error"
                        onClick={() => setState(true)}
                        aria-label="product"
                    >
                        <Badge>
                            <CartIcon />
                        </Badge>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};
