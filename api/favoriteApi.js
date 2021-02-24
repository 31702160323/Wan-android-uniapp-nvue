import { post } from '@/request/request.js'

// 获取收藏

export async function switchFavorite(collect = true, id){
	
	let url = `/lg/uncollect_originId/${id}/json`;
	
	if (collect) {
		url = `/lg/collect/${id}/json`;
	}
	
	return post({
		url: url,
		interceptor: true
	});
}