### 组件跳转不刷新页面

```js

this.$router.push(obj.router)

```

---

### 监听路由的变化

```js

watch: {
    $route: {
        handler: function(route) {
            this.routerChange(route)
        },
        // deep: true
    }
}

```