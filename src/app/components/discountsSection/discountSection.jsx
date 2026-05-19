// import React, { useEffect, useRef, useState } from "react";
// import "./style.css";
// import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
// import ProductCard from "@/app/utils/ProductCard/productCard";


// export default function DiscountSection({sectionImage,products,_id}) {


//     const [mounted, setMounted] = useState(false);

//     const scrollRefs = useRef({});
//     useEffect(() => {
//         setMounted(true);
//     }, []);

//     const scroll = (id, direction) => {
//         const scrollRef = scrollRefs.current[id];
//         if (scrollRef) {
//             const { scrollLeft, clientWidth } = scrollRef;
//             const scrollAmount = clientWidth - 100;
//             scrollRef.scrollTo({
//                 left:
//                     direction === "left"
//                         ? scrollLeft - scrollAmount
//                         : scrollLeft + scrollAmount,
//                 behavior: "smooth",
//             });
//         }
//     };

//     if (!mounted) return null;



//     return (
//         <div className="discount_section">
//             <div className="sales-header">
//                 <span>Discount </span>
//                 <p>See more</p>
//             </div>
//             <div className="horizontal-line">

//             </div>

//             <div className="sale_page_sale_carousel">
//                 <div className="sales_left_section">
//                     <img src="https://api.delcofarmersmarket.com/uploads/media/category/1756891632682_217_saving.png" alt="" srcset="" />
//                 </div>

//                 <div className={sectionImage ? "sales_right_section partial" : "sales_right_section full"}>
//                     <div className="sales-carousel-wrapper">
//                         <button
//                             className="sales-arrow-btn left"
//                             onClick={() => scroll(_id, "left")}
//                         >
//                             <FaChevronLeft />
//                         </button>
//                         <div
//                             className="sales_card_container"
//                             ref={(el) => (scrollRefs.current[_id] = el)}  
//                         >
//                             {products && products?.map((item) => {                    
//                                 return (

//                                     <div key={item?._id}>
//                                         {/* <ProductCard product={item} allProducts={section?.products} /> */}
//                                         <ProductCard item={item} />
//                                     </div>
//                                 );
//                             })}
//                         </div>

//                         <button
//                             className="sales-arrow-btn right"
//                             onClick={() => scroll(_id, "right")}
//                         >
//                             <FaChevronRight />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import ProductCard from "@/app/utils/ProductCard/productCard";
import ComingSoonPopup from "../comingSoon/comingSoon";

export default function DiscountSection({ sec_name, sectionImage, products, _id }) {
  const [mounted, setMounted] = useState(false);
  const scrollRefs = useRef({});

  useEffect(() => {
    setMounted(true);
  }, []);

  const scroll = (id, direction) => {
    const scrollRef = scrollRefs.current[id];
    if (scrollRef) {
      const { scrollLeft, clientWidth } = scrollRef;
      const scrollAmount = clientWidth - 100;
      scrollRef.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const [isOpen,setIsOpen] = useState(false)

  if (!mounted) return null;

  return (
    <div className="discount_section">
      <div className="sales-header">
        <span>{sec_name}</span>
        <p onClick={()=>{setIsOpen(true)}}>See more</p>
      </div>
      <div className="horizontal-line"></div>

      <div className="sale_page_sale_carousel">
        {/* LEFT IMAGE */}
        <div className="sales_left_section">
          <img src={"https://api.delcofarmersmarket.com"+sectionImage} alt={sec_name} />
        </div>

        {/* RIGHT PRODUCTS */}
        <div className={sectionImage ? "sales_right_section partial" : "sales_right_section full"}>
          <div className="sales-carousel-wrapper">
            <button
              className="sales-arrow-btn left"
              onClick={() => scroll(_id, "left")}
            >
              <FaChevronLeft />
            </button>

            <div
              className="sales_card_container"
              ref={(el) => (scrollRefs.current[_id] = el)}
            >
              {products?.map((item) => (
                <div onClick={()=>{setIsOpen(true)}} key={item?._id}>
                  <ProductCard item={item} />
                </div>
              ))}
            </div>

            <button
              className="sales-arrow-btn right"
              onClick={() => scroll(_id, "right")}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
      <ComingSoonPopup onClose={()=>{setIsOpen(false)}} isOpen={isOpen}/>
    </div>
  );
}
