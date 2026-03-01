export default function SuccessPage({ details }) {
    return (
        <div className="checkout-page">
            <div className="success-container">
                <div className="success-icon-circle"><span>✓</span></div>
                <h2>Payment Successful!</h2>
                <p>Thank you for your purchase. Your order has been placed.</p>
                <div className="order-info-box">
                    <p><strong>Order ID:</strong> {details.orderId}</p>
                    <p><strong>Transaction ID:</strong> {details.txnId}</p>
                </div>
                <button className="pay-button" onClick={() => window.location.reload()}>
                    Back to Store
                </button>
            </div>
        </div>
    );
}