import { Article } from "../../repository/productRepository";
import { ReactComponent as StarIcon } from "../../assets/star.svg";
import { ReactComponent as TruckIcon } from "../../assets/truck.svg";
import { FC } from "react";

export const ProductCard: FC<Article> = (props) => {
  return (
    <article className="card">
      <div
        className="product-image"
        style={{ backgroundImage: `url(${props.images[0].url})` }}
      />

      <div className="description">
        <div className="old-price-wrapper">
          <span className="old-price-line-through">
            {/* TODO */}
            {props.old_price?.formatted || 1}
          </span>
        </div>
        <div className="new-price-wrapper">
          <span className="new-price">{props.price.formatted}</span>
        </div>
        <div className="title-wrapper">
          <p className="title-text">{props.title}</p>
        </div>
        <div className="details-wrapper">
          <div className="rating-wrapper">
            <StarIcon />
            <span>{props.averageRating}</span>
          </div>
          <div className="delivery">
            <TruckIcon />
            <span>
              {props.shipping_time_min} - {props.shipping_time_max} dagar
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
