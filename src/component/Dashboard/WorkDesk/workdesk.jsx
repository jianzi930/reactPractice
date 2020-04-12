import React from 'react';
//import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
class Index extends React.Component {
	constructor() {
		super();
		this.state = {
			active: '0'
        };
        this.handleMouseOver = this.handleMouseOver.bind(this);
	}
    handleMouseOver() {
        this.setState({active: '1'});
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
                                <NavLink to="/Page2" exact> Dashboard </NavLink>
                            </span>/
                                <NavLink to="/Page2" exact>工作台</NavLink>
                            <span>
                            </span>
                        </div>
                        <p>工作台</p>
                        <div>
                            <div className='header-left'>
                                <img src='https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png' />
                                <div>
                                    <p>早安，Serati Ma，祝你开心每一天！</p>
                                    <p>交互专家 |蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</p>
                                </div>
                            </div>
                            <div className='header-right'>
                                <div>
                                    <p>项目数</p>
                                    <p>56</p>
                                </div>
                                <div>
                                    <p>团队内排名</p>
                                    <p>8
                                    <span>/24</span></p>
                                </div>
                                <div>
                                    <p>项目访问</p>
                                    <p>2,223</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main-content'>
                    <div className='content-left'>
                        <div className="page-project page-card">
                        <div>
                            <div className="title">
                                <span>进行中的项目</span>
                                <span>
                                    <NavLink to="/Page2" exact>全部项目</NavLink>
                                </span>
                            </div>
                            <div>
                                <div className="project" onMouseOver={this.handleMouseOver} active={this.state.active}>
                                    <div>
                                        <img src='https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png' />
                                        <span>
                                            <NavLink to="/Page2" exact>Alipay</NavLink>
                                        </span>
                                        <p>那是一种内在的东西，他们到达不了，也无法触及的</p>
                                        <p>
                                            <span>
                                                <NavLink to="/Page2" exact>科学搬砖组</NavLink>
                                            </span>
                                            <span>26 分钟前</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="project" onMouseOver={this.handleMouseOver} active={this.state.active}>
                                    <div>
                                        <img src='https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png' />
                                        <span>
                                            <NavLink to="/Page2" exact>Angular</NavLink>
                                        </span>
                                        <p>希望是一个好东西，也许是最好的，好东西是不会消亡的</p>
                                        <p>
                                            <span>
                                                <NavLink to="/Page2" exact>全组都是吴彦祖</NavLink>
                                            </span>
                                            <span>2年前</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="project" onMouseOver={this.handleMouseOver} active={this.state.active}>
                                    <div>
                                        <img src='https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png' />
                                        <span>
                                            <NavLink to="/Page2" exact>Ant design</NavLink>
                                        </span>
                                        <p>城镇中有那么多的酒馆，她却偏偏走进了我的酒馆</p>
                                        <p>
                                            <span>
                                                <NavLink to="/Page2" exact>中二少女团</NavLink>
                                            </span>
                                            <span>26 分钟前</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="project" onMouseOver={this.handleMouseOver} active={this.state.active}>
                                    <div>
                                        <img src='https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png' />
                                        <span>
                                            <NavLink to="/Page2" exact>Ant design Pro</NavLink>
                                        </span>
                                        <p>那时候我只会想自己想要什么，从不想自己拥有什么</p>
                                        <p>
                                            <span>
                                                <NavLink to="/Page2" exact>程序员日常</NavLink>
                                            </span>
                                            <span>26 分钟前</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="project" onMouseOver={this.handleMouseOver} active={this.state.active}>
                                    <div>
                                        <img src='https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png' />
                                        <span>
                                            <NavLink to="/Page2" exact>Bootstrap</NavLink>
                                        </span>
                                        <p>凛冬将至</p>
                                        <p>
                                            <span>
                                                <NavLink to="/Page2" exact>高逼格设计天团</NavLink>
                                            </span>
                                            <span>26 分钟前</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="project"  onMouseOver={this.handleMouseOver} active={this.state.active}>
                                    <div>
                                        <img src='https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png' />
                                        <span>
                                            <NavLink to="/Page2" exact>React</NavLink>
                                        </span>
                                        <p>生命就像一盒巧克力，结果往往出人意料</p>
                                        <p>
                                            <span>
                                                <NavLink to="/Page2" exact>骗你来学计算机</NavLink>
                                            </span>
                                            <span>26 分钟前</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="page-update page-card">
                        <div className="title"><p>动态</p></div>
                        <div className="update">
                            <div>
                                <img src='https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png' />
                                <div>
                                    <p>
                                        <span>曲丽丽</span> 在 
                                        <span>
                                            <NavLink to="/Page2" exact> 高逼格设计天团</NavLink>
                                        </span> 新建项目 
                                        <span>
                                            <NavLink to="/Page2" exact> 六月迭代</NavLink>
                                        </span>
                                    </p>
                                    <p>40分钟前</p>
                                </div>
                            </div>
                        </div>
                        <div className="update">
                            <div>
                                <img src='https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png' />
                                <div>
                                    <p>
                                        <span>付小小</span> 在 
                                        <span>
                                            <NavLink to="/Page2" exact> 高逼格设计天团</NavLink>
                                        </span> 新建项目 
                                        <span>
                                            <NavLink to="/Page2" exact> 六月迭代</NavLink>
                                        </span>
                                    </p>
                                    <p>40分钟前</p>
                                </div>
                            </div>
                        </div>
                        <div className="update">
                            <div>
                                <img src='https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png' />
                                <div>
                                    <p>
                                        <span>林东东</span> 在
                                        <span>
                                            <NavLink to="/Page2" exact> 高逼格设计天团</NavLink>
                                        </span> 新建项目
                                        <span>
                                            <NavLink to="/Page2" exact> 六月迭代</NavLink>
                                        </span>
                                    </p>
                                    <p>40分钟前</p>
                                </div>
                            </div>
                        </div>
                        <div className="update">
                            <div>
                                <img src='https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png' />
                                <div>
                                    <p>
                                        <span>周星星</span> 将
                                        <span>
                                            <NavLink to="/Page2" exact> 5月日常迭代 </NavLink>
                                        </span> 更新至已发布状态
                                    </p>
                                    <p>40分钟前</p>
                                </div>
                            </div>
                        </div>
                        <div className="update">
                            <div>
                                <img src='https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png' />
                                <div>
                                    <p>
                                        <span>朱偏右</span> 在
                                        <span>
                                            <NavLink to="/Page2" exact> 工程效能</NavLink>
                                        </span> 发布了
                                        <span>
                                            <NavLink to="/Page2" exact> 留言</NavLink>
                                        </span>
                                    </p>
                                    <p>40分钟前</p>
                                </div>
                            </div>
                        </div>
                        <div className="update">
                            <div>
                                <img src='https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png' />
                                <div>
                                    <p>
                                        <span>乐哥 </span> 在
                                        <span>
                                            <NavLink to="/Page2" exact> 高逼格设计天团</NavLink>
                                        </span> 新建项目
                                        <span>
                                            <NavLink to="/Page2" exact> 六月迭代</NavLink>
                                        </span>
                                    </p>
                                    <p>40分钟前</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='content-right'>
                        <div className='page-opration page-card'>
                            <div className='title'><p>快速开始 / 便捷导航</p></div>
                            <div className='opration'>
                                <div onMouseOver={this.handleMouseOver} active={this.state.active}>
                                    <span>
                                        <NavLink to="/Page2" exact>操作一</NavLink>
                                    </span>
                                </div>
                                <div onMouseOver={this.handleMouseOver} active={this.state.active}>
                                    <span>
                                        <NavLink to="/Page2" exact>操作二</NavLink>
                                    </span>
                                </div>
                                <div onMouseOver={this.handleMouseOver} active={this.state.active}>
                                    <span>
                                        <NavLink to="/Page2" exact>操作三</NavLink>
                                    </span>
                                </div>
                                <div onMouseOver={this.handleMouseOver} active={this.state.active}>
                                    <span>
                                        <NavLink to="/Page2" exact>操作四</NavLink>
                                    </span>
                                </div>
                                <div onMouseOver={this.handleMouseOver} active={this.state.active}>
                                    <span>
                                        <NavLink to="/Page2" exact>操作五</NavLink>
                                    </span>
                                </div>
                                <div onMouseOver={this.handleMouseOver} active={this.state.active}>
                                    <span>
                                        <NavLink to="/Page2" exact>操作六</NavLink>
                                    </span>
                                </div>
                                <div><span>+ 添加</span></div>
                            </div>
                        </div>
                        <div className='page-team page-card'>
                            <div className='title'><p>团队</p></div>
                            <div>
                                <div className="team" onMouseOver={this.handleMouseOver} active={this.state.active}>
                                    <span>
                                        <NavLink to="/Page2" exact>
                                            <img src='https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png' /> 科学搬砖组
                                        </NavLink>
                                    </span>
                                </div>
                                <div className="team" onMouseOver={this.handleMouseOver} active={this.state.active}>
                                    <span>
                                        <NavLink to="/Page2" exact>
                                            <img src='https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png' /> 全组都是吴彦祖
                                        </NavLink>
                                    </span>
                                </div>
                                <div className="team" onMouseOver={this.handleMouseOver} active={this.state.active}>
                                    <span>
                                        <NavLink to="/Page2" exact>
                                            <img src='https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png' /> 中二少女团
                                        </NavLink>
                                    </span>
                                </div>
                                <div className="team" onMouseOver={this.handleMouseOver} active={this.state.active}>
                                    <span>
                                        <NavLink to="/Page2" exact>
                                            <img src='https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png' /> 程序员日常
                                        </NavLink>
                                    </span>
                                </div>
                                <div className="team" onMouseOver={this.handleMouseOver} active={this.state.active}>
                                    <span>
                                        <NavLink to="/Page2" exact>
                                            <img src='https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png' /> 高逼格设计天团
                                        </NavLink>
                                    </span>
                                </div>
                                <div className="team" onMouseOver={this.handleMouseOver} active={this.state.active}>
                                    <span>
                                        <NavLink to="/Page2" exact>
                                            <img src='https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png' /> 骗你来学计算机
                                        </NavLink>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            // </HashRouter>
		);
	}
}

export default Index;