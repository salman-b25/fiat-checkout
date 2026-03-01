import { useState } from "react";
import SecurityFooter from "./SecurityFooter";
import cardIcon from "../assets/card number.svg";
import cvvIcon from "../assets/cvv.svg";
import card1 from "../assets/card 1.svg";
import card2 from "../assets/card 2.svg";


export default function PaymentForm({ onSuccess, onError }) {
    const [formData, setFormData] = useState({ cardholderName: "", cardNumber: "", expiryDate: "", cvv: "" });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        let { name, value } = e.target;

        // Card Number Formatter: Add space every 4 digits
        if (name === "cardNumber") {
            value = value.replace(/\D/g, "").substring(0, 16); // Remove non-digits
            value = value.match(/.{1,4}/g)?.join(" ") || ""; // Add spaces
        }

        // Expiry Date Formatter: Auto-insert "/" after MM
        if (name === "expiryDate") {
            value = value.replace(/\D/g, "").substring(0, 4); // Remove non-digits
            if (value.length > 2) {
                value = value.substring(0, 2) + "/" + value.substring(2);
            }
        }

        if (name === "cvv") {
            value = value.replace(/\D/g, "").substring(0, 3);
        }

        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let newErrors = {};
        const now = new Date();
        const currentYear = now.getFullYear() % 100; // e.g., 26
        const currentMonth = now.getMonth() + 1;

        if (!formData.cardholderName.trim()) {
            newErrors.cardholderName = "Cardholder name is required";
        }

        const cleanCardNumber = formData.cardNumber.replace(/\s/g, "");
        if (!/^\d{16}$/.test(cleanCardNumber)) {
            newErrors.cardNumber = "Enter a valid 16-digit card number";
        }

        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
            newErrors.expiryDate = "Use MM/YY format";
        }

        if (!/^\d{3}$/.test(formData.cvv)) {
            newErrors.cvv = "CVV must be 3 digits";
        }

        const expiryMatch = formData.expiryDate.match(/^(0[1-9]|1[0-2])\/(\d{2})$/);
        if (!expiryMatch) {
            newErrors.expiryDate = "Use MM/YY format";
        } else {
            const [_, expMonth, expYear] = expiryMatch.map(Number);
            if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
                newErrors.expiryDate = "Card has expired"; // Validates against current date
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const [isSuccess, setIsSuccess] = useState(false);
    const [orderDetails, setOrderDetails] = useState({ orderId: "", txnId: "" });
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            try {
                const response = await fetch("https://checkout-app1.free.beeceptor.com/payment", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    // Generate data and send it UP to the parent
                    const data = {
                        orderId: "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
                        txnId: "TXN-" + Math.floor(Math.random() * 1000000000)
                    };
                    onSuccess(data); // This triggers setView("SUCCESS") in CheckoutPage
                } else {
                    onError(); // This triggers setView("ERROR") in CheckoutPage
                }
            } catch (error) {
                onError();
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <form className="payment-form-container" onSubmit={handleSubmit}>
            <div className="payment-header-row">
                <p className="card-payment">Card Payment</p>
                <div className="payment-icons">
                    <img src={card2} alt="Card Type 1" />
                    <img src={card1} alt="Card Type 2" />
                </div>
            </div>

            <div className="payment-section">
                <div className="form-group">
                    <label>Cardholder Name</label>
                    <input
                        type="text"
                        name="cardholderName"
                        placeholder="Enter name on card"
                        value={formData.cardholderName}
                        onChange={handleInputChange}
                        className={errors.cardholderName ? "input-error" : ""}
                    />
                    {errors.cardholderName && <span className="error-text">{errors.cardholderName}</span>}
                </div>

                <div className="form-group">
                    <label>Card Number</label>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="cardNumber"
                            placeholder="0000 0000 0000 0000"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            className={errors.cardNumber ? "input-error" : ""}
                        />
                        <img src={cardIcon} className="input-icon" alt="card type" />
                    </div>
                    {errors.cardNumber && <span className="error-text">{errors.cardNumber}</span>}
                </div>

                <div className="row">
                    <div className="form-group">
                        <label>Expiry Date</label>
                        <input
                            type="text"
                            name="expiryDate"
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            className={errors.expiryDate ? "input-error" : ""}
                        />
                        {errors.expiryDate && <span className="error-text">{errors.expiryDate}</span>}
                    </div>

                    <div className="form-group">
                        <label>CVV</label>
                        <div className="input-wrapper2">
                            <input
                                type="password"
                                name="cvv"
                                placeholder="123"
                                value={formData.cvv}
                                onChange={handleInputChange}
                                className={errors.cvv ? "input-error" : ""}
                            />
                            <img src={cvvIcon} className="input-icon2" alt="help" />
                        </div>
                        {errors.cvv && <span className="error-text">{errors.cvv}</span>}
                    </div>
                </div>
            </div>
            <SecurityFooter />
            <div className="bottom-cta-container">
                <button
                    type="submit"
                    className={`pay-button ${isLoading ? "loading" : ""}`}
                    disabled={isLoading}
                >
                    {isLoading ? "Processing..." : "Pay Now • ₹14,900"}
                </button>
            </div>
        </form>
    );
}