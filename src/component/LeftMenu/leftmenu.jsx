import React, { Component } from 'react';
import {NavLink } from 'react-router-dom';
import './../../public/css/style.css';
// let datas = [];
export default class listmenus2 extends Component {
    constructor(props){
        super(props);
        this.state={
            listmenus:[
                {
                    name: 'Dashboard',
                    img: require('./../../public/img/dashboard.png'),
                    imgh: require('./../../public/img/dashboard-h.png'),
                    id: 1,
                    dropDown: true,
                    active: '1',
                    children: [
                        {
                            name: '工作台',
                            id: 1-1,
                            to: '/Dashboard/WorkDesk',
                            active: '1'
                        },
                        {
                            name: '分析页',
                            id: 1-2,
                            to: '/Dashboard/Analysis',
                            active: '0'
                        },
                        {
                            name: '监控页',
                            id: 1-3,
                            to: '/Dashboard/Monitor',
                            active: '0'
                        }
                    ]
                },
                {
                    name: '表单页',
                    img: require('./../../public/img/form.png'),
                    imgh: require('./../../public/img/form-h.png'),
                    id: 2,
                    dropDown: false,
                    active: '0',
                    children: [
                        {
                            name: '基础表单',
                            id: 2-1,
                            to: '/Form/BasicForm',
                            active: '0'
                        },
                        {
                            name: '分布表单',
                            id: 2-2,
                            to: '/form/StepForm',
                            active: '0'
                        },
                        {
                            name: '高级表单',
                            id: 2-3,
                            to: '/Form/SeniorForm',
                            active: '0'
                        }
                    ]
                },
                {
                    name: '列表页',
                    img: require('./../../public/img/list.png'),
                    imgh: require('./../../public/img/list-h.png'),
                    id: 3,
                    dropDown: false,
                    active: '0',
                    children: [
                        {
                            name: '搜索列表',
                            id: 3-1,
                            to: '/page1',
                            active: '0'
                        },
                        {
                            name: '查询表格',
                            id: 3-2,
                            to: '/List/TableList',
                            active: '0'
                        },
                        {
                            name: '标准列表',
                            id: 3-3,
                            to: '/page2',
                            active: '0'
                        }
                    ]
                },
                {
                    name: '详情页',
                    img: require('./../../public/img/detail.png'),
                    imgh: require('./../../public/img/detail-h.png'),
                    id: 4,
                    dropDown: false,
                    active: '0',
                    children: [
                        {
                            name: '基础表单',
                            id: 4-1,
                            to: '/page1',
                            active: '0'
                        },
                        {
                            name: '分布表单',
                            id: 4-2,
                            to: '/page1',
                            active: '0'
                        },
                        {
                            name: '高级表单',
                            id: 4-3,
                            to: '/page1',
                            active: '0'
                        }
                    ]
                },
                {
                    name: '结果页',
                    img: require('./../../public/img/outcome.png'),
                    imgh: require('./../../public/img/outcome-h.png'),
                    id: 5,
                    dropDown: false,
                    active: '0',
                    children: [
                        {
                            name: '基础表单',
                            id: 5-1,
                            to: '/page1',
                            active: '0'
                        },
                        {
                            name: '分布表单',
                            id: 5-2,
                            to: '/page1',
                            active: '0'
                        },
                        {
                            name: '高级表单',
                            id: 5-3,
                            to: '/page1',
                            active: '0'
                        }
                    ]
                },
                {
                    name: '异常页',
                    img: require('./../../public/img/error.png'),
                    imgh: require('./../../public/img/error-h.png'),
                    id: 6,
                    dropDown: false,
                    active: '0',
                    children: [
                        {
                            name: '基础表单',
                            id: 6-1,
                            to: '/page1',
                            active: '0'
                        },
                        {
                            name: '分布表单',
                            id: 6-2,
                            to: '/page1',
                            active: '0'
                        },
                        {
                            name: '高级表单',
                            id: 6-3,
                            to: '/page1',
                            active: '0'
                        }
                    ]
                },
                {
                    name: '个人页',
                    img: require('./../../public/img/user.png'),
                    imgh: require('./../../public/img/user-h.png'),
                    id: 7,
                    dropDown: false,
                    active: '0',
                    children: [
                        {
                            name: '基础表单',
                            id: 7-1,
                            to: '/page1',
                            active: '0'
                        },
                        {
                            name: '分布表单',
                            id: 7-2,
                            to: '/page1',
                            active: '0'
                        },
                        {
                            name: '高级表单',
                            id: 7-3,
                            to: '/page1',
                            active: '0'
                        }
                    ]
                },
                {
                    name: '编辑页',
                    img: require('./../../public/img/imgedit.png'),
                    imgh: require('./../../public/img/imgedit-h.png'),
                    id: 8,
                    dropDown: false,
                    active: '0',
                    children: [
                        {
                            name: '基础表单',
                            id: 8-1,
                            to: '/page1',
                            active: '0'
                        },
                        {
                            name: '分布表单',
                            id: 8-2,
                            to: '/page1',
                            active: '0'
                        },
                        {
                            name: '高级表单',
                            id: 8-3,
                            to: '/page1',
                            active: '0'
                        }
                    ]
                },
            ],
            active: [1,'1']
        };
    }
    UNSAFE_componentWillMount(){
        // let newlistmenus = JSON.parse(JSON.stringify(datas));
        let newlistmenus = JSON.parse(localStorage.getItem('lists') || '[]');
        newlistmenus = newlistmenus.length<1? this.state.listmenus: newlistmenus;
        this.setState({
            listmenus: newlistmenus
        });
    }
	handlePClick(listmenus,index) {
        let newlistmenus=listmenus.map(
            (list,key)=>{
                key === index?
                list.dropDown=!this.state.listmenus[index].dropDown:
                list.dropDown=false;
                return list;
            }
        );
        this.setState({
            listmenus: newlistmenus
        });
        // datas = JSON.parse(JSON.stringify(newlistmenus));
        localStorage.setItem('lists',JSON.stringify(newlistmenus));
    }
    handleLiClick(listmenus,index,indexchild) {
        this.setState({
            active: [index,'1']
        });
        let newlistmenus=listmenus.map(
            (list,key)=>{
                key === index? list.active='1': list.active='0';
                for(var j=0;j<3;j++) {
                    j === indexchild? list.children[j].active='1':
                    list.children[j].active='0';
                }
                return list;
            }
        );
        this.setState({
            listmenus: newlistmenus
        });
        // datas = JSON.parse(JSON.stringify(newlistmenus));
        localStorage.setItem('lists',JSON.stringify(newlistmenus));
    }
    render(){
        const {listmenus}=this.state;
        return (
            <ul className="list-menu">
                {listmenus.map((list,index)=>(
                    <li key={index} className={list.active==='1'?'active': ''}>
                        <p onClick={()=>this.handlePClick(listmenus,index)} className={list.dropDown? 'dropDown': ''}>
                            <img src={list.active==='0'?list.img:list.imgh} className={list.active==='0'? '': 'active'} />
                            {list.name}
                        </p>
                        <ul className={`sub-menu ${list.dropDown? 'dropDown': ''}`}>
                            {list.children.map((listchild,indexchild)=>(
                                <li key={listchild.id}>
                                    <NavLink to={listchild.to} onClick={()=>this.handleLiClick(listmenus,index,indexchild)} exact>
                                    {listchild.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        );
    }
}