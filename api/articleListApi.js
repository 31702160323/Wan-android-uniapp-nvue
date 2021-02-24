import { get } from '@/request/request.js'

// 获取首页文章列表

export async function getArticleList(pagesize = 0){
	return get({
		url: `/article/list/${pagesize}/json`
	});
}