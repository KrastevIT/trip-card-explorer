import { useState } from "react";

export default function TripCard(props) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="trip-card">
      <div className="trip__media media media--1-1">
        {props.image && (
          <img src={imageError ? '../placeholder.png' : props.image} alt={props.name} onError={() => setImageError(true)}/>
        )}
      </div>

      <div className="trip__content">
        <h2 className="trip__name">{props.name}</h2>

        <div className="trip__rating">
          <p className="trip__rating-number">
            {props.rating}
          </p>

          {[...Array(props.rating)].map((_,i) =>
            <svg key={i} width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" fill="#F6C800"/>
            </svg>
          )}
        </div>

        <div className="trip__description">
          <p>{props.description}</p>
        </div>

        {props.longDescription && (
          <div className="trip__actions">
            <button className="button" type="button">More Info</button>
          </div>
        )}
      </div>
    </div>
  )
}
