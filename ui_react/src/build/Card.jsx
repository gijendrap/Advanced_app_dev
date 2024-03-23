import './Card.css';

const PaymentForm = () => (
  <div className="screen flex-center">
    <form className="popup flex p-lg">
      <div className="close-btn pointer flex-center p-sm">
        <i className="ai-cross"></i>
      </div>
      <div className="flex-fill flex-vertical">
        <div className="header flex-between flex-vertical-center">
          <div className="flex-vertical-center">
            <i className="ai-bitcoin-fill size-xl pr-sm f-main-color"></i>
            <span className="title">
              <strong>AceCoin</strong><span>Pay</span>
            </span>
          </div>
          <div className="timer" data-id="timer">
            <span>05</span><em>:</em><span>00</span>
          </div>
        </div>
        <div className="card-data flex-fill flex-vertical">
          <div className="flex-between flex-vertical-center">
            <div className="card-property-title">
              <strong>Card Number</strong>
              <span>Enter 16-digit card number on the card</span>
            </div>
            <div className="f-main-color pointer"><i className="ai-pencil"></i> Edit</div>
          </div>
          <div className="flex-between">
            <div className="card-number flex-vertical-center flex-fill">
              <div className="card-number-field flex-vertical-center flex-fill">
                <input className="numbers" type="number" min="1" max="9999" placeholder="0000" />-
                <input className="numbers" type="number" placeholder="0000" />-
                <input className="numbers" type="number" placeholder="0000" />-
                <input className="numbers" type="number" placeholder="0000" data-bound="carddigits_mock" data-def="0000" />
              </div>
              <i className="ai-circle-check-fill size-lg f-main-color"></i>
            </div>
          </div>
          <div className="flex-between">
            <div className="card-property-title">
              <strong>Expiry Date</strong>
              <span>Enter the expiration date of the card</span>
            </div>
            <div className="card-property-value flex-vertical-center">
              <div className="input-container half-width">
                <input className="numbers" data-bound="mm_mock" data-def="00" type="number" min="1" max="12" step="1" placeholder="MM" />
              </div>
              <span className="m-md">/</span>
              <div className="input-container half-width">
                <input className="numbers" data-bound="yy_mock" data-def="01" type="number" min="23" max="99" step="1" placeholder="YY" />
              </div>
            </div>
          </div>
          <div className="flex-between">
            <div className="card-property-title">
              <strong>CVC Number</strong>
              <span>Enter card verification code from the back of the card</span>
            </div>
            <div className="card-property-value">
              <div className="input-container">
                <input id="cvc" type="password" />
                <i id="cvc_toggler" data-target="cvc" className="ai-eye-open pointer"></i>
              </div>
            </div>
          </div>
          <div className="flex-between">
            <div className="card-property-title">
              <strong>Cardholder Name</strong>
              <span>Enter cardholder's name</span>
            </div>
            <div className="card-property-value">
              <div className="input-container">
                <input id="name" data-bound="name_mock" data-def="Mr. Cardholder" type="text" className="uppercase" placeholder="CARDHOLDER NAME" />
                <i className="ai-person"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="action flex-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Pay Now</button>
        </div>
      </div>
      <div className="sidebar flex-vertical">
        <div></div>
        <div className="purchase-section flex-fill flex-vertical">
          <div className="card-mockup flex-vertical">
            <div className="flex-fill flex-between">
              <i className="ai-bitcoin-fill size-xl f-secondary-color"></i>
              <i className="ai-wifi size-lg f-secondary-color"></i>
            </div>
            <div>
              <div id="name_mock" className="size-md pb-sm uppercase ellipsis">mr. Cardholder</div>
              <div className="size-md pb-md">
                <strong>
                  <span className="pr-sm">&#x2022;&#x2022;&#x2022;&#x2022;</span>
                  <span id="carddigits_mock">0000</span>
                </strong>
              </div>
              <div className="flex-between flex-vertical-center">
                <strong className="size-md">
                  <span id="mm_mock">00</span>/<span id="yy_mock">01</span>
                </strong>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
                  <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z" />
                  <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z" />
                  <path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z" />
                </svg>
              </div>
            </div>
          </div>
          <ul className="purchase-props">
            <li className="flex-between">
              <span>Company</span>
              <strong>Apple</strong>
            </li>
            <li className="flex-between">
              <span>Order number</span>
              <strong>429252965</strong>
            </li>
            <li className="flex-between">
              <span>Product</span>
              <strong>MacBook Air</strong>
            </li>
            <li className="flex-between">
              <span>VAT (20%)</span>
              <strong>$100.00</strong>
</li>
</ul>
</div>
<div className="separation-line"></div>
<div className="total-section flex-between flex-vertical-center">
<div className="flex-fill flex-vertical">
<div className="total-label f-secondary-color">You have to Pay</div>
<div>
<strong>549</strong>
<small>.99 <span className="f-secondary-color">USD</span></small>
</div>
</div>
<i className="ai-coin size-lg"></i>
</div>
</div>
</form>

  </div>
);
export default PaymentForm;
