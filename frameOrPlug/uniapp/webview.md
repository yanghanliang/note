<template>
	<view class="main">
		<view class="toppanel">
			<view class="gonggao">
				<image src="/static/main/laba.png" class="labaimg" mode=""></image>
				<view class="gonggaotxt">
					<text>{{curGonggao}}</text>
				</view>
			</view>
		</view>
		<w-loading text="Loading.." mask="true" click="true" ref="loading"></w-loading>
		<view class="imgdiv"></view>
		<view class="top2">
		</view>
	</view>
</template>

<script>
	export default {
		watch:{
			'pageInfo.isBottom': function(newVal) {
				if (newVal) {
					console.log('show')
					this.wv.show();
					return;
				}

				console.log('hide')
				this.wv.hide();
			}
		},
		data() {
			return {
				webview: {
					height: 400,
				},
				pageInfo: {
					isBottom: false,
					scrollTop: 0,
				},
				wv: '',
			}
		},
        // 页面滚动事件
        onPageScroll ({ scrollTop }) {
			if (this.pageInfo.isBottom && (this.pageInfo.scrollTop - scrollTop > 100)) {
				this.pageInfo.isBottom = false;
			}
			
			if (this.pageInfo.isBottom && this.pageInfo.scrollTop === 0) {
				this.pageInfo.scrollTop = scrollTop;
			}
			
			console.log(this.pageInfo.isBottom, 'bottom')
        },
		onReachBottom(ss) {
			this.pageInfo.isBottom = true;
			console.log(ss, '到底部了')
		},
		onReady() {
			// #ifdef APP-PLUS
			const info = uni.getSystemInfoSync()
			console.log(info, 'pppppppppppppppppppppp', plus.webview.Webview)
            const url = 'hybrid/html/echarts/index.html' // https://www.baidu.com

			this.wv = plus.webview.create(url, "custom-webview", {
				width: '400px',
				height: this.webview.height + 'px',
				plusrequire:"none", //禁止远程网页使用plus的API，有些使用mui制作的网页可能会监听plus.key，造成关闭页面混乱，可以通过这种方式禁止
				'uni-app': 'none', //不加载uni-app渲染层框架，避免样式冲突
			});

			// this.wv.loadURL("/hybrid/html/tradingview/index.html")
			var currentWebview = this.$scope.$getAppWebview(); //此对象相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效，非v3编译模式使用this.$mp.page.$getAppWebview()
			console.log(currentWebview, 'currentWebviewcurrentWebviewcurrentWebviewcurrentWebview')
			currentWebview.append(this.wv);//一定要append到当前的页面里！！！才能跟随当前页面一起做动画，一起关闭
			setTimeout(()=> {
				this.wv.setStyle({ bottom: 0 })
			}, 1000);//如果是首页的onload调用时需要延时一下，二级页面无需延时，可直接获取
			// #endif
		},
		methods: {
			jump(cowsType) {
                // 页面跳转（跳转到tabbar的页面并携带参数，只有这个方法可以做到
				uni.reLaunch({
					url: '/pages/mycows/mycows?cowsType=' + cowsType,
				});
			},
		}
	}
</script>

<style>
	.main {
		padding-bottom: 400px;
		position: relative;
	}
</style>
