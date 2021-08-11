# Carousel 轮播图
## Overview
用翻牌展示图片信息，在IE上加载不出来的，别试了

组件最小宽度会设置为2倍图片最大宽度, 请留好足够空间

尽量单组件控制在50张以内，之后再优化。
## Example
<script setup>
import { onMounted, ref, nextTick, reactive, watch } from 'vue'
  const isShow = ref(false)
  const data = reactive([{
      order: 1, 
      pic: '/images/img.jpg',
      width: 300,
    },
    {
      order: 2, 
      pic: '/images/img2.jpg', 
      width: 300,
    },
    {
      order: 3, 
      pic: '/images/img3.jpg', 
      width: 300,
    },
    {
      order: 4, 
      pic: '/images/img.jpg', 
      width: 300,
    }])
    onMounted(()=>{
      isShow.value = true
    })
  function handleClick ($event, item, index) { 
    console.log($event, item, index) 
    // isShow.value = false
    // nextTick(()=>{
    //   data.push({
    //     order: data.length+1, 
    //     pic: '/images/img.jpg', 
    //     width: 300,
    //   })
    //   isShow.value = true
    // })
  } 
</script>
<div style="width:100%;
            background-color:#ccc;
            box-sizing:content-box;">
  <MPCarousel v-if="isShow" indicators @click="handleClick" :value="data" /> 
</div>

```vue
<template>
  <MPCarousel @click="handleClick" :value="data" />
</template>
<script>
import { reactive, ref } from 'vue'
export default {
  setup() {
    function handleClick($event, item, index) {
      console.log($event, item, index)
    }
    const data = reactive([
      {
        order: 1, 
        pic: '/images/img.jpg',
        width: 300,
      },
      {
        order: 2, 
        pic: '/images/img2.jpg', 
        width: 300,
      },
      {
        order: 3, 
        pic: '/images/img3.jpg', 
        width: 300,
      },
      {
        order: 4, 
        pic: '/images/img.jpg', 
        width: 300,
      }
    ])
    return {
      data,
      handlePageChanged,
    }
  },
}
</script>
```
## API
### Props
|Props Name|Explanation|Type|Default| 
|:---------|:----------|:---|:------|
|value|The source data of carousel|`Array`|`[]`|
|indicators|If show the indicators at the bottom of slides|`Boolean`|`false`|
### Data Props
|Data Props Name|Explanation|Type|Default|Required|
|:--------------|:----------|:---|:------|:-------|
|pic|The `URL` of image|`String`|`''`|`Required`|
|width|Display width of image, if left it unset, the pic will show as original size. if set only width without height, the height will automatically fit the scale|`Number`| |`Optional`|
|height|Display height of image, if set width and left height unset, the pic will show as original size.|`Number`| |`Optional`|
|order|The slides will shows in ascending order|`Number`| |`Optional`|

### Events
<!-- |Event Name|Explanation|Type|Default| -->

|Event Name|Explanation|Return Value|
|:----------|:-----------|:------------|
|click|Click event, triggered when you click the actived slice.| `$event` ,`item`,`index`, for `Click Event`,`Clicked Object`,`Index of the Clicked Object` |
|pause|Emit while carousel paused, specific means when mouse over the slide|`index`, current index of the paused slide|
|continue|Emit when carousel resume, specific means when mouse out of the slide|`index`, current index of the resuming slide|
|next|Emit when carousel turn to next page|`index`, the index of the turning slide|
|previous|Emit when carousel turn to previous page|`index`, the index of the turning slide|