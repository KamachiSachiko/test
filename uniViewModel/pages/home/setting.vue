<template>
	<view>
		<view class="HBetween txt">
			<text>头像</text>
			<image :src="head" mode="" @error="imgErr" style="width: 50rpx;height: 50rpx;border-radius: 100rpx;" @click="avatar"></image>
		</view>
		
		<view class="HBetween txt" style="text-align: right;">
			<text>账户</text>
			<input type="text" v-model="user.nickName" style="font-size: 28rpx;"
			placeholder="请输入昵称" placeholder-style="font-size: 28rpx;"/>
		</view>
		
		<view class="HBetween txt">
			<text>性别</text>
			<radio-group @change="change">
				<label>
					<radio value="0" :checked="user.sex == 0"/><text>男</text>
				</label>
				<label>
					<radio value="1" :checked="user.sex == 1"/><text>女</text>
				</label>
			</radio-group>
		</view>
		
		<view class="HBetween txt" style="text-align: right;">
			<text>联系电话</text>
			<input type="text" v-model="user.phonenumber" style="font-size: 28rpx;"
			placeholder="请输入手机号码" placeholder-style="font-size: 28rpx;"/>
		</view>
		
		<view class="HBetween txt" style="text-align: right;">
			<text>身份证号码</text>
			<input type="text" v-model="user.idCard" style="font-size: 28rpx;"
			placeholder="请输入身份证" placeholder-style="font-size: 28rpx;"/>
		</view>
		
		<button type="primary" class="btn" @click="save">确认</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				head:"",
				user:{},
				idCard:"",
				phonenumber:""
			}
		},
		methods: {
			getUser(){
				const res = this.$request({
					url:"/prod-api/api/common/user/getInfo"
				}).then((res) => {
					if (res.data.code != 200) {
						return
					}
					this.user = {}
					this.user = res.data.user
					if (uni.getStorageSync("avatar").length > 0) {
						this.head = this.ip + uni.getStorageSync("avatar")
					} else{
						this.head = this.ip + this.user.avatar
					}
					this.user.idCard = this.user.idCard.substr(0,6) + "************" 
					this.user.phonenumber = this.user.phonenumber.substr(0,7) + "****"
				})
			},
			save(){
				const res = this.$request({
					url: '/prod-api/api/common/user',
					method: 'PUT',
					data: {
						"idCard": this.user.idCard,
						"nickName": this.user.nickName,
						"phonenumber": this.user.phonenumber,
						"sex": this.user.sex
					}
				}).then((res) => {
					if (res.data.code == 200) {
						uni.showToast({
							title: '修改成功',
							icon:'none',
							success() {
								setTimeout(function() {
									uni.navigateBack({
										delta:1
									})
								}, 1000);
							}
						});
					}
				})
			},
			change(e){
				this.user.sex = e.detail.value
			},
			avatar(){
				var that = this
				uni.chooseImage({
					count:1,
					sourceType:['album','camera'],
					sizeType:"compressed",
					success: (res) => {
						that.head = res.tempFilePaths[0]
						that.updata()
					}
				})
			},
			updata(){
				uni.uploadFile({
					url:this.ip + "/prod-api/common/upload",
					header:{Authorization:uni.getStorageSync("token")},
					filePath:this.head,
					name:"file",
					success:(res) => {
						if (res.statusCode == 200) {
							uni.setStorageSync("avatar","/prod-api" + JSON.parse(res.data).fileName)
							this.head = uni.getStorageSync("avatar")
						}
					}
				})
			}
		},
		onLoad() {
			this.getUser()
		}
	}
</script>

<style>
	.txt{
		border-bottom: 1rpx #EEEEEE solid;
		padding: 30rpx;
		height: 100rpx;
	}
	
</style>
