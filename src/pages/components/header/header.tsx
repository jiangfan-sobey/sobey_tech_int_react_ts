import * as React from 'react';
import { PureComponent } from 'react';
import '../../../styles/components/header/header.less';
import sobey_int_logo from '../../../assets/header/sobey_int_logo.png';

const SearchIcon = (props: any) => {
    return (
        <svg
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1257"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                d="M943.657331 1007.657331l63.894564-63.894563c8.434926-8.434926 8.434926-21.930807 0-30.365733l-314.622735-314.622735-94.260297 94.260296 314.622735 314.622735c8.434926 8.434926 21.930807 8.434926 30.365733 0z"
                fill="#3C92CA"
                p-id="1258"
            ></path>
            <path
                d="M344.566722 141.390445c-112.184514 0-203.492586 91.308072-203.492587 203.492586 0 10.543657 8.645799 19.189456 19.189456 19.189457s19.189456-8.645799 19.189457-19.189457c0-91.097199 74.016474-165.113674 165.113674-165.113674 10.543657 0 19.189456-8.645799 19.189456-19.189456 0-10.75453-8.645799-19.189456-19.189456-19.189456z"
                fill=""
                p-id="1259"
            ></path>
            <path
                d="M706.425041 585.278418c-7.38056-7.38056-19.611203-7.38056-26.991763 0l-33.52883 33.528831-44.494234-44.494234c54.616145-60.942339 87.934102-141.495881 87.934102-229.640857 0-189.996705-154.570016-344.566722-344.566721-344.566721S0 154.675453 0 344.672158s154.570016 344.566722 344.566722 344.566722c88.144975 0 168.487644-33.317957 229.640856-87.934102l44.494234 44.494234-33.52883 33.52883c-3.584843 3.584843-5.693575 8.434926-5.693575 13.495881s2.108731 9.911038 5.693575 13.495882l299.228995 299.228995c11.808896 11.808896 27.413509 18.345964 44.072488 18.345963s32.263591-6.537068 44.072487-18.345963l33.107084-33.107084c11.808896-11.808896 18.345964-27.413509 18.345964-44.072488s-6.537068-32.263591-18.345964-44.072488L706.425041 585.278418zM38.378913 344.672158c0-168.90939 137.489292-306.398682 306.398682-306.398682s306.398682 137.489292 306.398682 306.398682-137.489292 306.398682-306.398682 306.398682-306.398682-137.489292-306.398682-306.398682z m940.28336 600.988468l-33.107084 33.107084c-4.639209 4.639209-10.543657 7.169687-17.080724 7.169687s-12.441516-2.530478-17.080725-7.169687l-285.733114-285.733114 67.268534-67.268533 285.733113 285.733113c4.639209 4.639209 7.169687 10.543657 7.169687 17.080725s-2.741351 12.652389-7.169687 17.080725z"
                fill=""
                p-id="1260"
            ></path>
        </svg>
    );
};

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
        this.mouseenter_title_show_dropmenu();
    }

    private mouseenter_title_show_dropmenu = () => {
        const drop_menu_title = document.getElementsByClassName('dropdown_menu_title');
        for (const key in drop_menu_title) {
            const title_item = drop_menu_title[key];
            if (title_item && 'object' === typeof title_item && 1 === title_item.nodeType) {
                let hide_menu_flag = false;
                title_item.addEventListener('mouseenter', () => {
                    hide_menu_flag = false;
                    const menu_ele = title_item.nextElementSibling;
                    if (menu_ele) {
                        menu_ele.className = 'dropdown-menu dropdown_menu_list show';
                        menu_ele.setAttribute('style', 'margin-top:2rem');
                        setTimeout(() => {
                            if (menu_ele) {
                                menu_ele.setAttribute('style', 'transition: margin-top 500ms ease;margin-top:0.8rem');
                            }
                        }, 10);

                        menu_ele.addEventListener('mouseenter', () => {
                            if (menu_ele) {
                                hide_menu_flag = false;
                                hide_menu_func();
                            }
                        });
                        menu_ele.addEventListener('mouseleave', () => {
                            if (menu_ele) {
                                hide_menu_flag = true;
                                hide_menu_func();
                            }
                        });
                    }
                    title_item.addEventListener('mouseleave', () => {
                        hide_menu_flag = true;
                        hide_menu_func();
                    });
                });
                const hide_menu_func = () => {
                    setTimeout(() => {
                        if (hide_menu_flag) {
                            if (title_item.nextElementSibling) {
                                title_item.nextElementSibling.className = 'dropdown-menu dropdown_menu_list';
                            }
                        }
                    }, 150);
                };
            }
        }
    };

    public render() {
        return (
            <header className="sobey_tech_int_header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light sobey_tech_int_nav">
                        <img className="navbar-brand tech_int_nav_logo" src={sobey_int_logo} />
                        <button
                            className="navbar-toggler collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
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
                                        className="nav-link dropdown-toggle dropdown_menu_title"
                                        href="#"
                                        id="tech_int_nav_list_pro_solu"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Products & Solutions
                                    </a>
                                    <div className="dropdown-menu dropdown_menu_list" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                        <p className="dropdown_arrow_up"></p>
                                        <p className="dropdown_arrow_up_border"></p>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle dropdown_menu_title"
                                        href="#"
                                        id="tech_int_nav_list_pro_solu"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Future In Cloud
                                    </a>
                                    <div className="dropdown-menu dropdown_menu_list" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">
                                            SAAS
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            LAAS
                                        </a>
                                        <p className="dropdown_arrow_up"></p>
                                        <p className="dropdown_arrow_up_border"></p>
                                    </div>
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
                                            <SearchIcon />
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
