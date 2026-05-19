// utils/ProductCard/SkeletonCard.jsx
"use client";
import React from "react";
import "./skeleton.css";

export default function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton-img"></div>
      <div className="skeleton skeleton-text short"></div>
      <div className="skeleton skeleton-text"></div>
    </div>
  );
}
