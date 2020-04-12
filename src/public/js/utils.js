// 获取当前时间 Y-M-D H:MIN
export function currentTime() {
	let myDate = new Date();
	let Y = myDate.getFullYear();
	let M = myDate.getMonth();
	let D = myDate.getDate();
	let H = myDate.getHours();
	let MIN = myDate.getMinutes();
	let S = myDate.getMinutes();
	let str = Y + '-' + (M + 1 < 10 ? '0' + (M + 1) : M + 1) + '-' + (D < 10 ? '0' + D : D) + ' ' + (H < 10 ? '0' + H : H) + ':' + (MIN < 10 ? '0' + MIN : MIN) + ':' + (S < 10 ? '0' + S : S);
	return str;
}
// 获取当前时间 Y-M-D
export function currentDay() {
	let myDate = new Date();
	let Y = myDate.getFullYear();
	let M = myDate.getMonth();
	let D = myDate.getDate();
	let str = Y + '-' + (M + 1 < 10 ? '0' + (M + 1) : M + 1) + '-' + (D < 10 ? '0' + D : D);
	return str;
}

// 转换日期
export function transitionTime(time) {
	if (time === undefined) {
		return null;
	}
	let Y = new Date(time).getFullYear();
	let M = new Date(time).getMonth();
	let D = new Date(time).getDate();
	let H = new Date(time).getHours();
	let MIN = new Date(time).getMinutes();
	let S = new Date(time).getMinutes();
	let str = Y + '-' + (M + 1 < 10 ? '0' + (M + 1) : M + 1) + '-' + (D < 10 ? '0' + D : D) + ' ' + (H < 10 ? '0' + H : H) + ':' + (MIN < 10 ? '0' + MIN : MIN) + ':' + (S < 10 ? '0' + S : S);
	return str;
}
export function transitionDate(time) {
	if (time === undefined) {
		return null;
	}
	let Y = new Date(time).getFullYear();
	let M = new Date(time).getMonth();
	let D = new Date(time).getDate();
	let str = Y + '-' + (M + 1 < 10 ? '0' + (M + 1) : M + 1) + '-' + (D < 10 ? '0' + D : D);
	return str;
}

// 验证手机号码
export function isPhone(phone) {
	var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
	if (!myreg.test(phone)) {
		return false;
	} else {
		return true;
	}
}

// 验证身份证号
export function isIDCard(IDCard) {
	var myreg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
// 	if (!myreg.test(IDCard)) {
// 		return false;
// 	} else {
// 		return true;
// 	}
	return myreg.test(IDCard);
}

// 验证邮箱
export function isEmail(mail) {
	var myreg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
	if (!myreg.test(mail)) {
		return false;
	} else {
		return true;
	}
}
