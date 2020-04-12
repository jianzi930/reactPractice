import React from 'react';
// const rows = React.createContext();
class EditTableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editKey: [],
            addKey: [],
            datas: [
                {
                    key: 0,
                    name: 'Tom',
                    number: '001',
                    department: 'London No. 1 Lake Park'
                },
                {
                    key: 1,
                    name: 'Mary',
                    number: '002',
                    department: 'London No. 2 Lake Park'
                },
                {
                    key: 2,
                    name: 'Lily',
                    number: '003',
                    department: 'London No. 3 Lake Park'
                }
            ],
            size: 2
        };
    }
    handleSave(key) {
        let {editKey, addKey} = this.state; //当前处于编辑状态的当前所有行
        editKey.splice(editKey.indexOf(key),1); //将当前行从编辑数组中删除
        addKey.splice(addKey.indexOf(key),1); //将当前行从编辑数组中删除
        this.setState({
            editKey,
            addKey
        });
        // this.props.reload(key); //调用父组件方法，更新父组件状态
    }
    handleEdit(key){
        let {editKey} = this.state;
        editKey.push(key); //将当前行加入编辑数组中
        this.setState({//通过更新editKey状态，重新渲染子组件，达到将输入与本value值绑定
            editKey
        });
    }
    handleChange(e,key,type){
        let datas = [...this.state.datas];
        this.setState({
            datas: datas.map(data => {
                if (data['key'] === key) {
                    data[type] = e.target.value;
                }
                return data;
            })
        });
    }
    handleDelete(key){
        let datas = [...this.state.datas];
        this.setState({
            datas: datas.filter(data => data.key !== key)
        });
    }
    UNSAFE_componentWillReceiveProps() {
        let {editKey, addKey, datas, size} = this.state;
        if(this.props.addKey) {
            editKey.push(size+1);
            addKey.push(size+1);
            datas.push({
                key: size+1,
                name: '',
                number: '',
                department: ''
            });
            this.setState({
                addKey,
                datas,
                size: size + 1
            });
        }
    }
    render() {
        const {editKey, addKey, datas} = this.state;        // const {addKey, datas} = this.props;
        // let mumbers = JSON.parse(localStorage.getItem('mumbers') || '[]');
        // mumbers = mumbers.length<1? datas: mumbers;
        return(
            <tbody>
            {datas.map((data, key)=>(
                <tr key={key}>
                <td>{editKey.includes(data.key)? (<input placeholder='成员姓名' value={data.name} onChange={(e)=>this.handleChange(e,data.key,'name')} ref={txt => this.name = txt} />): data.name}</td>
                <td>{editKey.includes(data.key)? (<input placeholder='工号' value={data.number} onChange={(e)=>this.handleChange(e,data.key,'number')} ref={txt => this.number = txt} />): data.number}</td>
                <td>{editKey.includes(data.key)? (<input placeholder='所属部门' value={data.department} onChange={(e)=>this.handleChange(e,data.key,'department')} ref={txt => this.department = txt} />): data.department}</td>
                <td>{editKey.includes(data.key)? (<a onClick={()=>this.handleSave(data.key)}>{addKey.includes(data.key)? '添加': '保存 '}</a>): (<a onClick={()=>this.handleEdit(data.key)}>编辑 </a>)}
                    |<a className='delete' onClick={()=>this.handleDelete(data.key)}> 删除</a>
                </td>
            </tr>
            ))}
            </tbody>
        );
    }
}

export default class EditTable extends React.Component {
    constructor(){
        super();
        this.state = {
            addKey: 1,
            // length: 3,
        };
    }
    // UNSAFE_componentWillMount() {
    //     this.reloadmum();
    // }
    // reloadmum(key) {
    //     let {datas, addKey} = this.state;
    //     let newDatas = JSON.parse(localStorage.getItem('mumbers') || '[]');
    //     newDatas = newDatas.length<1? datas: newDatas;
    //     localStorage.setItem('mumbers',JSON.stringify(newDatas));
    //     this.setState({
    //         datas: newDatas
    //     });
    //     if(key) { //将新添加的成员从增加数组中删除
    //         addKey.splice(addKey.indexOf(key),1);
    //         this.setState({
    //             addKey
    //         });
    //     }
    // }
    handleAdd() {
        // let datas = this.state.datas;
        // let addKey = this.state.addKey;
        // datas.push({
        //     key: datas.length,
        //     name: '',
        //     number: '',
        //     department: ''
        // });
        // localStorage.setItem('mumbers',JSON.stringify(datas));
        // addKey.push(datas.length-1);
        // this.setState({
        //     datas,
        //     addKey
        // });
        this.setState({
            addKey: 1
        });
    }
    render(){
        const addKey = this.state.addKey;
        // const datas = this.state.datas;
        return(
            <div>
                <table className='edit-table'>
                    <thead>
                        <tr>
                            <th>成员姓名</th>
                            <th>工号</th>
                            <th>所属部门</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <EditTableRow addKey={addKey} />
                </table>
                <div className='addMember' onClick={()=>this.handleAdd()}><p>+ 新增成员</p></div>
            </div>
        );
    }
}