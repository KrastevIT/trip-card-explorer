import '../assets/section-trip-cards.css'
import '../assets/trip-card.css'
import { useEffect, useState } from "react";
import TripCard from './TripCard';

export default function TripCards() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const res = await fetch("../public/data.json");

        setLoading(false);

        if (!res.ok) throw new Error("Something went wrong. Please contact support.");

        const data = await res.json();

        setTrips(data.trips);

      } catch (error) {
        setError(error?.message || "Unknown error");
      }
    })();
  }, []);

  return (
    <div className="section-trip-cards">
      <div className="container">
        {loading && (
          <div className="loading">Loading...</div>
        )}

        {error && (
          <div className="error">{error}</div>
        )}

        {trips.length > 0 && (
          <>
            <h1 className="section__title">
              Trip cards
            </h1>

            <ul className="section__list">
              {trips.map(trip => (
                <li key={trip.id}>
                  <TripCard
                    name={trip.name}
                    image={trip.image}
                    description={trip.description}
                    longDescription={trip.long_description}
                    rating={trip.rating}
                  />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}
