'use strict';

const NETWORK_DIS_CONNECT = '网络连接不可用';

export function createJsonResultInfoByError(error,type) {
	return {
		success: false,
		message: error,
		type: type
	}
}

export function makeActionCreator(type, ...argNames) {
	return function(...args) {
		let action = { type }
		argNames.forEach((arg, index) => {
			action[argNames[index]] = args[index]
		})
		return action
	}
}

export function callAPIMiddleware({ dispatch, getState }) {
	return function (next) {
		return function (action) {
			const {
				types,// 要在之前之后发送的 action types(获取、成功、失败3个)
				callAPI,// 进行取：
				shouldCallAPI = () => true,// 检查缓存 (可选)
				payload = {}// 在 actions 的开始和结束注入的参数
			} = action;

			if (!types) {
				// 普通 action：传递
				return next(action);
			}

			if (!Array.isArray(types) || types.length !== 3 ||
				!types.every(type => typeof type === 'string')) {
				throw new Error('Expected an array of three string types.');
			}
			if (typeof callAPI !== 'function') {
				throw new Error('Expected fetch to be a function.');
			}

			if (!shouldCallAPI(getState())) {
				return;
			}

			const [requestType, successType, failureType] = types;

			if(!networkConnected) {
				/*dispatch(Object.assign({}, payload, {
					result: createJsonResultInfoByError(NETWORK_DIS_CONNECT, requestType),
					type: failureType
				}));*/
				return;
			}

			dispatch(Object.assign({}, payload, {
				type: requestType
			}));

			return callAPI().then(
				response => dispatch(Object.assign({}, payload, {
					result: response,
					type: successType
				})),
				error => dispatch(Object.assign({}, payload, {
					result: createJsonResultInfoByError(error, requestType),
					type: failureType
				}))
			);
		};
	};
}