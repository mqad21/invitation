import React from 'react';

function GiftInformation({ accountNumber, accountName, logo }) {

    const [text, setText] = React.useState('Salin');

    const copyToClipboard = () => {
        const cleanNumber = accountNumber.replace(/-/g, '');
        navigator.clipboard.writeText(cleanNumber);
        setText('✅');
        setTimeout(() => {
            setText('Salin');
        }, 2000);
    }

    return (
        <div className="row glassmorphism mb-2 py-2">
            <div className="col-2 pr-0 my-auto">
                <img width="100%" src={logo} alt="Logo"></img>
            </div>
            <div className="account col-7 my-auto">
                <h3>{accountNumber}</h3>
                <p>{accountName}</p>
            </div>
            <div className="col-3 my-auto">
                <button onClick={copyToClipboard} className="btn btn-outline btn-primary btn-copy w-100">
                    {text}
                </button>
            </div>
        </div>
    )
}

export default GiftInformation;