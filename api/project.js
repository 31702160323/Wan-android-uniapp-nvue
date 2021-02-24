import { get } from '@/request/request.js'

// 获取公众号文章列表

export async function getTabList(){
	return get({
		url: '/project/tree/json'
	});
}

export async function getProjectList(id, pagesize = 1){
	return get({
		url: `/project/list/${pagesize}/json?cid=${id}`
	});
}