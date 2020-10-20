import * as React from 'react';
import { PureComponent } from 'react';
import '../../../styles/components/header/header.less';
import sobey_int_logo from '../../../assets/header/sobey_int_logo.png';

const search_icon = (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="bi bi-search"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
        />
        <path
            fillRule="evenodd"
            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
        />
    </svg>
);

interface MyState {
    login_name: string | boolean;
}

class Header extends PureComponent<any, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            login_name: 'local',
        };
    }

    public componentDidMount() {
        this.user_login();
    }

    private user_login = () => {
        console.log('user_login');
    };

    public render() {
        return (
            <header className="sobey_tech_int_header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light sobey_tech_int_nav">
                        <img className="navbar-brand tech_int_nav_logo" src={sobey_int_logo} />
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse tech_int_nav_list" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">
                                        Innovation discovery
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        International business
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Products & Solutions
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Future In Cloud
                                    </a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0 tech_int_nav_search">
                                <div className="input-group tech_int_nav_input_group my-2">
                                    <input
                                        type="text"
                                        className="form-control tech_int_nav_input"
                                        placeholder="username"
                                        aria-label="username"
                                        aria-describedby="basic-addon2"
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">
                                            {search_icon}
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
