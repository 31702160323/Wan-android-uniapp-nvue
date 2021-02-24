import { get, post } from '@/request/request.js'

// 

export async function todoList(){
	return get({
		url: '/lg/todo/v2/list/1/json'
	});
}

export async function deleting(id){
	return post({
		url: `/lg/todo/delete/${id}/json`
	});
}

export async function done(id, header, data){
	return post({
		url: `/lg/todo/done/${id}/json`,
		header: header,
		data: data
	});
}

export async function update(id, header, data){
	return post({
		url: `/lg/todo/update/${id}/json`,
		header: header,
		data: data
	});
}

export async function add(header, data){
	return post({
		url: '/lg/todo/add/json',
		header: header,
		data: data
	});
}
