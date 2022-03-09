import React from 'react';
import { Carousel } from 'react-bootstrap';
import {images} from "../../constants";

const PhotoCarousel = () => {
    return (
        <div className ="header">
        <Carousel fade={true} pause={false}>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={images.gallery01}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="carousel__title">Parking strzeżony 24h</h3>
                    <p className="carousel__subtitle">Kraków, Białoruska-Estońska</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={images.gallery02}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className="carousel__title">Parking strzeżony 24h</h3>
                    <p className="carousel__subtitle">Kraków, Białoruska-Estońska</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={images.gallery03}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className="carousel__title">Parking strzeżony 24h</h3>
                    <p className="carousel__subtitle">Kraków, Białoruska-Estońska</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={images.gallery04}
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h3 className="carousel__title">Parking strzeżony 24h</h3>
                    <p className="carousel__subtitle">Kraków, Białoruska-Estońska</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={images.gallery05}
                    alt="Fifth slide"
                />
                <Carousel.Caption>
                    <h3 className="carousel__title">Parking strzeżony 24h</h3>
                    <p className="carousel__subtitle">Kraków, Białoruska-Estońska</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    )
}
export {PhotoCarousel};