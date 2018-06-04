import React from 'react';
import { connect } from 'dva';
import "./login.css"
class Login extends React.Component {
    render () {
        const {defaultName} = this.props;
        return (
            <div>
                <div className="topbanner">
                    <div id="tip"></div>
                    <div className="open-app" style={{display:"none"}}>
                        <div className="app-logo"></div>
                        <h2>用 Teambition App 打开</h2>
                        <a href="" className="btn btn-primary link-to-app pull-right">打开</a>
                    </div>
                    <div className="poswrap">
                        <a className="brand" href="http://www.teambition.com/" ><h1>Teambition</h1></a>
                    </div>
                </div>

                <div className="brand-third google-auth" style={{display:"none"}}>
                  <span className="tb-logo"></span>
                  <span className="third-logo"></span>
                </div>

                <div className="form-unit">
                    <form className="auth-form form-horizontal tb-auth">
                        <input type="hidden" name="phone" value=""/>
                        <div className="form-field">
                            <input type="text" placeholder="邮箱/手机号"name="email" value="" className="form-control email" required />
                            <span className="icon icon-circle-error-o clean-content user-name" data-gta="{action:'clear input content', control: 'Input Box Icon', method:'click', page:'Sign In Page'}"></span>
                        </div>

                        <div className="form-field">
                            <input type="password" placeholder="密码" name="password" className="form-control password" value="" required />
                            <span className="icon icon-circle-error-o clean-content pwd" data-gta="{action:'clear input content', control: 'Input Box Icon', method:'click', page:'Sign In Page'}"></span>
                            <span className="icon icon-eye switchViewPasswords"></span>
                        </div>

                        <div className="form-field forgot-password-box">
                            <a className="forgot-password" href="/forgot?" data-gta="{action: 'forget password', control: 'reset password', segment: 'teambition account'}">忘记密码？</a>
                        </div>

                        <div className="validation"></div>
                      
                        <button type="submit" className="btn btn-primary anim-blue-all" data-gta="{action: 'enter project page', segment: 'teambition account'}" data-label="login-direct">
                            登 录<span className="icon icon-circle-right2"></span>
                        </button>

                        <div className="horizontal-line"></div>
                        <div className="third-auth">
                            <a href="/weixin/login" className="btn btn-primary wechat"  data-gta="{action: 'log in with third party account', category: 'wechat', segment: 'third party account'}">
                              <span className="icon icon-wechat"></span>
                              <span className="text">使用 微信 登录</span>
                            </a>
                        </div>
                        
                        <div className="tb-auth">
                            <a href="/login/third?" className="anim-light-grey" data-gta="{action: 'log in with third party account', segment: 'third party account'}">
                                <span className="text">第三方帐号登录</span>
                                <span className="icon icon-circle-right2"></span>
                            </a>
                        </div>
                      
                        <div className="info-field">
                            
                            还没有帐号？
                            <a href="/signup?" className="" data-gta="{action: 'enter sign up page', segment: 'teambition account'}">注册新帐号</a>
                            
                        </div>
                    </form>
                </div>
            </div>    
        )
    }
}
function mapStateToProps(state) {
    const { _targetId } = state.im;
    return  { _targetId };
}
export default connect(mapStateToProps)(Login);