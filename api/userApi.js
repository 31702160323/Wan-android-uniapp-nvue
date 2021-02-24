import { get, post } from '@/request/request.js'

// 登录

export async function login(header, data){
	return post({
		url: `/user/login`,
		header: header,
		data: data
	});
}

export async function register(header, data){
	return post({
		url: '/user/register',
		header: header,
		data: data
	});
}

export async function logout(){
	return get({
		url: '/user/logout/json'
	});
}