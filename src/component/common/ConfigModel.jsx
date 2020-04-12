import React from 'react';
import Calendar from './Calendar';
export default class ConfigModel extends React.Component {
    constructor(){
        super();
        this.state = {
            show: 'information',
            configDatas: {}
        };
    }
    handleStep(type) {
        let show = '';
        if(type === 'prev') {
            show = 'information';
        } else {
            show = 'configDate';
        }
        this.setState({
            show
        });
    }
    handleSave(action){
        let configDatas = {
            name: this.name.value,
            des: this.des.value,
            date: this.date.value
        };
        this.props.onclick(configDatas,action);
        this.date.value = '';
        this.setState({
            show: 'information'
        });
    }
    handleChange(e,type) {
        let {configDatas} = this.state;
        configDatas = Object.keys(configDatas).length>0? configDatas: this.props.data;
        configDatas[type] = e.target.value;
        this.setState({
            configDatas
        });
    }
    render(){
        const {configDatas, show} = this.state;
        let data = Object.keys(configDatas).length>0? configDatas: this.props.data;
        return(
            <div>
                <div className={`tips config-rule ${this.props.configShow? 'showBlock': 'hideBlock'}`}>
                    <div className='header'><h3>规则配置</h3></div>
                    <div className='tip'>
                        <div className='light'>
                            <p className='light-left'>
                                <img className={show === 'information'? 'showLine': 'hideLine'} src={require('../../public/img/1.png')}></img>
                                <img className={show === 'configDate'? 'showLine': 'hideLine'} src={require('../../public/img/done.png')}></img>
                                 基本信息
                            </p>
                            <p className={`line ${show === 'configDate'? 'active': ''}`}></p>
                            <p className='light-right'>
                                <img className={show === 'configDate'? 'showLine': 'hideLine'} src={require('../../public/img/2.png')}></img>
                                <img className={show === 'information'? 'showLine': 'hideLine'} src={require('../../public/img/2-h.png')}></img>
                                 设置日期
                            </p>
                        </div>
                        <div className={`information ${show === 'information'? 'showBlock': 'hideBlock'}`}>
                            <div className='col col-a'>
                                <div className='inline-label'><label><span>* </span>规则名称：</label></div>
                                <div className='input'>
                                    <input placeholder='请输入' value={data.name} onChange={(e)=>this.handleChange(e,'name')} type='text' ref={txt=>this.name = txt}/>
                                </div>
                            </div>
                            <div className='col col-a'>
                                <div className='inline-label'><label><span>* </span>规则描述：</label></div>
                                <div className='input'>
                                    <input placeholder='请输入' value={data.des} onChange={(e)=>this.handleChange(e,'des')} type='text' ref={txt=>this.des = txt}/>
                                </div>
                            </div>
                        </div>
                        <div className={`configDate ${show === 'configDate'? 'showBlock': 'hideBlock'}`}>
                            <div className='col col-a'>
                                <div className='inline-label'><label><span>* </span>开始日期：</label></div>
                                <Calendar inputClass='input' inputRef={txt=> this.date = txt} only='true' />
                            </div>
                            <div className='col col-a'>
                                <div className='inline-label'><label>调度周期：</label></div>
                                <div className='input'>
                                    <input placeholder='请输入' type='text' ref={txt=>this.input = txt}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='buttons'>
                        <button onClick={()=>this.handleStep('prev')} className={`prev ${show === 'configDate'? 'showLine': 'hideLine'}`}>上一步</button>
                        <button className={`submit-btn ${show === 'information'? 'showLine': 'hideLine'}`} onClick={()=>this.handleStep('next')}>下一步</button>
                        <button className={`submit-btn ${show === 'configDate'? 'showLine': 'hideLine'}`} onClick={()=>this.handleSave('y')}>完成</button>
                        <button onClick={()=>this.handleSave('c')}>取消</button>
                    </div>
                </div>
                <div className={`mask ${this.props.configShow? 'showBlock': 'hideBlock'}`}></div>
            </div>
        );
    }
}