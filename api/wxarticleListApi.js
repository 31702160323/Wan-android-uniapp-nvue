import { get } from '@/request/request.js'

// 获取公众号文章列表

export async function getWxarticleList(id, pagesize = 1){
	return get({
		url: `/wxarticle/list/${id}/${pagesize}/json`
	});
}