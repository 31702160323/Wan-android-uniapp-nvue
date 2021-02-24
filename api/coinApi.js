import { get } from '@/request/request.js'

// 获取积分列表

export async function getCoinList(pagesize = 1){
	return get({
		url: `/lg/coin/list/${pagesize}/json`
	});
}

export async function getCoin(){
	return get({
		url: `/lg/coin/userinfo/json`
	});
}