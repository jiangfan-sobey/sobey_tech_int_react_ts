import React, { PureComponent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import '../../../styles/mainPages/homepage/homepage.less';
import homepage_banner_airplane from '../../../assets/homepage/homepage_banner_airplane.png';
import homepage_banner_interview from '../../../assets/homepage/homepage_banner_interview.png';
import homepage_banner_storehouse from '../../../assets/homepage/homepage_banner_storehouse.png';

const PrevIcon = (props: any) => {
    return (
        <svg
            className="icon"
            viewBox="0 0 1198 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="9980"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                d="M1086.53-5.345l-463.494 515.362 463.494 514.257-81.663 73.936-529.707-588.196 529.706-589.298 81.663 73.936z"
                p-id="9981"
            ></path>
            <path
                d="M691.456-5.345l-462.391 515.362 462.391 514.257-81.663 73.936-529.707-588.196 529.706-589.298 81.663 73.936z"
                p-id="9982"
            ></path>
        </svg>
    );
};

const NextIcon = (props: any) => {
    return (
        <svg
            className="icon"
            viewBox="0 0 1198 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1585"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                d="M97.46 1024.012l463.494-515.362-463.494-514.257 81.663-73.936 529.707 588.196-529.706 589.298-81.663-73.936z"
                p-id="1586"
            ></path>
            <path
                d="M492.534 1024.012l462.391-515.362-462.391-514.257 81.663-73.936 529.707 588.196-529.706 589.298-81.663-73.936z"
                p-id="1587"
            ></path>
        </svg>
    );
};

type MyProps = RouteComponentProps<any, any>;

interface MyState {
    test_data: boolean;
}

class Homepage extends PureComponent<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
        this.state = {
            test_data: false,
        };
    }

    public componentDidMount() {
        this.test_func();
    }

    private test_func = () => {
        console.log('test_func');
    };

    public render() {
        return (
            <div className="sobey_tech_int_homepage">
                <div
                    id="carouselExampleCaptions"
                    className="carousel slide tech_int_homepage_banner"
                    data-ride="carousel"
                >
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={homepage_banner_airplane} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="homepage_banner_title">International news experts</h5>
                                <p className="homepage_banner_description">
                                    Sobei has accumulated rich experience in the international market for nearly 15
                                    years. It has won many international awards from iabm and tvbeurope for many
                                    consecutive years. It has also obtained the certification of AWS media core
                                    competence.
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={homepage_banner_interview} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="homepage_banner_title">Media experts</h5>
                                <p className="homepage_banner_description">
                                    Sobei has dominated the field of professional media for a long time and has become a
                                    well deserved media expert.
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={homepage_banner_storehouse} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="homepage_banner_title">Video expert</h5>
                                <p className="homepage_banner_description">
                                    Based on the video technology of independent innovation, sobei transforms the deep
                                    understanding of professional media into the leading edge in the field of Pan media,
                                    empowers pan media, helps its industry break through the world, and becomes a true
                                    video expert.
                                </p>
                            </div>
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleCaptions"
                        role="button"
                        data-slide="prev"
                    >
                        <PrevIcon className="carousel_control_icon" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleCaptions"
                        role="button"
                        data-slide="next"
                    >
                        <NextIcon className="carousel_control_icon" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}
export default withRouter(Homepage);
