import React from 'react';
import './../../public/css/Calendar.pcss';

// 月份或天数小于10的补0
const fillZero = item => {
	if (item + 1 <= 10) {
		item = '0' + item;
	}
	return item;
};

const CalendarWeeks = () => {
	return (
		<div className="calendar-weeks">
			<p>日</p>
			<p>一</p>
			<p>二</p>
			<p>三</p>
			<p>四</p>
			<p>五</p>
			<p>六</p>
		</div>
	);
};

function InputDiv(props){
	if(props.only) {
		return(
			<div className={`${props.inputClass} start-time`}>
				<input placeholder='开始日期' id='start-time' onClick={()=>props.handleChange('start')} value={props.startValue} ref={props.inputRef} autoComplete='off' />
				<img src={require('./../../public/img/calendar.png')} />
				<p>{}</p>
			</div>
		);
	} else {
		return(
			<div className={`${props.inputClass} start-end-time`}>
				<input placeholder='开始日期' id='start-time' onClick={()=>props.handleChange('start')} value={props.startValue} autoComplete='off' />
				~
				<input placeholder='结束日期' id='end-time' onClick={()=>props.handleChange('end')} value={props.endValue} autoComplete='off' />
				<img src={require('./../../public/img/calendar.png')} />
				<p>{}</p>
			</div>
		);
	}
}
export default class Calendar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentYear: new Date().getFullYear(), //今年
			currentMonth: new Date().getMonth(), //今月
			currentDate: new Date().getDate(), //今日
			selectYear: new Date().getFullYear(), //选择的年
			selectMonth: new Date().getMonth(), //选择的月
			selectDate: new Date().getDate(), //选择的天
			show: false, //是否显示日期组价
            showYear: false, //是否显示选择年
            which: '', //当前是选择开始日期还是结束日期
            startValue: '',
            endValue: '',
			minDaySelect: false //只能选择今天之后的日期，包括今天
		};
	}

	handleOpration(type) {
		let selectYear = this.state.selectYear;
		let selectMonth = this.state.selectMonth;
		if (selectMonth === 0 && type === 'pre') {
			selectYear--;
			selectMonth = 11;
		} else if (selectMonth === 11 && type === 'next') {
			selectYear++;
			selectMonth = 0;
		} else {
			type === 'pre' ? selectMonth-- : selectMonth++;
		}

		this.setState({
			selectYear: selectYear,
			selectMonth: selectMonth
		});
	}

	handleSelectDate(date) {
		let minDaySelect = this.state.minDaySelect;
        let selectDate = this.state.selectDate;
        let which = this.state.which;
        let selectYear = this.state.selectYear;
        let selectMonth = this.state.selectMonth;
        let startValue = this.state.startValue;
        let endValue = this.state.endValue;
        // let selectDate = this.state.selectDate;
        let value = selectYear + '-' + fillZero(selectMonth + 1) + '-' + fillZero(date);
        if (which === 'end') {
            startValue === ''? minDaySelect = false: value < startValue? minDaySelect = true: minDaySelect = false;
            startValue === ''? selectDate = date: value < startValue? selectDate = this.state.selectDate: selectDate = date;
		} else if (which === 'start') {
            endValue === ''? minDaySelect = false: value > endValue? minDaySelect = true: minDaySelect = false;
            endValue === ''? selectDate = date: value > endValue? selectDate = this.state.selectDate: selectDate = date;
        } else {
            selectDate = date;
        }
        value = selectYear + '-' + fillZero(selectMonth + 1) + '-' + fillZero(selectDate);
        if (which === 'start') {
            this.setState({ startValue: value });
        } else if(which === 'end') {
            this.setState({ endValue: value });
        }
		this.setState({
            selectDate: selectDate,
            minDaySelect: minDaySelect,
			show: minDaySelect
        });
    }
    
	handleChange(which) {
        this.setState({ 
            show: !this.state.show,
            which: which
        });
	}

	// 指定日期显示
	UNSAFE_componentWillReceiveProps(nextProps) {
		let setDate = nextProps.setDate || null;
		if (setDate) {
			this.setState({
				selectYear: parseInt(setDate.split('-')[0], 10),
				selectMonth: parseInt(setDate.split('-')[1], 10) - 1,
				selectDate: parseInt(setDate.split('-')[2], 10)
			});
		}
	}

	// 向外界返回所选日期
	// value(selectDate) {
	// 	let selectYear = this.state.selectYear;
    //     let selectMonth = this.state.selectMonth;
    //     let startValue = this.state.startValue;
    //     let endValue = this.state.endValue;
    //     // let selectDate = this.state.selectDate;
    //     let which = this.state.which;
    //     let value = selectYear + '-' + fillZero(selectMonth + 1) + '-' + fillZero(selectDate);
    //     if (which === 'start') {
    //         this.setState({ startValue: value });
    //         if( value > endValue) {
    //             this.setState({ minDaySelect: true });
    //         }
    //     } else if(which === 'end') {
    //         this.setState({ endValue: value });
    //         if( value < startValue) {
    //             this.setState({ minDaySelect: true });
    //         }
    //     }
	// }

	render() {
		let minDaySelect = this.state.minDaySelect;
		let monthStr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

		// let currentYear = this.state.currentYear;
		// let currentMonth = this.state.currentMonth;

		let selectYear = this.state.selectYear;
		let selectMonth = this.state.selectMonth;
        let selectDate = this.state.selectDate;
        let startValue = this.state.startValue;
        let endValue = this.state.endValue;
		let show = this.state.show;
		let showYear = this.state.showYear;
        // let value = selectYear + '-' + fillZero(selectMonth + 1) + '-' + fillZero(selectDate);
		// 初始化currentMonthAllDates为某月份的第0天，由于JavaScript中day的范围为1~31中的值，所以当设为0时，会向前一天，也即表示上个月的最后一天。
		let selectMonthAllDates = new Date(selectYear, selectMonth + 1, 0).getDate(); //这个月有多少天
		let selectDay = new Date(selectYear, selectMonth, 1).getDay(); //这个月1号星期几
		let all = selectMonthAllDates + selectDay;
		var allDate = [];
		var D = 0;

		let date = (i, D) => {
			allDate.push(
				<li
					onClick={() => {
						this.handleSelectDate(D);
					}}
					className={`${D === selectDate ? 'active' : null}`}
					key={i}
				>
					<p>{i < selectDay ? null : D}</p>
				</li>
			);
		};

		for (let i = 0; i < all; i++) {
			if (i >= selectDay) {
				D++;
			}
			date(i, D);
		}

		// 选择年
		let years = [];
		for (let i = -3; i < 5; i++) {
			years.push(
				<li key={i} onClick={() => this.setState({ selectYear: selectYear + i, showYear: !showYear })} className={selectYear - i === selectYear ? 'active' : null}>
					{selectYear + i}
				</li>
			);
		}
		return (
            <div>
                <InputDiv startValue = {startValue} endValue={endValue} handleChange={(txt)=>this.handleChange(txt)} inputClass={this.props.inputClass} inputRef={this.props.inputRef} only={this.props.only} />
                <div className={'calendar-wrap'}>
                    <div className="calendar" style={{ display: show ? 'block' : 'none' }}>
						{minDaySelect ? <p>*  开始日期不得大于结束日期</p>: ''}
						<div className="calendar-header">
                            <div className="name">
                                <span>{monthStr[selectMonth]}</span>
                                <div className="clendar-years">
                                    <p onClick={() => this.setState({ showYear: !showYear })}>{selectYear}</p>
                                    <div><ul style={{ display: showYear ? 'block' : 'none' }}>{years}</ul></div>
                                </div>
                            </div>
                            <div className="calendar-pre" onClick={this.handleOpration.bind(this, 'pre')} />

                            <div className="calendar-next" onClick={this.handleOpration.bind(this, 'next')} />
                        </div>
                        <CalendarWeeks />
                        <ul className="calendar-dates">{allDate}</ul>
                    </div>
                </div>
            </div>
		);
	}
}
