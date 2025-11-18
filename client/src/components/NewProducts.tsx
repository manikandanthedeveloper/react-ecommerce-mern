import Slider from "react-slick";
import type { CustomArrowProps } from "react-slick";
import LeftArrow from "../assets/icons/left-arrow.svg";
import RightArrow from "../assets/icons/right-arrow.svg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./NewProducts.module.css";

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

    // Dummy items (Replace with your products JSON)
    const items = [1, 2, 3, 4, 5, 6, 7];

    return (
        <div className="container my-5">
            <h3 className="mb-4 fw-bold">Featured Products</h3>

            <div className={classes['slick-slider-wrapper']}>
                <Slider {...settings}>
                    {items.map((item) => (
                        <div key={item} className="p-2">
                            <div className="card shadow-sm border-0">
                                <img
                                    src={`https://picsum.photos/300/200?random=${item}`}
                                    className="card-img-top"
                                    alt="Product"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Product {item}</h5>
                                    <p className="card-text text-muted mb-2">Rs. {(item * 499).toFixed(0)}</p>
                                    <button className="btn btn-primary btn-sm">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default NewProducts;