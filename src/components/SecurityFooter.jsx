import lockIcon from "../assets/lockIcon.svg";

export default function SecurityFooter() {
    return (
        <div className="footer-container">
            <div className="security-info">
                <img src={lockIcon} className="lock-icon" alt="secure" />
                <p className="security-text">
                    YOUR PAYMENT IS SECURED WITH 256-BIT ENCRYPTION
                </p>
            </div>

            <p className="other-methods">Other Payment Methods &gt;</p>

            <p className="terms-text">
                By tapping Pay Now, you agree to our Terms of Service and Privacy Policy.
            </p>
        </div>
    );
}