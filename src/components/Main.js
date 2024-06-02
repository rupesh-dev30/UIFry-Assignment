import Button from "./Button";
import WatchedButton from "./WatchedButton";
import phone from "../assets/phone.png"
import flag from "../assets/flag.png"

export default function Main() {
  return (
    <main className="main">
      <section className="home section">
        <div className="home_container container grid">
          <div className="home_data">
            <h1 className="home_title">Make The Best Financial Decisions</h1>
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>

            <div className="home_button">
              <Button>Get Started -></Button>
              <WatchedButton />
            </div>
            <img className="home_flag" src={flag} alt="" />
          </div>
          <div className="home_phone">
            <img src={phone} alt="phone" />
          </div>
        </div>
      </section>
    </main>
  );
}
