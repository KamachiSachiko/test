<template>
	<view style="padding: 30rpx;">
		<view class="" style="display: flex;width: 100%;padding: 20rpx;border-bottom: 1rpx #EEEEEE solid;">
			<input type="password" v-model="oldPassword"  placeholder="输入原始密码" placeholder-style="font-size: 30rpx;"/>
		</view>
		<view class="" style="display: flex;width: 100%;padding: 20rpx;border-bottom: 1rpx #EEEEEE solid;">
			<input type="password" v-model="newPassword"  placeholder="输入新密码" placeholder-style="font-size: 30rpx;"/>
		</view>
		
		<button type="primary" class="btn" @click="back" style="">确认</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldPassword:"",
				newPassword:"",
			}
		},
		methods: {
			back(){
				if (this.newPassword != this.surePassword) {
					uni.showToast({
						title: '密码输入不一致',
						icon:'none'
					});
					return
				}
				const res = this.$request({
					url:"/prod-api/api/common/user/resetPwd",
					method:"PUT",
					data:{
						"newPassword": this.newPassword,
						"oldPassword": this.oldPassword
					}
				}).then((res) => {
					if (res.data.code == 200) {
						uni.showToast({
							title: '修改成功'
						});
						setTimeout(function() {
							uni.navigateBack({
								delta: 1
							});
						}, 1000);
					}
				})
			}
		}
	}
</script>

<style>
</style>
