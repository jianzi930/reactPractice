import React from 'react';
import { HashRouter, NavLink, Route, Redirect, Switch } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import WorkDesk from '../Dashboard/WorkDesk/workdesk';
import BasicForm from '../Form/BasicForm/basicform';
import SeniorForm from '../Form/SeniorForm/seniorform';
import ListMenu from '../LeftMenu/leftmenu';
import TableList from '../List/TableList/tablelist';
export default class Page extends React.Component {
	constructor() {
		super();
		this.state = {
			collapse: false
		};
	}
	handleCollapse() {
		this.setState({
            collapse: !this.state.collapse
        });
	}
	render() {
		return (
            <HashRouter>
				<div className='app'>
					<div className={`left-list ${this.state.collapse? 'collapse': ''}`}>
						<h1>
							<NavLink to="/WorkDesk" exact>
								Ant Design Pro
							</NavLink>
						</h1>
						<ListMenu />
					</div>
					<div className="right">
						<div className="page-header">
							<div>
								<span id='collapse-btn' onClick={()=>this.handleCollapse()}>
									<img src={require('./../../public/img/collapse-inner.png')}  className={this.state.collapse? '':'active'} />
									<img src={require('./../../public/img/collapse-outer.png')}  className={this.state.collapse? 'active': ''} />
								</span>
								<div className="header-opration">
									<div>
										<img src={require('./../../public/img/search.png')} />
									</div>
									<div>
										<img src={require('./../../public/img/question.png')} />
									</div>
									<div>
										<img src={require('./../../public/img/messages.png')} />
									</div>
									<div className="user">
										<img src='https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png' />
										<span>Serati Ma</span>
									</div>
									<div>
										<img src={require('./../../public/img/language.png')} />
									</div>
								</div>
							</div>
						</div>
						{/* {this.props.children || WorkDesk}
						{console.log(this.props.children)} */}
						<div className="a">
						<Switch>
							<Route path="/Dashboard/WorkDesk" component={WorkDesk} exact />
							<Route path="/page1" component={WorkDesk} exact />
							<Route path="/Form/BasicForm" component={BasicForm} exact />
							<Route path="/Form/SeniorForm" component={SeniorForm} exact />
							<Route path="/List/TableList" component={TableList} exact />
							<Redirect from="/" to="/Dashboard/WorkDesk" exact />
						</Switch>
						</div>
						<div className='page-footer'>
							<div>
								<p>
									<span>
										<NavLink to="/WorkDesk" exact>
											Ant Design Pro
										</NavLink>
									</span>
									<span>
										<NavLink to="/WorkDesk" exact>
											<img src={require('./../../public/img/github.png')} />
										</NavLink>
									</span>
									<span>
										<NavLink to="/WorkDesk" exact>
											Ant Design
										</NavLink>
									</span>
								</p>
								<p>
								Copyright © 2019 蚂蚁金服体验技术部出品
								</p>
								<p>
									<img src='https://www.netlify.com/img/global/badges/netlify-color-bg.svg' />
								</p>
							</div>
						</div>
					</div>
				</div>
			</HashRouter>
		);
	}
}