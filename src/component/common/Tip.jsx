import React from 'react';
export default class Tip extends React.Component {
    constructor(){
        super();
        this.state={
        };
    }
    handleConfirm(action){
        this.props.onclick(action);
	}
    render(){
        return(
            <div>
                <div className={`tips ${this.props.tipShow? 'showBlock': 'hideBlock'}`}>
                    <div className='header'>
                        <h5>操作提示</h5>
                    </div>
                    <div className='tip'>
                        <p>确定删除吗?</p>
                    </div>
                    <div className='buttons'>
                        <button className='submit-btn' onClick={()=>this.handleConfirm('y')}>确认</button>
                        <button onClick={()=>this.handleConfirm('c')}>取消</button>
                    </div>
                </div>
                <div className={`mask ${this.props.tipShow? 'showBlock': 'hideBlock'}`}></div>
            </div>
        );
    }
}