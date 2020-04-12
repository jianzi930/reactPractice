import React from 'react';
//import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Calendar from '../../common/Calendar';
import '../../../public/css/basicForm.css';
class Index extends React.Component {
	constructor() {
		super();
		this.state = {
            radios: 'all',
            date:'0'
        };
	}
    handleRadio(radio) {
        this.setState({
            radios: radio
        });
    }
	render() {
		return (
            // <HashRouter>
			<div className='page-main'>
                <div className='main-header'>
                    <div>
                        <div>
                            <span>
                                <NavLink to="/Page2" exact>首页 </NavLink>
                            </span> /
                            <span>
                                <NavLink to="/Page2" exact> 表单页 </NavLink>
                            </span> /
                            <span>
                                <NavLink to="/Page2" exact> 基础表单</NavLink>
                            </span>
                        </div>
                        <p>基础表单</p>
                        <p>表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</p>
                    </div>
                </div>
                <div className='main-content'>
                    <div className='content'>
                        <div className='col col-a'>
                            <div className='inline-label'><label>标题：</label></div>
                            <div className='input'>
                                <input type='text' placeholder='给目标起个名字' id='name' />
                            </div>
                        </div>
                        <div className='col col-a'>
                            <div className='inline-label'><label>起止日期：</label></div>
                            <Calendar inputClass='input' />
                        </div>
                        <div className='col col-a'>
                            <div className='inline-label'><label>目标描述：</label></div>
                            <div className='input'>
                                <textarea placeholder='请输入你的阶段性工作目标' id='object' style={{minHeight: 88}}></textarea>
                            </div>
                        </div>
                        <div className='col col-a'>
                            <div className='inline-label'><label>衡量标准：</label></div>
                            <div className='input'>
                                <textarea placeholder='请输入衡量标准' id='measure' style={{minHeight: 88}}></textarea>
                            </div>
                        </div>
                        <div className='col col-a'>
                            <div className='inline-label'>
                                <label>客户</label>
                                <label>（选填）</label>：
                            </div>
                            <div className='input'>
                                <input type='text' placeholder='请描述你服务的客户，内部客户直接 @姓名／工号' id='client' />
                            </div>
                        </div>
                        <div className='col col-a'>
                            <div className='inline-label'>
                                <label>邀评人</label>
                                <label>（选填）</label>：
                            </div>
                            <div className='input'>
                                <input type='text' placeholder='请直接 @姓名／工号，最多可邀请 5 人' id='invites' />
                            </div>
                        </div>
                        <div className='col col-a'>
                            <div className='inline-label'>
                                <label>权重</label>
                                <label>（选填）</label>：
                            </div>
                            <div className='input rate'>
                                <input type='text' placeholder='请输入' />
                                <span>%</span>
                            </div>
                        </div>
                        <div className='col col-a'>
                            <div className='inline-label'><label>目标公开：</label></div>
                            <div className='radio'>
                                <div>
                                    <div>
                                        <label className={this.state.radios === 'all'? 'active': ''}>
                                            <span><span></span></span>
                                            <input type='radio' id='all-public' onClick={()=>this.handleRadio('all')} />
                                            公开
                                        </label>
                                        <label className={this.state.radios === 'some'? 'active': ''}>
                                            <span><span></span></span>
                                            <input type='radio' id='some-public' onClick={()=>this.handleRadio('some')} />
                                            部分
                                        </label>
                                        <label className={this.state.radios === 'no'? 'active': ''}>
                                            <span><span></span></span>
                                            <input type='radio' id='no-public' onClick={()=>this.handleRadio('no')} />
                                            不公开
                                        </label>
                                    </div>
                                    {this.state.radios === 'some'? <div><input type='text' placeholder='公开给' /></div>: ''}
                                    <span>客户、邀评人默认被分享</span>
                                </div>
                            </div>
                        </div>
                        <div className='buttons'>
                            <button className='submit-btn'>提交</button>
                            <button className='save-btn'>保存</button>
                        </div>
                    </div>
                </div>
            </div>
            // </HashRouter>
		);
	}
}

export default Index;