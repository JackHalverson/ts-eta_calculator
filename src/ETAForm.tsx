import React, { useState } from 'react';

type ETAProps = {
  distance: number;
  speed: number;
};

const calculateETA = ({ distance, speed }: ETAProps): string => {
  if (speed <= 0) return "Invalid speed";
  else if (speed >= 150) return "Slow Down Speedy!"
  const time = distance / speed;
  const hours = Math.floor(time);
  const minutes = Math.floor((time - hours) * 60);
  return `${hours} hours and ${minutes} minutes`;
};

const ETAForm: React.FC = () => {
  const [distance, setDistance] = useState<number>();
  const [speed, setSpeed] = useState<number>();
  const [eta, setETA] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const etaResult = calculateETA({ distance, speed });
    setETA(etaResult);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="distance">Distance (Mi):</label>
          <input
            type="number"
            id="distance"
            value={distance != undefined ? distance : ""}
            onChange={(e) => setDistance(Number(e.target.valueAsNumber))}
          />
        </div>
        <div>
          <label htmlFor="speed">Speed (MPH):</label>
          <input
            type="number"
            id="speed"
            value={speed != undefined ? speed : ""}
            onChange={(e) => setSpeed(Number(e.target.valueAsNumber))}
          />
        </div>
        <button type="submit">Calculate ETA</button>
      </form>
      {eta && <p>Estimated Time of Arrival: {eta}</p>}
    </div>
  );
};

export default ETAForm;
