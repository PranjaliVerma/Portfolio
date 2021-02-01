import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const LoaderPage = () => {
  return (
   <center><Loader type="ThreeDots" color="#1c2237" height={150} width={150} style={{marginTop:'200px'}}/></center>
  );
}
export default LoaderPage;