
import React from 'react';
import  './sign.less';

class Signin extends React.Component{

    displayName = 'app-signin';

    /*
     *   main-card app-feature  [brand-cover + appbrand]
     *             app-container [account-input + account-pwd + error-block + submit]
     * 
     */

    renderFeature(){
        return React.createElement(
            'div',
            {className: 'app-brand'},
            React.createElement(
                'h1',
                {className: 'brand'},
                'QTeam'
            )
        )
    };
    renderContainer(){
        return React.createElement(
            'div',
            {className: 'app-container'},
            this.renderAccount(), this.renderPassword(),this.renderSubmit()
        )
    };
    renderAccount(){
        return React.createElement(
            'div',
            { className: 'account' },
            <input type= 'text' placeholder = '邮箱/手机号'></input>
        )
    };
    renderPassword(){
        return React.createElement(
            'div',
            { className: 'password' },
            <input type= 'password' placeholder = '密码'></input>
        )
    };
    renderSubmit(){
        return React.createElement(
            'div',
            { className: 'submit' },
            'Signin'
        )
    };

    render() {
        return React.createElement(
            'div',
            {
                className: 'main-card',
            }, this.renderFeature(),this.renderContainer()
        )
    }
}

export default Signin;