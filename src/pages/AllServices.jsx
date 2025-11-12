import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router";
import axios from "axios";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const shouldRefresh = location.state?.refresh;
  const fetchServices = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/services");
      setServices(response.data.reverse());
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchServices();
    if (shouldRefresh) {
      window.history.replaceState({}, document.title, location.pathname);
    }
  }, [shouldRefresh, location.pathname]);
  if (loading) {
    return (
      <div className="py-16 text-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="mt-4 text-gray-600">Loading services...</p>
      </div>
    );
  }
  return (
    <div className="py-16">
      {services.length === 0 ? (
        <div className="flex items-center justify-center  p-8 bg-white border border-gray-200 rounded-xl shadow-lg mx-auto max-w-2xl">
          <div className="text-center p-8">
            <div className="flex justify-center text-5xl">
              <FaSearch />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-800 mt-6 mb-3">
              No Services Found
            </h2>
            <p className="text-gray-500 text-lg max-w-md mx-auto">
              Sorry! We couldn't find any services matching your current filter
              or search criteria.
            </p>

            <Link to="/home">
              <button className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition duration-300">
                Go to Home
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllServices;
