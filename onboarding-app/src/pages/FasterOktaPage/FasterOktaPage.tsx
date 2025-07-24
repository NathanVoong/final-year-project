import "./styles/FasterOktaPage.css";
import OktaSettings from "../../assets/OktaSettings.png";
import OktaBiometric from "../../assets/OktaBiometric.png";

export default function FasterOktaPage() {
    return (
        <div>
            <section className="section">
                <h1>Setting up faster Okta verification</h1>
                <p>This is a guide on how to setup faster Okta fingerprint verification instead of mobile 2FA.</p>
                <ol>
                    <li>
                        On your <a href="https://clearscore.okta-emea.com/app/UserHome"
                                   target="_blank"
                                   rel="noopener noreferrer">Okta homepage</a>, click on your name at the top-left and click on Settings.
                        <div>
                            <div className="img-wrapper">
                                <img
                                    src={OktaSettings}
                                    alt='Okta account menu showing settings'
                                    className="okta-settings"
                                />
                            </div>
                        </div>
                    </li>
                    <li>
                        On the right panel <b>‘Security Methods’</b> scroll down until you find <b>‘Security Key or
                        Biometric Authenticator‘</b> and then set it up.
                        <div>
                            <div className="img-wrapper">
                                <img
                                    src={OktaBiometric}
                                    alt='Okta security methods panel highlighting biometric authenticator'
                                    className="okta-biometric"
                                />
                            </div>
                        </div>
                    </li>
                    <li>
                        Now instead of needing to authenticate Okta through your phone every time, it’ll be much faster just tapping your finger on the sensor.
                    </li>
                </ol>
            </section>
        </div>
    );
}
