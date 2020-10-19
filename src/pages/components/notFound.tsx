import * as React from 'react';
import { Empty } from 'antd';

class NotFound extends React.Component {
    public render() {
        return (
            <div className="app-main-content-ctCloud page-404">
                <h1 style={{ height: '200px', lineHeight: '200px', width: '100%', textAlign: 'center' }}>404</h1>
                <Empty />
            </div>
        );
    }
}

export default NotFound;
