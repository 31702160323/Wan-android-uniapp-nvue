import { get } from '@/request/request.js'

// 获取收藏列表

export async function getFavoriteList(pagesize = 0){
	return get({
		url: `/lg/collect/list/${pagesize}/json`,
		interceptor: true
	});
}