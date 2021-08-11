# isElementInViewport

## Overview

DOM 设置为悬浮样式

## Example

<script>  
import { onMounted, ref, nextTick, reactive, watch } from 'vue'
import MPC from '@mpanda/mpc'
export default{
  setup(){
    const isInViewPort = ref(false)
    const el = ref(null)
    function handleWheel(e){ 
      // console.log(e.target,el.value)
      isInViewPort.value = MPC.utils.isElementInViewport(e.target,el.value)
    }
 
    return {
      el,
      handleWheel,
      isInViewPort
    }
  }
}
</script>
<div>
  <span>是否显示:{{ isInViewPort }}</span> 
  <div id="C" @wheel="handleWheel" style="width:50%;height:300px;background-color:#333;overflow-y:auto;color:#fff;" >
    <div style="margin:0 auto;text-align:center;">往下滑</div>
    <div id="T" ref="el" style="width:50px;height:50px;background-color:#fff;margin-top:1000px;margin-bottom:1000px;margin-left:auto;margin-right:auto;font-size:8px;text-align:center;color:#333;box-shadow:rgb(204 204 204) 0px 0px 20px;border-radius:10px">
    到了
    </div>
  </div> 
</div>

```vue
<template>
<div>
  <span>{{ isInViewPort }}</span> 
  <div @wheel="handleWheel" 
  style="width:50%;
        height:300px;
        background-color:#333;
        overflow-y:auto;
        color:#fff;" >
    <div 
      style="width:50px;
            height:50px;
            background-color:#fff;
            margin-top:1000px;
            margin-bottom:1000px;
            margin-left:auto;
            margin-right:auto;
            font-size:8px;
            text-align:center;
            box-shadow:rgb(204 204 204) 0px 0px 20px;
            border-radius:10px">
    到了
    </div>
  </div> 
</div>
</template>
<script>
import { ref } from 'vue';  
import MPC from '@mpanda/mpc'
export default{
  setup(){
    const isInViewPort = ref(false)
    const el = ref(null)
    function handleWheel(e){ 
      isInViewPort.value = MPC.utils.isElementInViewport(e.target,el.value)
    } 
    return {
      el,
      handleWheel,
      isInViewPort
    }
  }
}
</script>
```