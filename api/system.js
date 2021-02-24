import { get } from '@/request/request.js'

// 

export async function navi(){
	return get({
		url: '/navi/json'
	});
}

export async function tree(){
	return get({
		url: '/tree/json'
	});
}

export async function getProjectList(id, pagesize = 0){
	return get({
		url: `/article/list/${pagesize}/json?cid=${id}`
	});
}