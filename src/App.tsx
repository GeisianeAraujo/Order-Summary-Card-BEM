import { Hero, Song, BackgroundDesktop } from "./assets/images";
import "./styles.scss";

export default function App() {
  return (
    <div className="c-app">
      <img src={BackgroundDesktop} alt="Background" className="c-app-bg" />
      <section className="c-card">
        <div className="c-card__image">
          <img src={Hero} alt="song" />
        </div>
        <div className="c-card__content">
          <h2 className="c-card__title">Order Summary</h2>
          <span className="c-card__description">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </span>
          <div className="c-plan">
            <div className="c-plan__info">
              <div className="c-plan__icon">
                <img src={Song} alt="Icon" />
              </div>
              <div className="c-plan__description">
                <h4>Annual Plan</h4>
                <span>$59.99/year</span>
              </div>
            </div>
            <a className="c-plan__link" href="/">
              Change
            </a>
          </div>
          <button className="c-button__payment">Proceed to Payment</button>
          <button className="c-button__cancel">Cancel Order</button>
        </div>
      </section>
    </div>
  );
}
