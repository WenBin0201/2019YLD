'use strict';

import {REQUEST_METHOD_GET, REQUEST_METHOD_POST, SELF_USER_AGENT} from '../constant/CommonConstant';

/*//网关地址
export const HOST = 'http://192.168.1.8:10020';
//SSO服务器地址
export const HOST_CAS_ADDRESS = 'http://192.168.1.10:12000';*/

export const HOST = 'http://web.nmgghw.com:8080';
export const HOST_CAS_ADDRESS = 'http://cas.nmgghw.com:12000';

export const NETWORK_DIS_CONNECT = '网络连接不可用';

export function request(url, method=REQUEST_METHOD_GET, body,
                        contentType='application/x-www-form-urlencoded; charset=UTF-8', isAjax=true) {
    let headers = {'user-agent': SELF_USER_AGENT};
    if(isAjax)
        headers['X-Requested-With'] = 'XMLHttpRequest';
    if(method === REQUEST_METHOD_POST)
        headers['Content-Type'] = contentType;
    let _init = {
        method: method,
        body: body,
        credentials: 'include',
        headers: headers,
    };

    return new Promise((resolve, reject) => {
        if(!networkConnected){
            resolve({
                success: false,
                message: NETWORK_DIS_CONNECT
            });
            return;
        }
        console.warn("请求",url, body);
        fetch(url, _init).then((response) => {
            console.warn('响应URL->', response.url);
            return {isOk: response.ok,
                status: response.status,
                data: response.ok ? response.json() : response.text()};
        }).then((responseData) => {

            //console.warn('进入请求', responseData);
            if(responseData.isOk){
                resolve(responseData.data);
            } else if(responseData.status === 401) {
                console.warn('用户未登录', responseData.data);
                resolve({success: false, data: responseData.data, type: '901', message: '用户未登录'})
            }else {
                reject(responseData.data);
            }
        }).catch((error) => {
            //console.log("wr",error);
            reject(checkError(error));
        });
    })
}

export function requestRedirect(url, method=REQUEST_METHOD_GET, type) {
    console.warn("请求Redirect",url);
    let headers = {'user-agent': SELF_USER_AGENT};
    return new Promise((resolve, reject) => {
        if(!networkConnected){
            resolve({
                success: false,
                message: NETWORK_DIS_CONNECT
            });
            return;
        }

        fetch(url, {
            method: method,
            credentials: 'include',
            headers: headers
        }).then((response) => {
            console.warn('响应URL', response.url);
            return {isOk: response.ok,
                status: response.status,
                data: response.ok ? response.url : response.text()};
        }).then((responseData) => {
            console.warn('请求结果', responseData);
            if(responseData.isOk){
                resolve({success: true, data: responseData.data, type});
            } else if(responseData.status === 401) {
                console.warn('用户未登录', responseData.data);
                resolve({success: false, data: responseData.data, type: '901', message: '用户未登录'})
            }else {
                reject({success: false, type, message: responseData.data});
            }
        }).catch((error) => {
            //console.log("wr",error);
            //reject(checkError(error));
            reject({success: false, type, message: checkError(error)});
        });
    })
}

export function upload(url, body) {
    let isOk = false;
    return new Promise((resolve, reject) => {
        if(!networkConnected){
            resolve({
                success: false,
                message: NETWORK_DIS_CONNECT
            });
            return;
        }
        fetch(url, {
            method: REQUEST_METHOD_POST,
            body: body
        }).then((response) => {
            if (response.ok)
                isOk = true;
            return　response.text();
        }).then((responseData) => {
            //console.log("结果",responseData);
            if (isOk)
                resolve({success: true, data: responseData});
            else
                reject({success: false, message: responseData});
        }).catch((error) => {
            reject({success: false, message: checkError(error)});
        });
    })
}

export function checkError(error) {
    let message = error && typeof error === 'string' ? error : '无法连接服务器,请稍后重试!';
    //console.warn("检查错误:", error, message);
    return message;
}