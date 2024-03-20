import React from "react";
import SideBar from "../../components/Sidebar/SideBar";
import Banner from "../../components/banner/Banner";
import data from "../../assets/data.js"
import allProduct from "../../assets/all_product.js"
import new_collections from "../../assets/new_collections.js";
import Product from "../../components/product/Product.jsx";


function Home() {
  return (
    <div className="flex w-auto h-auto flex-wrap flex-row gap-[50px] my-[80px] mx-[40px]">
        <SideBar />
        <Banner/>
        <Product data={new_collections} tpyeOffProduct="New Collection"/>
        <Product data={data} tpyeOffProduct="Best Selling Products"/>
        <Product data={allProduct} tpyeOffProduct="All Product"/>
    </div>
  );
}

export default Home;
