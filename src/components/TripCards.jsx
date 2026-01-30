import '../assets/section-trip-cards.css'
import '../assets/trip-card.css'
import { useEffect, useState } from "react";
import TripCard from './TripCard';

export default function TripCards() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByRating, setSortByRating] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const res = await fetch("/data.json");

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

            <div className="section__search">
              <label hidden htmlFor="search">Search</label>

              <input
                id="search"
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
              </svg>
            </div>

            <button
              className={`section__sort ${sortByRating ? "active" : ""}`}
              type="button"
              onClick={() => setSortByRating(!sortByRating)}
            >
              Sort by Rating
            </button>

            <ul className="section__list">
              {trips
              .filter((trip) => !searchTerm || trip.name?.toLowerCase().includes(searchTerm.toLowerCase()))
              .sort((a, b) => {
                if (!sortByRating) return 0;
                return b.rating - a.rating;
              })
              .map(trip => (
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
