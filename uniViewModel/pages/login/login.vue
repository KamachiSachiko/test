<template>
	<view>
		<view style="padding: 30rpx;">
			<image src="../../static/city3/login.jpg" mode="" style="width: 100%;height: 500rpx;"></image>
		</view>

		<view class="" style="display: flex;padding: 30rpx;border-bottom: 1rpx #EEEEEE solid;">
			<text class="txt">账号：</text>
			<input type="text" v-model="username" style="font-size: 28rpx;" placeholder="请输入账号"
				placeholder-style="font-size: 28rpx;" />
		</view>

		<view class="" style="display: flex;padding: 30rpx;border-bottom: 1rpx #EEEEEE solid;">
			<text class="txt">密码：</text>
			<input type="password" v-model="password" style="font-size: 28rpx;" placeholder="请输入密码"
				placeholder-style="font-size: 28rpx;" />
		</view>

		<button type="primary" class="btn" @click="goIndex" style="margin-top: 100rpx;">登录</button>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				username: "",
				password: ""
			}
		},
		methods: {
			goIndex(){
				uni.removeStorageSync("token")
				const res = this.$request ({
					url:"/prod-api/api/login",
					method: "POST",
					data: {
						"username": this.username,
						"password": this.password,
					}
				}).then((res) => {
					uni.setStorageSync("token",res.data.token)
					if (res.data.code == 200) {
						uni.showToast({
						title: '登录成功',
						icon:'none',
						success() {
							setTimeout(function() {
								uni.switchTab({
									url:'../index/index'
								})
							}, 1000);
						}
					});
					}
				})
			}
		}
	}
</script>

<style>
	.txt {
		font-size: 28rpx;
	}
</style>
