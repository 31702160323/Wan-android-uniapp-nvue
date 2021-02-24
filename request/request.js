class Request {
	constructor() {
		this.isConnected = false;
		this.baseUrl = 'https://www.wanandroid.com'

		uni.getNetworkType({
		    success: (networkRes) => {
		        this.isConnected = networkRes.networkType != 'none';
		    }
		});

		uni.onNetworkStatusChange((res) => {
			this.isConnected = res.isConnected;
			uni.showToast({
				title: res.isConnected ? '有网络' : '无网络',
				icon: 'none'
			})
		})
	}

	request = (url, method, header = {}, data = {}, interceptor = false) => {
		//判断是否登录
		
		if(interceptor) {
			const userData = uni.getStorageSync('userData');
			if (userData == null || userData == '') {
				uni.navigateTo({
					url: '/pages/login/login'
				});
				return;
			}
		}

		if (!this.isConnected) {
			uni.showToast({
				title: '网络未连接',
				duration: 1000,
				icon: 'none'
			})
			return null
		}

		return new Promise((resolve, reject) => {
			uni.request({
				url: this.baseUrl + url,
				header: header,
				method: method,
				data: data,
				success(response) {
					if (response.statusCode === 200) {
						// 处理业务
						resolve(response.data);
					} else {
						reject(response);
					}
				},
				fail(error) {
					reject(error);
				},
				complete() {
					uni.hideLoading();
				}
			})
		});
	}

	get = (object) => {
		return this.request(object.url, "GET", object.header, object.data, object.interceptor)
	}

	post = (object) => {
		return this.request(object.url, "POST", object.header, object.data, object.interceptor)
	}

	put = (object) => {
		return this.request(object.url, "PUT", object.header, object.data, object.interceptor)
	}
}

const instance = new Request();

const get = instance.get;
const post = instance.post;
const put = instance.put;

export {
	get,
	post,
	put
}
