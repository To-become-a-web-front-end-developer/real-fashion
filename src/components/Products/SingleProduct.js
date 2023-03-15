import jumTo from "../../modules/Navigation"

export default function SingleProduct({productItem,addToBag}) {
    return(
        <div className="product-item men">
            <div className="product discount product_filter"
                onClick={() => jumTo(`/fashion-cube/single-product/${productItem._id}`)}
            >
                <div className="product_image">
                    <img src={productItem.imagePath} alt="" className="img-fluid"></img>
                </div>
                <div className="favorite favorite_left">
                    <i className="far fa-heart"></i>
                </div>

                <div className="product_info">
                    <h6 className="product_name">
                        <div>{productItem.title}</div>
                    </h6>
                    <div className="product_price">
                         ₹ {productItem.price}
                        <span> ₹ {(parseFloat(productItem.price) + 30).toFixed(2)}</span>
                    </div>
                </div>

                <div
                className="red_button add_to_cart_button"
                onClick={() => addToBag(productItem._id)}
                >
                    <div style={{ color: "#ffffff" }}>add to cart</div>
                </div>
            </div>
        </div>
    )
}