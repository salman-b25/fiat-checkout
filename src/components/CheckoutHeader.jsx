import backIcon from "../assets/back-icon.svg";

export default function CheckoutHeader() {
    return (
        <header className="checkout-header">
            <button className="back-button" type="button">
                <img src={backIcon} alt="Back" />
            </button>
            <h2>Secure Checkout</h2>
            <div className="header-placeholder"></div>
        </header>
    );
}