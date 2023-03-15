import Heading from "../Heading";
import SingleProduct from "./SingleProduct";

export default function BestSeller({products, addToBag}) {
    return(
        <div className="best_sellers">
            <div className="container">
                <div className="row">
                    <Heading title="Best Sellers" data-aos="fade-up"/>
                </div>

                <div className="row">
                    {products && 
                    products.slice(5,9).map((item,index) => {
                        return(
                            <div 
                            className="col-lg-3 col-sm-6"
                            key={index}
                            data-aos="zoom-in"
                            >
                            <SingleProduct 
                            productItem={item}
                            addToBag={addToBag}
                            />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}