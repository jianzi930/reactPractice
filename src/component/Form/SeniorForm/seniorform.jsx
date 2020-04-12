import React from 'react';
//import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Calendar from './../../common/Calendar';
import EditTable from './EditTable';
import '../../../public/css/seniorForm.css';
class StoreAdmit extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false,
            text: ''
        };
    }
    handleSelect() {
        this.setState({
            show: !this.state.show
        });
    }
    handleLi(e) {
        let text = e.target.textContent;
        this.setState({
            text: text
        });
    }
    render() {
        return(
            <div className='col-input select-input' onClick={()=>this.handleSelect()}>
                <input placeholder={this.props.Placeholder} value={this.state.text} />
                <ul className={this.state.show? 'showBlock': ''}>
                    <li onClick={(e)=>this.handleLi(e)} className={this.state.text==='周茂茂'? 'active': ''}>周茂茂</li>
                    <li onClick={(e)=>this.handleLi(e)} className={this.state.text==='李矛末'? 'active': ''}>李矛末</li>
                </ul>
            </div>
        );
    }
    
}
class StoreType  extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false,
            text: ''
        };
    }
    handleSelect() {
        this.setState({
            show: !this.state.show
        });
    }
    handleLi(e) {
        let text = e.target.textContent;
        this.setState({
            text: text
        });
    }
    render() {
        return(
            <div className='col-input select-input' onClick={()=>this.handleSelect()}>
                <input placeholder={this.props.Placeholder} value={this.state.text} />
                <ul className={this.state.show? 'showBlock': ''}>
                    <li onClick={(e)=>this.handleLi(e)} className={this.state.text==='私密'? 'active': ''}>私密</li>
                    <li onClick={(e)=>this.handleLi(e)} className={this.state.text==='公开'? 'active': ''}>公开</li>
                </ul>
            </div>
        );
    }
}
export default class Index extends React.Component {
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
                                <NavLink to="/Page2" exact> 高级表单</NavLink>
                            </span>
                        </div>
                        <p>高级表单</p>
                        <p>高级表单常见于一次性输入和提交大批量数据的场景。</p>
                    </div>
                </div>
                <div className='main-content'>
                    <div className='content senior'>
                        <div className='store'>
                            <div>
                                <div className="title">仓库管理</div>
                                <div className="details">
                                    <div>
                                        <div className='col col-1'>
                                            <div className='block-label'><label>仓库名</label></div>
                                            <div className='col-input'>
                                                <input type='text' placeholder='请输入仓库名称' />
                                            </div>
                                        </div>
                                        <div className='col col-2'>
                                            <div className='block-label'><label>仓库域名</label></div>
                                            <div className='col-input'>
                                                <span>http://</span>
                                                <input placeholder='请输入' />
                                                <span>.com</span>
                                            </div>
                                        </div>
                                        <div className='col col-3'>
                                            <div className='block-label'><label>仓库管理员</label></div>
                                            <StoreAdmit Placeholder='请选择管理员' />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='col col-1'>
                                            <div className='block-label'><label>审批人</label></div>
                                            <StoreAdmit Placeholder='请选择审批员' />
                                        </div>
                                        <div className='col col-2'>
                                            <div className='block-label'><label>生效日期</label></div>
                                            <Calendar inputClass='col-input' />
                                        </div>
                                        
                                        <div className='col col-3'>
                                            <div className='block-label'><label>仓库类型</label></div>
                                            <StoreType Placeholder='请选择仓库类型' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='task'>
                            <div>
                                <div className="title">任务管理</div>
                                <div className="details">
                                    <div>
                                        <div className='col col-1'>
                                            <div className='block-label'><label>任务名</label></div>
                                            <div className='col-input'>
                                                <input type='text' placeholder='请输入' />
                                            </div>
                                        </div>
                                        <div className='col col-2'>
                                            <div className='block-label'><label>任务描述</label></div>
                                            <div className='col-input'>
                                                <input type='text' placeholder='请输入' />
                                            </div>
                                        </div>
                                        <div className='col col-3'>
                                            <div className='block-label'><label>执行人</label></div>
                                            <StoreAdmit Placeholder='请选择管理员' />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='col col-1'>
                                            <div className='block-label'><label>责任人</label></div>
                                            <StoreAdmit Placeholder='请选择审批员' />
                                        </div>
                                        <div className='col col-2'>
                                            <div className='block-label'><label>生效日期</label></div>
                                            <Calendar inputClass='col-input' only='true'/>
                                        </div>
                                        <div className='col col-3'>
                                            <div className='block-label'><label>任务类型</label></div>
                                            <StoreType Placeholder='请选择仓库类型' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='members'>
                            <div>
                                <div className="title">成员管理</div>
                                <div className="details">
                                    <EditTable />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='button'>
                    <button className='submit-btn'>提交</button>
                </div>
            </div>
            // </HashRouter>
		);
	}
}
