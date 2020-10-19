import * as React from 'react';
import { PureComponent } from 'react';
import '../../../styles/components/header/header.less';

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
        return <div className="sobey_tech_int_header">sobey_tech_int_header</div>;
    }
}

export default Header;
