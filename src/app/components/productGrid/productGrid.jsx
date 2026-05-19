"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/app/utils/ProductCard/productCard";
import SkeletonCard from "@/app/utils/ProductCard/skeletonCard";
import { getProductsGrid } from "@/app/lib/api";
import "./style.css";
import Pagenation from "@/app/utils/pagenation/pagenation";
import ComingSoonPopup from "../comingSoon/comingSoon";

export default function ProductGrid() {
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

  const nextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const [isOpen,setIsOpen] = useState(false);


  return (
    <div className="category_products_sections">
      <h2 className="section_heading">Oven Fresh Picks</h2>

      <div className="grid_container">
        <div className="products_grid">
          {loading
            ? Array.from({ length: limit }).map((_, idx) => (
                <SkeletonCard key={idx} />
              ))
            : products.map((item) => (
                <div onClick={()=>{setIsOpen(true)}}>
                   <ProductCard item={item} key={item._id} />
                </div>
              ))}
        </div>
      </div>

      {/* Pagination Controls */}
      {!loading && (
        <Pagenation prevPage={prevPage} page={page} totalPages={totalPages} nextPage={nextPage} goToPage={(num) => setPage(num)} />
      )}

      <ComingSoonPopup isOpen={isOpen} onClose={()=>{setIsOpen(false)}} />
    </div>
  );
}
