import React, { PureComponent } from 'react';
import { LoadingComponentProps } from 'react-loadable';
import { Spin } from 'antd';

class LoadingPage extends PureComponent<LoadingComponentProps, any> {
    public render() {
        return (
            <div className="msg_notice_loading_page" style={{ width: '100%', minHeight: '500px', textAlign: 'center' }}>
                <Spin size="large" className="loading_page_spin" style={{ marginTop: '45vh' }} />
            </div>
        );
    }
}

export default LoadingPage;
