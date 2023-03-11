import BannerImg1 from "../../assets/images/banner_1.jpg";
import BannerImg2 from "../../assets/images/banner_2.jpg";
import BannerImg3 from "../../assets/images/banner_3.jpg";

export default function CategoryBanner(props) {
    return(
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="banner_item align-items-center"
                            style={{
                                backgroundImage: `url(${BannerImg1})`
                            }}
                        ></div>
                        <div className="banner_category">
                            <a href="https://www.naver.com">women's</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="banner_item align-items-center"
                            style={{
                                backgroundImage: `url(${BannerImg2})`
                            }}
                        ></div>
                        <div className="banner_category">
                            <a href="https://www.naver.com">accessories's</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="banner_item align-items-center"
                            style={{
                                backgroundImage: `url(${BannerImg3})`
                            }}
                        ></div>
                        <div className="banner_category">
                            <a href="https://www.naver.com">men's</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}