import Slider from "react-slick";
import type { CustomArrowProps } from "react-slick";
import LeftArrow from "../assets/icons/left-arrow.svg";
import RightArrow from "../assets/icons/right-arrow.svg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./NewProducts.module.css";
import DUMMY_DATA from '../data.json';
import type { Product } from "../models/Product";

const NextArrow = ({ className, style, onClick }: CustomArrowProps) => {
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        >
            <img src={RightArrow} alt="Right Arrow" width={30} height={30} />
        </div>
    );
}

const PrevArrow = ({ className, style, onClick }: CustomArrowProps) => {
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        >
            <img src={LeftArrow} alt="Left Arrow" width={30} height={30} />
        </div>
    );
}


const NewProducts = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    const PRODUCTS: Product[] = DUMMY_DATA;

    return (
        <div className="container my-5">
            <h3 className="mb-4 fw-bold">Featured Products</h3>

            <div className={classes['slick-slider-wrapper']}>
                <Slider {...settings}>
                    {PRODUCTS.map((product) =>
                        product.isNew && (
                            <div key={product.id} className="p-2">
                                <div className="card shadow-sm border-0">
                                    <img
                                        src={import.meta.env.VITE_PUBLIC_URL + product.thumbnail}
                                        className="card-img-top"
                                        alt={product.title}
                                        style={{ height: "200px", objectFit: "cover" }}
                                    />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Product {product.title}</h5>
                                        <p className="card-text text-muted mb-2">Rs. {(product.price).toFixed(0)}</p>
                                        <button className="btn btn-primary btn-sm">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>)
                    )}
                </Slider>
            </div>
        </div>
    );
}

export default NewProducts;