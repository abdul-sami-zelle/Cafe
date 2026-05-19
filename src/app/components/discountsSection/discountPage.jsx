"use client";
import React, { useEffect, useState } from "react";
import { getSalesProductData } from "@/app/lib/api";
import DiscountSection from "./discountSection";

export default function SalesPage() {
    const [salesData, setSalesData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await getSalesProductData();
            setSalesData(data);
        }
        fetchData();
    }, []);

    if (!salesData) return <p>Loading...</p>;

    return (
        <div className="sale_section_discount" >
            {salesData?.banner && <img className="sale_section_discount_banner" src={"https://api.delcofarmersmarket.com"+salesData?.banner} />}
            <div className="sales_discounts_list">
                {salesData.sales?.map((section) => (
                    <DiscountSection
                        key={section._id}
                        sec_name={section.sec_name}
                        sectionImage={section.image}
                        products={section.products}
                        _id={section._id}
                    />
                ))}
            </div>
        </div>
    );
}
