import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import './index.css';

class Home extends React.Component{
    render(){
        return(
            <div id="page-wrapper">
                <PageTitle title="首页" />
                <div className="row">
                    home
                </div>
            </div>
        )
    }
}

export default Home;