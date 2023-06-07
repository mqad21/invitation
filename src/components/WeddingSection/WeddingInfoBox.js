import React from 'react';
import { string } from 'prop-types';
import { useInView, animated } from '@react-spring/web'

function WeddingInfoBox({ title, date, time, day, description, subdescription, link, fromLeft = true }) {

  const [ref1, animate1] = useInView(
    () => ({
      from: { opacity: 0, x: fromLeft ? -100 : 100 },
      to: { opacity: 1, x: 0 },
      config: {
        duration: 700,
        easing: (t) => t * (2 - t),
      },
      delay: 1000
    }),
    {
      once: true,
      rootMargin: '-40% 0%',
    }
  )

  return (
    <animated.div ref={ref1} style={animate1} className="col-md-6 col-sm-6 text-center mb-4 ">
      <div className="event-wrap glassmorphism">
        <h3>{title}</h3>

        <div className="event-col">
          <p className="text-center w-100 mb-0 day">{day}</p>
        </div>

        <div className="event-col">
          <p className="text-center w-100 mb-0 date">{date}</p>
        </div>

        {
          time && (
            <div className="event-col">
              <p className="text-center w-100 mb-0 time">{time}</p>
            </div>
          )
        }

        <div className="event-col">
          <div className='text-center w-100 place'>
            {description}<br/>
            <small>{subdescription}</small>
          </div>
        </div>
        {link && (
          <div className="row justify-center mt-4">
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm text-center py-1 d-flex align-items-center">
              <span className='icon-location mr-2'></span>
              Lokasi
            </a>
          </div>)}
      </div>
    </animated.div>
  );
}

export default WeddingInfoBox;
