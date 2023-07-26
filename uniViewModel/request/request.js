const request = (option) => {
	let setting = uni.getStorageSync("setting") || "http://172.22.123.100:10001"
	let token = uni.getStorageSync("token") || ""
	return new Promise((reslove,reject) => {
		uni.request({
			url: setting + option.url ,
			method: option.method || 'GET',
			data: option.data || {},
			header:{Authorization:token},
			success: res => {
				reslove(res)
				console.log(setting + option.url);
				console.log(res.data);
			},
			fail: (err) => {
				reject(err)
				uni.showToast({
					title: '网络异常',
					icon:'none'
				});
			},
			complete: () => {}
		});
	})
}
export {request}