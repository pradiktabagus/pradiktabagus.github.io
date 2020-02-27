/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'al-styles/layouts/home.scss';
export default function HomePage() {
  const [time, setTime] = useState(
    moment().format('dddd, MMM Do YY, h:mm:ss a'),
  );
  useEffect(() => {
    setInterval(() => {
      setTime(moment().format('dddd, MMM Do YY, h:mm:ss a'));
    }, 1000);
  });

  return (
    <div className="container">
      <h1 className="app">{time}</h1>
    </div>
  );
}
