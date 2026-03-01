export default function ErrorPage({ onRetry }) {
    return (
        <div className="checkout-page">
            <div className="success-container error-view">
                <div className="error-icon-circle"><span>!</span></div>
                <h2>Payment Failed</h2>
                <p>We couldn't process your transaction. Please check your details.</p>
                <button className="pay-button retry-button" onClick={onRetry}>
                    Try Again
                </button>
            </div>
        </div>
    );
}