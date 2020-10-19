import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { ConfigProvider } from 'antd';
import { HashRouter, Route, Switch } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import en_US from 'antd/lib/locale-provider/en_US';

import store from './redux/index';
import { Provider } from 'react-redux';

import './styles/public/basicStyleInit.less';
import './styles/public/sobeyTechRoot.less';
import NotFound from './pages/components/notFound';
import MainPage from './pages/main/mainPage';

let antdLocale;
let lang = navigator.language;
lang = lang.substr(0, 2);

if (!lang || lang === 'zh') {
    moment.locale('zh-cn');
    antdLocale = zh_CN;
} else {
    antdLocale = en_US;
}

const contentEle = (
    <Switch>
        <Route path="/" name="mainPage" component={MainPage} />
        <Route component={NotFound} />
    </Switch>
);

ReactDOM.render(
    <HashRouter>
        <ConfigProvider locale={antdLocale}>
            <Provider store={store}>{contentEle}</Provider>
        </ConfigProvider>
    </HashRouter>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
