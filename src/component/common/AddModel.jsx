import React from 'react';

export default class Confirm extends React.Component {
    constructor(){
        super();
        this.state={
            model: false
        };
    }
    handleSave(action){
        this.props.onclick(this.input.value,action);
        this.input.value = '';
    }
    render(){
        return(
            <div>
                <div className={`tips add-rule ${this.props.addShow? 'showBlock': 'hideBlock'}`}>
                    <div className='header'><h3>新建规则</h3></div>
                    <div className='tip'>
                        <div>
                            <label><span>* </span>描述：</label>
                            <input placeholder='请输入' type='text' ref={txt=>this.input = txt}/>
                        </div>
                    </div>
                    <div className='buttons'>
                        <button className='submit-btn' onClick={()=>this.handleSave('y')}>保存</button>
                        <button onClick={()=>this.handleSave('c')}>取消</button>
                    </div>
                </div>
                <div className={`mask ${this.props.addShow? 'showBlock': 'hideBlock'}`}></div>
            </div>
        );
    }
}