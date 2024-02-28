import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Productos from "../Components/Productos";
import { Navigate } from "react-router-dom";
import { getJwtFromLocalStorage } from "../helpers/jwt";


const Products = () => {
  if (!getJwtFromLocalStorage()) {
    return <Navigate to="/" />;
  }
  return (
    <>
    <Header/>
    <Productos/>
    <Footer/>
    </>   
  );
};

export default Products;
