import React, { PureComponent } from 'react';
import Header from '../components/header/header';
import { RouteComponentProps, withRouter } from 'react-router';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import ButtonsShowcase from './showcases/Buttons';
import ToastsShowcase from './showcases/Toasts';

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
                <div className="sobey_tech_int_content">
                    <Container className="p-3">
                        <Jumbotron>
                            <h1 className="header">Welcome To React-Bootstrap TypeScript Example</h1>
                        </Jumbotron>
                        <h2>Buttons</h2>
                        <ButtonsShowcase />
                        <h2>Toasts</h2>
                        <ToastsShowcase />
                    </Container>
                </div>
            </div>
        );
    }
}
export default withRouter(MainPage);
