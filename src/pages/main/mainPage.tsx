import React, { PureComponent } from 'react';
import Header from '../components/header/header';
import { RouteComponentProps, withRouter } from 'react-router';

type MyProps = RouteComponentProps<any, any>;

interface MyState {
    token_loaded: boolean;
}

class MainPage extends PureComponent<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
        this.state = {
            token_loaded: false,
        };
    }

    public componentDidMount() {
        this.request_token();
    }

    private request_token = () => {
        console.log('request_token');
    };

    public render() {
        return (
            <div className="sobey_tech_int_body">
                <Header />
                <div className="sobey_tech_int_content">sobey_tech_int_content</div>
            </div>
        );
    }
}
export default withRouter(MainPage);
