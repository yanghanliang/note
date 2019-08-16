import axios from 'axios'

export default function ({ route }) {
    console.log('路由中间件', route)
    console.log('--------------------')
    // axios.get('http://localhost:3305/posts').then((res)=> {
    //     console.log(res)
    // }).catch((e) => {
    //     console.log(e)
    // })

}