import { post } from '@/request/request.js'

// 获取取消收藏

export async function uncollect(id, header, data){
	return post({
		url:`/lg/uncollect/${id}/json`,
		header: header,
		data: data,
		interceptor: true
	});
}