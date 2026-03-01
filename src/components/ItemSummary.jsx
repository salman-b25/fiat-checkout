import headphonesImg from "../assets/Premium Wireless Headphones.svg";

export default function ItemSummary() {
    return (
        <div className="item-summary">
            <div className="item-image">
                <img src={headphonesImg} alt="Headphones" />
            </div>
            <div className="item-details">
                <p className="item-label">ITEM SUMMARY</p>
                <p className="item-name">Premium Wireless Headphones</p>
                <p className="item-price">₹14,900</p>
            </div>
        </div>
    );
}