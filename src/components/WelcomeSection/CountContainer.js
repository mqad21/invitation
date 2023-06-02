import React from 'react';
import useDateCountdown from '@/hooks/useDateCountdown';
import CountItem from './CountItem';
import ButtonLive from '../WeddingSection/ButtonLive';
import { styMargin } from './styles';

function CountContainer() {
  const { days, hours, minutes, seconds, timeHasRunOut, isEventOver } = useDateCountdown();

  if (timeHasRunOut)
    return (
      <>
        <div className="row">
          <div className="col-md-12" style={{ fontSize: '20px' }}>
            {!isEventOver && "ACARA SEDANG BERLANGSUNG"}
            {isEventOver && "ACARA TELAH BERAKHIR"}
            {isEventOver &&
              <div className='mb-4'>
                <p className='text-center mb-4 m-auto'>Terima kasih atas kehadiran dan doa yang telah diberikan. Semoga Allah SWT membalas kebaikan Bapak/Ibu/Saudara/i sekalian.</p>
              </div>
            }
          </div>
        </div>
        {!isEventOver &&
          <ButtonLive />
        }
      </>
    );

  return (
    <div className="col-md-12" css={styMargin('0 0 32px 0')}>
      <CountItem text="Hari" number={days} />
      <CountItem text="Jam" number={hours} />
      <CountItem text="Menit" number={minutes} />
      <CountItem text="Detik" number={seconds} />
    </div>
  );
}

export default CountContainer;
