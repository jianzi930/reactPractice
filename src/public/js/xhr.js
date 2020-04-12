export function requestAPI(option) {
	console.log(option);
	let _default = {
		type: option.type ? option.type.toUpperCase() : 'POST', //请求类型
		url: option.url || '', //后台接口地址
		data: option.data || {}, //传参
		async: option.async || true, //true：异步请求；false：同步请求
		dataType: option.dataType || '', //返回数据类型，‘’：String字符串；text：String字符串；document：Document对象；json：javascript 对象（IE10/IE11不支持）；blob：Blob对象；arrayBuffer：ArrayBuffer对象
		timeout: option.timeout || 0, //设置请求超时时间
		success: option.success || function() {}, //
		error: option.success || function() {} //
	};

	let xhr = new XMLHttpRequest();
	if (_default.type === 'POST') {
		xhr.open(_default.type, _default.url, _default.async);
		xhr.send(_default.data);
	} else if (_default.type === 'GET') {
		let urlParams = '';
		let params = [];
		for (let key in _default.data) {
			params.push(key + '=' + _default.data[key]);
		}

		if (params.length > 0) {
			urlParams = '?' + params.join('&');
		}

		xhr.open(_default.type, _default.url + urlParams, _default.async);
		xhr.send();
	}
	// 当同步请求时，timeout必须为0,responseType必须为“”
	if (_default.async) {
		xhr.timeout = _default.timeout;
		xhr.responseType = _default.dataType;
	} else {
		xhr.timeout = 0;
		xhr.responseType = '';
	}
	xhr.onload = () => {
		if (xhr.readyState === 4 && xhr.status === 200) {
			_default.success(xhr.response);
		} else {
			_default.error(xhr.response);
		}
	};
}
