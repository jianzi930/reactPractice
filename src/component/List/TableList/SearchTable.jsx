import React from 'react';
// const rows = React.createContext();
class SearchTableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editKey: []
        };
    }
    handleCheck(key) {
        this.props.checkbox(key);
    }
    handleConfig(key) {
        this.props.config(key);
    }
    render() {
        const {datas} = this.props;
        return(
            <tbody>
            {datas.map((data,key)=>(
                        <tr key={key}>
                            <td onClick={()=>this.handleCheck(key)}><label className={`checkbox ${data.checkbox? 'active': ''}`}></label><input type='checkbox' /></td>
                            <td>{data.name}</td>
                            <td>{data.des}</td>
                            <td>{data.number}万</td>
                            <td>{data.state}</td>
                            <td>{data.date}</td>
                            <td>
                                <a className='delete' onClick={()=>this.handleConfig(key)}>配置 </a>
                                |
                                <a className='delete' onClick={()=>this.handleDelete(key)}> 订阅警报</a>
                            </td>
                        </tr>
                    )
                )
            }
            </tbody>
        );
    }
}

export default class SearchTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            addKey: [],
        };
    }
    handleSort(type) {
        this.props.sortFun(type);
    }
    handleCheck(key) {
        this.props.checkbox(key);
    }
    render(){
        const {currentDatas,checkboxall,sort} = this.props.datas;
        return(
            <div>
                <table className='search-table'>
                    <thead>
                        <tr>
                            <th onClick={()=>this.handleCheck('all')}><label className={`checkbox ${checkboxall? 'active': ''}`}></label><input type='checkbox' /></th>
                            <th>规则名称</th>
                            <th>描述</th>
                            <th onClick={()=>this.handleSort('number')} className={`sortRow ${sort === -1? 'descend': sort === 1? 'ascend': ''}`}>服务调用次数</th>
                            <th>状态</th>
                            <th>上次调度时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <SearchTableRow datas={currentDatas} checkbox={(key)=>this.handleCheck(key)} config={(key)=>this.props.config(key)} />
                </table>
            </div>
        );
    }
}