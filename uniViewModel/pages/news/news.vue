<template>
	<view>
		<view class="">
			<view class="title" style="text-align: center;">
				<view>{{press.title}}</view>
			</view>
			
			<view class="">
				<view class="">
					<image :src="ip + press.cover" mode="widthFix" style="width: 100%;"></image>
				</view>
				<u-parse :html="press.content"></u-parse>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				press:{},
				id:0
			}
		},
		methods: {
			getPress() {
				const res = this.$request({
					url: "/prod-api/press/press/" + this.id
				}).then((res) => {
					this.press = {}
					this.press = res.data.data
					this.press.content = this.press.content.replace(new RegExp('<img src="/','ig'),'<img src="' + this.ip + "/")
				})
			}
		},
		onLoad(option) {
			this.id = option.id
			this.getPress()
		}
	}
</script>

<style>

</style>
