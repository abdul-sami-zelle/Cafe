import React, { useState } from "react";
import "./style.css";

export default function ProductCard({ item }) {

    const [imageSrc, setImageSrc] = useState(
        "https://api.delcofarmersmarket.com" + item.image
    );

    return (
        <div className="product_card">
            <div className="main_product_card_cont">
                <img
                    src={imageSrc}
                    alt={item.title}
                    onError={() => {
                        setImageSrc(
                            "https://grocery.delcofarmersmarket.com/assets/Images/missed-image.png"
                        );
                    }}
                />

                <div className="product_image">
                    <h2>{item.title}</h2>
                    {/* <p>{item.description}</p> */}
                </div>
            </div>

            <div className="bottom_section_card">
                <div className="pricing_section">
                    ${item.price}
                </div>

                <button>Add to Cart</button>
            </div>
        </div>
    );
}