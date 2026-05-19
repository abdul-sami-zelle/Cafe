"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/HeroSection/herosection";
import Categories from "./components/categories/Categories";
import ProductSlider from "./components/products/products";
import { getProductsGrid } from "./lib/api";
import SalesSection from "./components/saleSection/salesSection";
import MainSlider from "./components/mainSlider/mainSlider";
import ProductGrid from "./components/productGrid/productGrid";
import DiscountSection from "./components/discountsSection/discountSection";
import SalesPage from "./components/discountsSection/discountPage";
import FtBanner from "./components/footerBanner/ftBanner";
import Footer from "./components/Footer/Footer";
import Footer_2 from "./components/footer_2/footer";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [sections, setSections] = useState([]);


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 20;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await getProductsGrid({ page, limit });
      setProducts(res.products);
      setTotalPages(res.totalPages);
      setLoading(false);
    };
    fetchProducts();
  }, [page]);

  return (
    <div >
      <Header />

      <MainSlider />
      {/* <SalesSection /> */}
      <div className="main_sections">
        <ProductGrid />
      </div>
      {/* <SalesPage /> */}
      <FtBanner/>
      <Footer_2/>
    </div>
  );
}