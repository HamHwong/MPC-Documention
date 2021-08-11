# Configuration 文件配置

<div>
  <div :class="{show:show,block:!show}">{{show}}</div>
  {{show}}
  <button @click="()=>show=true">Click</button>
</div> 

<script>
import './css/index.css';
import { ref } from 'vue';
export default{
  setup(){
    const show = ref(false)
    return {
      show
    }
  }
}
</script>
