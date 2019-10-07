<template>
    <div class="common">
        <el-input
            placeholder="请输入您要搜索的内容"
            v-model="pageData.searchData"
            :autofocus="true"
            @input="searchInput"
            @keyup.enter.native="searchEnter"
            clearable
            class="search">
        </el-input>

        <div class="content clearfix">
            <div class="content_right">
                <div class="synopsis">
                    <!-- s_bg 背景 -->
                    <img class="s_bg" src="~/assets/images/index/index/images/banner.png" alt="背景墙的图片">
                    <img class="s_head_portrait" src="~/assets/images/index/index/images/avatar.jpg" alt="头像">
                    <div class="s_content">
                        <h2>{{ personalInformation.alias }} | {{ personalInformation.name }}</h2>
                        <h3>- {{ personalInformation.occupation }} -</h3>
                        <p>{{ personalInformation.synopsis }}</p>
                    </div>
                </div>
                <category @click="cs" :csdata="csData"></category>
            </div>
            <div class="content_left" ref="content_left">
                <div class="cl_box" v-for="data in article" :key="data.id">
                    <div class="clb_top clearfix">
                        <img src="~/assets/images/index/index/images/text02.jpg" alt="">
                        <div class="clbt_right">
                            <h2>{{ data.title }}</h2>
                            <p>
                                {{ data.synopsis }}
                            </p>
                        </div>
                    </div>
                    <div class="clb_bottom clearfix">
                        <div class="clbb_left">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-icon"></use>
                            </svg>
                            <span>{{ data.classname }}</span>
                            &nbsp;
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-shengri-copy"></use>
                            </svg>
                            <span>{{ data.createtime | formatDate('YYYY-MM-DD')}}</span>
                            &nbsp;
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-liulan"></use>
                            </svg>
                            <a>浏览（<span>{{ data.read }}</span>）</a>
                        </div>
                        <span @click="clickRead(data.id)">阅读全文</span>
                    </div>
                </div>
                <div v-if="pageData.tips !== ''" class="tips">{{ pageData.tips }}</div>
            </div>
        </div>
    </div>
</template>

<script>
// 导入 category
import category from '@/components/public/category'

export default {
	name: 'common',
	components: {
		category
	},
	data() {
		return {
			article: [], // 文章数据
			personalInformation: {}, // 个人信息数据
			lock: true, // 锁,为了手动防止删除搜索时,跳转到搜索页面
			pageData: {
				currentPage: 2, // 当前页（由于默认第一次获取5条数据，所以从5开始
				pageSize: 5, // 每页条数
				orderBy: 'descending', // 排序方式
				lock: true, // 锁,为了防止多次请求，得到响应后再开启请求
				tips: '', // 提示
				searchData: '' // 搜索内容
			},
			csData: 'cc'
		}
	},
	created() {
		this.loadData() // 加载数据
		this.tips() // 友情提示
	},
	mounted() {
		this.scroll()
	},
	computed: { // 配合 switch 监听对象中某一特定值
		searchData() {
			return this.pageData.searchData
		}
	},
	methods: {
		async loadData() { // 加载数据
			const { data } = await this.$http.get('index') // 发送请求,获取数据
			this.article = data.article // 将获取到的文章数据赋值给 vue
			this.personalInformation = data.personalInformation // 将获取到的个人信息数据赋值给 vue
		},
		async searchFn() { // 搜索内容
			const { data } = await this.$http.post('searchData', { searchData: this.pageData.searchData })
			if (data.getData.status === 200) {
				this.article = data.getData.data // 显示内容
				// 给出提示
				this.$message({
					message: `搜索到与 "${this.pageData.searchData}" 相关的数据共有 ${data.getNumber} 条!`,
					type: 'success'
				})
			} else if (this.lock) {
				this.lock = false // 关闭锁
				// 给出提示
				this.$message({
					message: data.getData.msg + '即将跳转百度搜索!',
					type: 'warrning',
					data: this.pageData.searchData, // 把数据存储在这
					duration: 3000, // 缩短时间，提高用户体验
					onClose: function (message) { // 参数为message实例,所以想要获取数据,则必须将数据以以上方式存储
						window.open(`https://www.baidu.com/s?wd=${message.data}`, '_blank')
					}
				})
			}
			this.$refs.content_left.scrollTop = 0 // 重置内容元素向上卷曲的距离
			this.pageData.currentPage = 2 // 重置当前页
			this.pageData.tips = '' // 重置提示
		},
		searchInput() { // 输入搜索hui
			// 为了不让用户输入字母数字时,没有数据时,出现多次跳转搜索页面
			if (!/[0-9a-zA-Z]+/.test(this.pageData.searchData)) { // 如果输入有数字字母则不执行
				this.searchFn() // 搜索内容
			}
		},
		searchEnter() { // 回车搜索
			this.lock = true // 关闭锁
			this.searchFn() // 搜索内容
		},
		scroll() { // 页面滚到底部(懒加载)
			const ele = this.$refs.content_left // 获取左边容器
			const that = this // 保存 this
			ele.onscroll = async function () {
				// clientHeight 可见区域的高度（不加边线）
				// scrollTop 滚动条卷上去的高度
				// scrollHeight 元素的总高度
				if (this.scrollTop + this.clientHeight >= this.scrollHeight && that.pageData.lock) { // 判断是否置底
					that.pageData.lock = false // 关闭
					const { data } = await that.$http.post(`paging`, that.pageData)
					if (data.getData.status === 200) {
						for (var i = 0; i < data.getData.data.length; i++) {
							that.article.push(data.getData.data[i]) // 将获取到的文章数据赋值给 vue
						}
						that.pageData.currentPage += 1 // 加一页
						that.pageData.lock = true // 开启
					} else {
						that.pageData.tips = data.getData.msg // 当没有数据时, 添加一条提示信息
					}
				}
			}
		},
		cs(data) {
			this.pageData.lock = true // 开启懒加载
			this.$refs.content_left.scrollTop = 0 // 重置内容元素向上卷曲的距离
			this.pageData.currentPage = 2 // 重置当前页
			this.pageData.tips = '' // 重置提示
			if (data.getData.status === 200) {
				this.article = data.getData.data // 更新文章数据
				this.pageData.classname = data.classname // 携带上 classname
				// 给出提示
				this.$message({
					message: `搜索到与 "${this.pageData.classname}" 相关的数据共有 ${data.getNumber} 条!`,
					type: 'success'
				})
			} else {
				// 给出提示
				this.$message({
					message: '暂无数据!',
					type: 'info'
				})
			}
		},
		async clickRead(id) { // 点击阅读全文时执行
			// 跳转文章详情页
			this.$router.push({ path: `/view/article/${id}` })
			// 记录文章阅读数
			await this.$http.get(`recordReadingNumber/${id}`)
		},
		tips() {
			this.$message({
				message: '目前此网站正在建设中~'
			})
		}
	},
	watch: {
		searchData: function (newQuestion, oldQuestion) { // 配合计算属性,监听对象中特定的值
			this.pageData.lock = true
		}
	}
}
</script>

<style scoped lang="scss" src="~/assets/scss/page/view/article/index.scss"></style>
