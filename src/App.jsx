import React from "react";
import { Header } from "./components/header";
import { Box, Stack } from "@mui/material";
import { ProductList } from "./components/product/product-list";
import { productData } from "./data/prod-data";

function App() {
    return (
        <>
            <Header />
            <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                        mt: "50px",
                    }}
                >
                    {productData.map((item) => (
                        <ProductList key={item.id} {...item} />
                    ))}
                </Box>
            </Box>
        </>
    );
}

export default App;
