import React from 'react';
import { string, bool } from 'prop-types';
import { useInView, animated } from '@react-spring/web'

function StoryItem({ image, title, date, description, isInverted }) {

  const [ref1, animate1] = useInView(
    () => ({
      from: { opacity: 0, x: 100 },
      to: { opacity: 1, x: 0 },
      config: {
        duration: 700,
        easing: (t) => t * (2 - t),
      },
      delay: 500
    }),
    {
      once: true,
      rootMargin: '0% 0%',
    }
  )

  const [ref2, animate2] = useInView(
    () => ({
      from: { opacity: 0, x: -100 },
      to: { opacity: 1, x: 0 },
      config: {
        duration: 700,
        easing: (t) => t * (2 - t),
      },
      delay: 500
    }),
    {
      once: true,
      rootMargin: '100% 0%',
    }
  )

  return (
    <li className={isInverted && `timeline-inverted`}>
      <animated.div ref={ref1} className="timeline-badge" style={{ backgroundImage: `url(${image})`, ...animate1 }} />
      <animated.div ref={ref2} style={animate2} className="timeline-panel glassmorphism">
        <div className="timeline-heading">
          <h3 className="timeline-title">{title}</h3>
          <span className="date">{date}</span>
        </div>
        <div className="timeline-body">
          <p>{description}</p>
        </div>
      </animated.div>
    </li>
  );
}

StoryItem.propTypes = {
  image: string,
  title: string.isRequired,
  date: string.isRequired,
  description: string.isRequired,
  isInverted: bool.isRequired,
};

StoryItem.defaultProps = {
  image: '',
};

export default React.memo(StoryItem);
