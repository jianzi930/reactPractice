import React from 'react';
//import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SearchTable from './SearchTable';
import '../../../public/css/tablelist.css';
import Tip from '../../common/Tip';
import AddModel from '../../common/AddModel';
import ConfigModel from '../../common/ConfigModel';
import '../../common/Date';
let datas = [
    {
        key: 0,
        checkbox: false,
        name: 'TradeCode 0',
        des: '这是一段描述',
        number: '754',
        state: '关闭',
        date: '2018-07-01'
    },
    {
        key: 1,
        checkbox: false,
        name: 'TradeCode 1',
        des: '这是一段描述',
        number: '253',
        state: '运行中',
        date: '2017-07-02'
    },
    {
        key: 2,
        checkbox: false,
        name: 'TradeCode 2',
        des: '这是一段描述',
        number: '651',
        state: '运行中',
        date: '2015-06-03'
    },
    {
        key: 3,
        checkbox: false,
        name: 'TradeCode 3',
        des: '这是一段描述',
        number: '737',
        state: '关闭',
        date: '2017-05-01'
    },
    {
        key: 4,
        checkbox: false,
        name: 'TradeCode 4',
        des: '这是一段描述',
        number: '1154',
        state: '运行中',
        date: '2017-03-01'
    },
    {
        key: 5,
        checkbox: false,
        name: 'TradeCode 5',
        des: '这是一段描述',
        number: '764',
        state: '关闭',
        date: '2019-07-01'
    },
    {
        key: 6,
        checkbox: false,
        name: 'TradeCode 6',
        des: '这是一段描述',
        number: '254',
        state: '运行中',
        date: '2018-07-04'
    },
    {
        key: 7,
        checkbox: false,
        name: 'TradeCode 7',
        des: '这是一段描述',
        number: '744',
        state: '关闭',
        date: '2017-10-01'
    }
];
export default class Index extends React.Component {
	constructor() {
		super();
		this.state = {
            currentDatas: JSON.parse(JSON.stringify(datas)),
            initLength: 8,
            checkboxall: false,
            configing: 0,
            tipShow: false,
            addShow: false,
            deleteShow: false,
            sort: 0 //小于0，升序排列
        };
	}
    handleSearch(what) {
        let {currentDatas} = this.state;
        if (what === 'reset') {
            this.searchRule.value = '';
            this.searchStatus.value = '全部';
        }
        let searchRule = this.searchRule.value;
        let searchStatus = this.searchStatus.value === '全部'? '': this.searchStatus.value;
        currentDatas = [];
        datas.map( data => {
            if (data.name.includes(searchRule) && data.state.includes(searchStatus)) {
                currentDatas.push(data);
            }
        });
        this.setState({
            currentDatas,
            sort: 0
        });
    }
    compare(type) {
        let {sort} = this.state;
        sort = sort === 0? 1: -sort;
        this.setState({
            sort
        });
        return function(a,b) {
            let newA = a[type];
            let newB = b[type];
            return (newA - newB)*sort;
        };
    }
    handleSort(type) {
        let {currentDatas} = this.state;
        currentDatas.sort(this.compare(type));
        this.setState({
            currentDatas
        });
    }
    handleCheckbox(key) {
        let checkarr = 0;
        let {currentDatas, checkboxall, deleteShow} = this.state;
        if (key === 'all') {
            for (let i=0;i<currentDatas.length;i++) {
                currentDatas[i]['checkbox'] = !checkboxall;
            }
            checkarr = checkboxall === false? currentDatas.length: 0;
        } else {
            currentDatas[key]['checkbox'] = !currentDatas[key]['checkbox'];
            currentDatas.map(data=>{
                data.checkbox === true? checkarr++: '';
            });
        }
        checkarr === currentDatas.length? checkboxall = true: checkboxall = false;
        deleteShow = checkarr >0? true: false;
        this.setState({
            currentDatas,
            checkboxall,
            deleteShow
        });
    }
    handleAdd(txt,action) {
        let {currentDatas} = this.state;
        if(action === 'y') {
            let newData = {
                key: datas.length,
                checkbox: false,
                name: 'TradeCode ' + datas.length,
                des: txt,
                number: 754 + datas.length,
                state: '关闭',
                date: new Date().format('yyyy-MM-dd hh:mm:ss')
            };
            datas.unshift(newData);
            currentDatas.unshift(newData);
        }
        this.setState({
            currentDatas,
            addShow: false
        });
    }
    handleDelete(action){
        let {currentDatas} = this.state;
        let newDatas = JSON.parse(JSON.stringify(currentDatas));
        if(action === 'y') {
            currentDatas.map(data =>{
                if(data.checkbox === true){
                    newDatas = newDatas.filter(item => item.key !== data.key);
                    datas = datas.filter(item => item.key !== data.key);
                }
            });
        }
        this.setState({
            currentDatas: newDatas,
            tipShow: false,
            checkboxall: false,
			deleteShow: false
        });
    }
    handleConfig(key) {
        this.setState({
            configing: key,
            configShow: true
        });
    }
    handleConfigData(data,action) {
        let {configing,currentDatas} = this.state;
        if(action === 'y') {
            currentDatas.map((item,key)=>{
                if(key === configing){
                    currentDatas[key].name = data.name;
                    currentDatas[key].des = data.des;
                    currentDatas[key].date = data.date;
                }
                console.log(item);
            });
            this.setState({
                currentDatas,
                configing: 0,
                configShow: false
            });
        } else {
            this.setState({
                configShow: false
            });
        }
    }
	render() {
        let {currentDatas, tipShow, addShow, deleteShow, configShow, configing} = this.state;
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
                                <NavLink to="/Page2" exact> 列表页 </NavLink>
                            </span> /
                            <span>
                                <NavLink to="/Page2" exact> 查询表格</NavLink>
                            </span>
                        </div>
                        <p>查询表格</p>
                        <p>高级表单常见于一次性输入和提交大批量数据的场景。</p>
                    </div>
                </div>
                <div className='main-content'>
                    <div className='content table'>
                        <div className='searches'>
                            <div className='col col-n'>
                                <div className='inline-label'><label>规则名称：</label></div>
                                <div className='input'><input placeholder='请输入' ref={text => this.searchRule = text} /></div>
                            </div>
                            <div className='col col-n'>
                                <div className='inline-label'><label>使用状态：</label></div>
                                <div className='input'>
                                    <select ref={text => this.searchStatus = text} >
                                        <option valve=" ">全部</option>
                                        <option value='关闭'>关闭</option>
                                        <option value='运行中'>运行中</option>
                                    </select>
                                </div>
                            </div>
                            <div className='buttons col col-n'>
                                <button className='submit-btn' onClick={()=>this.handleSearch('search')}>查询</button>
                                <button onClick={()=>this.handleSearch('reset')}>重置</button>
                            </div>
                        </div>
                        <div className='options'>
                            <button className='submit-btn' onClick={()=>this.setState({addShow: !this.state.addShow})}>+ 新建</button>
                            <button className={deleteShow? 'showLine': 'hideLine'} onClick={()=>this.setState({tipShow: !this.state.tipShow})}>删除</button>
                        </div>
                        <SearchTable datas={this.state} sortFun={(type)=>this.handleSort(type)} checkbox={(key)=>this.handleCheckbox(key)} config={(key)=>this.handleConfig(key)} />
                    </div>
                </div>
                <Tip tipShow={tipShow} onclick={(action)=>this.handleDelete(action)}/>
                <AddModel addShow={addShow} onclick={(txt,action)=>this.handleAdd(txt,action)} />
                <ConfigModel data={currentDatas[configing]} configShow={configShow} onclick={(txt,action)=>this.handleConfigData(txt,action)} />
            </div>
            // </HashRouter>
		);
	}
}
