import React, { PureComponent } from 'react';
import Header from '../components/header/header';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router';
import Loadable from 'react-loadable';
import LoadingPage from '../components/loadingPage';
import routesForAll from '../../routes/routesForAll';

type MyProps = RouteComponentProps<any, any>;

interface MyState {
    test_data: boolean;
}

class MainPage extends PureComponent<MyProps, MyState> {
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
            <div className="sobey_tech_int_body">
                <Header />
                <div className="sobey_tech_int_content">
                    <div className="msg_notification_main_page">
                        <Switch>
                            <Route
                                path={routesForAll.sobey_base_route}
                                exact
                                component={Loadable({
                                    loader: () => import('./homepage/homepage'),
                                    loading: LoadingPage,
                                })}
                            />
                            <Route
                                path={routesForAll.homepage}
                                exact
                                component={Loadable({
                                    loader: () => import('./homepage/homepage'),
                                    loading: LoadingPage,
                                })}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(MainPage);
