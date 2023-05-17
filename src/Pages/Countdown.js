import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
	const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

	useEffect(() => {
	  const timer = setInterval(() => {
		setTimeLeft(prevTime => prevTime - 1);
	  }, 1000);
  
	  return () => {
		clearInterval(timer);
	  };
	}, []);
  
	const formatTime = time => {
	  const hours = Math.floor(time / 3600);
	  const minutes = Math.floor((time % 3600) / 60);
	  const seconds = time % 60;
  
	  return { hours, minutes, seconds };
	};
  
	const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div>
      <p class="card-text" id="tiles"><span id="hours">{hours}</span>:<span id="minutes">{minutes}</span>:<span id="seconds">{seconds}</span></p>
    </div>
  );
};

export default CountdownTimer;
