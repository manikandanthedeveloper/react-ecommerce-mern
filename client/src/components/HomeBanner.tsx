import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./HomeBanner.module.css";

import BannerOne from "../assets/banners/banner1.jpeg";
import BannerTwo from "../assets/banners/banner2.jpg";
import BannerThree from "../assets/banners/banner3.jpg";

function HomeBanner() {
    const sliderRef = useRef<Slider | null>(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: false,
        accessibility: false,
        pauseOnFocus: false,
        pauseOnHover: false,
    };

    useEffect(() => {
        const inner = (sliderRef.current)?.innerSlider;
        const list: HTMLElement | null = inner?.list || null;

        if (!list) return;

        const updateSlides = () => {
            const slides = list.querySelectorAll<HTMLElement>(".slick-slide");
            slides.forEach((slide) => {
                const isHidden = slide.getAttribute("aria-hidden") === "true";

                if (isHidden) {
                    slide.setAttribute("inert", "");
                } else {
                    slide.removeAttribute("inert");
                }
            });
        };
        updateSlides();
        const observer = new MutationObserver(updateSlides);
        observer.observe(list, {
            attributes: true,
            subtree: true,
            attributeFilter: ["aria-hidden"],
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className={classes["slider-container"]}>
            <Slider ref={sliderRef} {...settings}>
                <div>
                    <img
                        src={BannerOne}
                        style={{ width: "100%", height: "600px", objectFit: "cover" }}
                        alt="Banner one"
                    />
                </div>
                <div>
                    <img
                        src={BannerTwo}
                        style={{ width: "100%", height: "600px", objectFit: "cover" }}
                        alt="Banner two"
                    />
                </div>
                <div>
                    <img
                        src={BannerThree}
                        style={{ width: "100%", height: "600px", objectFit: "cover" }}
                        alt="Banner three"
                    />
                </div>
            </Slider>
        </div>
    );
}

export default HomeBanner;
