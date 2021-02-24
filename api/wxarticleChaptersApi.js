import { get } from '@/request/request.js'

// 获取公众号banner

export async function getWxarticleChapters(){
	return get({
		url: '/wxarticle/chapters/json'
	});
}