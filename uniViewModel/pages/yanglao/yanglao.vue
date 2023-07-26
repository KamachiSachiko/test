<template>
	<view>
		<view class="" style="padding: 20rpx;background-color: #FFFFFF;">
			<u-search v-model="keyword" :animation="true" shape="square"></u-search>
		</view>
		
		<view class="" style="padding: 20rpx;background-color: #FFFFFF;">
			<u-swiper :list="banner" name="advImg" ></u-swiper>
		</view>
		
		<view class="title" style="padding: 10rpx;background-color: #FFFFFF;margin-top: 1rpx;">
		</view>
		
		<view class="">
			<u-grid col="5" :border="false">
				<u-grid-item v-for="(item,index) in service" @click="goService(item.serviceName)">
					<view class="Center">
						<view class="Center"
							style="width: 60rpx;height: 60rpx; border-radius: 30rpx;">
							<image :src="item.imgUrl" mode="" style="width:60rpx;height: 60rpx;border-radius: 30rpx;">
							</image>
						</view>
						<text class="lineOne">{{item.serviceName}}</text>
					</view>
				</u-grid-item>
			</u-grid>
		</view>
		
		<view class="title" style="padding: 10rpx;background-color: #FFFFFF;margin-top: 1rpx;">
			<text>推荐机构</text>
		</view>
		
		<view class="">
			<view v-for="(item,index) in press" :key="index" style="margin: 2rpx 0;background-color: #FFFFFF;display: flex;padding: 20rpx;color: #82848A;" >
				<view class="Center">
					<image :src="item.advImg" mode="" style="width: 150rpx;height: 150rpx;border-radius: 10rpx;"></image>
				</view>
				<view class="" style="display: flex;flex-direction: column;flex: 1;color: #82848A;justify-content: space-around;margin-left: 20rpx;">
					<text class="lineOne" style="color: #000000;">{{item.title}}</text>
					<text class="lineTwo">{{item.content}}</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword:"",
				banner:[
					{
						advImg:"../../static/yanglao/banner1.png"
					},
					{
						advImg:"../../static/yanglao/banner2.jpg"
					},
					{
						advImg:"../../static/yanglao/banner3.jpg"
					},
					{
						advImg:"../../static/yanglao/banner4.jpg"
					},
					{
						advImg:"../../static/yanglao/banner5.jpg"
					}
				],
				service:[
					{
						imgUrl:"../../static/yanglao/service1.png",
						serviceName:"健康评估"
					},
					{
						imgUrl:"../../static/yanglao/service2.png",
						serviceName:"预约机构"
					},
					{
						imgUrl:"../../static/yanglao/service3.png",
						serviceName:"入驻办理"
					},
					{
						imgUrl:"../../static/yanglao/service4.png",
						serviceName:"巡检记录"
					},
					{
						imgUrl:"../../static/yanglao/service5.png",
						serviceName:"集中监测"
					}
				],
				press:[
					{
						advImg:"../../static/yanglao/press1.png",
						title:"同辉养老",
						content:"同辉养老（集团）是一家有梦想、有强烈社会责任感的医养健康服务型企业，定位于一家连锁化的医养结合型中高端养老服务品牌。我们坚持以“同辉医养，让长者生命更健康”的根本服务宗旨，以打造“中国一流医养服务品牌”为发展愿景，以“代忙碌儿女尽孝，替孤独父母解愁，为党和政府分忧”为己任，致力于“提供高品质、专业化的医养健康服务，履行社会责任”的企业使命，为离退休长者提供无微不至的“医养康护娱居”一站式服务，像爱自己的孩子一样爱长者，替天下忙碌儿女尽一份爱心，为国家社会贡献一份责任。"
					},
					{
						advImg:"../../static/yanglao/press2.png",
						title:"赣州幸福村智慧养老平台",
						content:"赣州幸福村智慧养老平台养老版块涵盖居家养老和机构养老，其中机构养老包括赣州添立养老院，大公路养老院，水东养老院，蟠龙养老院，赣州三附院永昌院区；居家养老以各机构园区为中心覆盖周边居家养老区域，杰佳通为添立医养建设的智慧健康养老平台，以养老平台为中心，融合居家和机构养老大数据，医养结合的养老模式、虚拟养老院、智慧养老运作模式、养老评估管理系统、慢病管理系统、老人安全保障系统、社区养老管理系统、老年大学系统、志愿者管理系统、养老政府监管平台等等。"
					},
					{
						advImg:"../../static/yanglao/press3.png",
						title:"河北枫叶老年公寓",
						content:"长安区枫叶老年公寓位于动力医院三、四楼,是集医疗、护理、托管、娱乐、康复为一体的大型医疗养老机构,老年公寓将养老和医疗完美结合,让入住的老人在养老的同时加上一份及时的医疗保障。"
					},
					{
						advImg:"../../static/yanglao/press4.png",
						title:"石家庄藁城区盛德老年公寓",
						content:"藁城区盛德老年公寓依据生态养老标准,以园林建筑风格为特色,根据老年人对亲近生态环境,享受自然环境的生活和养生需求开设园林观赏区、休闲区、健身区、种植区等多个特色小园区,让老年人充分融入春天赏花、夏天收菜、秋天摘果、冬天观景的四季风光中.是一家集养老、照护、医疗、康复、文化、娱乐为一体的亲情化老年公寓。"
					},
					{
						advImg:"../../static/yanglao/press5.png",
						title:"新华区银龄老年公寓",
						content:"银龄老年公寓设立于2012年,采用欧式别墅景观设计,可提供床位200张，辅助功能设有活动室、健身房、医务室、心理治疗室、监控中心等"
					}
				]
			}
		},
		methods: {
			goService(name){
				switch(name){
					case "健康评估":{
						uni.navigateTo({
							url:"./f1"
						})
						break;
					}
					case "预约机构":{
						uni.navigateTo({
							url:"./f2"
						})
						break;
					}
					case "入驻办理":{
						uni.navigateTo({
							url:"./f3"
						})
						break;
					}
					case "巡检记录":{
						uni.navigateTo({
							url:"./f4"
						})
						break;
					}
					case "集中监测":{
						uni.navigateTo({
							url:"./f5"
						})
						break;
					}
				}
			}
		}
	}
</script>

<style>
	page{
		background-color: #EEEEEE;
	}
</style>
