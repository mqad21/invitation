import React from 'react';
import QRCode from 'react-qr-code';
import { object } from 'prop-types';
import { Link } from 'gatsby';

import { styWrapper } from './styles';

function TicketData({ guest, configData }) {
  return (
    <div css={styWrapper}>
      <div className="container">
        <div className="ticket">
          <div id="qrcode">
            <QRCode value={guest.code} size={250} />
          </div>
        </div>
        <div className="details">
          <div className="tinfo">Nama</div>
          <div className="tdata name">{guest.name}</div>
          <div className="tinfo">Keterangan</div>
          <div className="tdata">{guest.desc}</div>
          <div className="tinfo">Syukuran Pernikahan / Shift</div>
          <div className="tdata">
            {`${configData.shiftType?.[guest.shift]} / ${guest.shift}` || '11.00 WIB - 13.00 WIB'}
          </div>
          {/* attendance */}
          {guest.isAttended ? (
            <>
              <div className="tinfo">Sudah hadir pada</div>
              <div className="tdata">
                <span className="badge badge-success">{guest.attendedAt}</span>
              </div>
            </>
          ) : null}
          {/** souvenir */}
          {guest.isExchanged ? (
            <>
              <div className="tinfo">Sudah menukarkan souvenir pada</div>
              <div className="tdata">
                <span className="badge badge-success">{guest.exchangedAt}</span>
              </div>
            </>
          ) : null}
          {/* Additional info */}
          <div className="tinfo">Penting</div>
          <div className="tdata additional">
            <ul style={{ paddingLeft: '16px' }}>
              <li>
                {`Setiap tamu yang hadir wajib menunjukkan QRCode ini sebagai pengganti buku tamu untuk untuk meminimalisir kontak fisik melalui pena.`}
              </li>
              <li style={{ textTransform: 'uppercase' }}>
                Dalam rangka mematuhi protokol kesehatan,
                <span style={{ color: '#FC94AF', textTransform: 'uppercase' }}>
                  {` 1 undangan hanya berlaku untuk 2 orang tamu`}
                </span>
              </li>
            </ul>
            <br />
          </div>
        </div>
      </div>
      <Link to={`/?type=invitation&to=${guest.name}&code=${guest.code}`}>
        <button className="btn primary">{`< Kembali ke Homepage`}</button>
      </Link>
    </div>
  );
}

TicketData.propTypes = {
  guest: object,
  configData: object,
};

TicketData.defaultProps = {
  guest: {},
  configData: {},
};

export default TicketData;
