# Start 起步

## Installation 安装
```shell
npm install @mpanda/mpc -S
```

```shell
cnpm install @mpanda/mpc -S
```

```shell
yarn add @mpanda/mpc -S
```
## Usage 使用

```js 
import { createApp } from 'vue'
import MPC from '@mpanda/mpc' 
import '@mpanda/mpc/lib/mpc.css'
import App from './App.vue'
const Vue = createApp(App)
Vue.use(MPC)
Vue.mount('#app')
```
