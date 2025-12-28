
import React, { useState, useEffect } from 'react';
import Loader from '../components/AURA_Loader'; // <-- import your loader here

const TeamAura = () => {

  const [loading, setLoading] = useState(true);

  // Simulate loading effect (2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white">
      
      {/* Show Loader first */}
      {loading ? (
        <Loader />  // <-- your Loader component
      ) : (
        <div className="p-6">
          <h1 className="text-3xl font-bold">Team Aura</h1>
          <p className="mt-4 text-gray-300">Welcome to the Team Aura page.</p>
        </div>
      )}

    </div>
  );
};

export default TeamAura;
