import React from 'react';
import { string } from 'prop-types';

function WeddingInfoBox({ title, date, time, day, description, link}) {
  return (
    <div className="col-md-6 col-sm-6 text-center mb-4 ">
      <div className="event-wrap glassmorphism">
        <h3>{title}</h3>

        <div className="event-col">
          <p className="text-center w-100 mb-0 day">{day}</p>
        </div>

        <div className="event-col">
          <p className="text-center w-100 mb-0 date">{date}</p>
        </div>

        <div className="event-col">
          <p className="text-center w-100 mb-0 time">{time}</p>
        </div>

        {description && (
          <>
            <div className="event-col">
              <span className='text-center w-100 place' dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            <div className="row justify-center mt-4">
              <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-outline btn-sm text-center py-1 d-flex align-items-center"> 
              <span className='icon-location mr-2'></span>
              Lokasi
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

WeddingInfoBox.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  time: string.isRequired,
  day: string.isRequired,
  description: string.isRequired,
  link: string.isRequired,
};

export default React.memo(WeddingInfoBox);
