import React from "react";
import {
  Box,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import AddToCartButton from "../components/AddToCartButton";
import DeccreaseButton from "../components/DeccreaseButton";
import RemoveItemButton from "../components/RemoveItemButton";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/create`);
  };

  return (
    <Container sx={{ display: "flex", minHeight: "100vh", mt: 3 }}>
      <Box sx={{ overflowX: "auto" }}>
        <TableContainer sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: { xs: "20%", sm: "25%" } }}>
                  Product
                </TableCell>
                {/* <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                  Quantity
                </TableCell> */}
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((item) => {
                return (
                  <TableRow key={item._id} hover>
                    <TableCell
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer"
                      }}
                    >
                      <ProductCard product={item} />
                    </TableCell>
                    <TableCell
                      // align="left"
                      sx={{ display: { xs: "none", md: "table-cell" } }}
                    >
                      <AddToCartButton product={item} display={"+"} />
                      {item.cartQuantity}
                      <DeccreaseButton product={item} />
                      <RemoveItemButton product={item} />
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{ display: { xs: "none", md: "table-cell" } }}
                    ></TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "1rem" }}>
          <Button onClick={handleClick}>Checkout</Button>
        </Box>
      </Box>
    </Container>
  );
}

export default CartPage;
