import { get } from '@/request/request.js'

// 获取首页banner

export async function getBanner(){
	return get({
		url: '/banner/json'
	});
}