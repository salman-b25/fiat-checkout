import { useState } from "react";
import SuccessPage from "../pages/SuccessPage";
import ErrorPage from "../pages/ErrorPage";
import CheckoutHeader from "./CheckoutHeader";
import ItemSummary from "./ItemSummary";
import PaymentForm from "./PaymentForm";
import "../styles/CheckoutHeader.css";
import "../styles/CheckoutPage.css";
import "../styles/Error.css";
import "../styles/ErrorScreen.css";
import "../styles/ItemSummary.css";
import "../styles/PaymentForm.css";
import "../styles/SecurityFooter.css";
import "../styles/SuccessScreen.css";

export default function CheckoutPage() {
    const [view, setView] = useState("FORM"); // FORM, SUCCESS, ERROR
    const [orderDetails, setOrderDetails] = useState({});

    if (view === "SUCCESS") return <SuccessPage details={orderDetails} />;
    if (view === "ERROR") return <ErrorPage onRetry={() => setView("FORM")} />;

    return (
        <div className="checkout-page">
            <CheckoutHeader />
            <ItemSummary />
            <PaymentForm
                onSuccess={(data) => { setOrderDetails(data); setView("SUCCESS"); }}
                onError={() => setView("ERROR")}
            />
        </div>
    );
}