# Tooltips
## Overview
 根据挂载DOM的长宽和Content内容长宽自动选择显示方向的Tooltips.
## Example

  <div>
    <span v-tooltips>鼠标</span>
  </div> 
  <div 
  style="display:flex;
        justify-content:flex-end;">
    <span v-tooltips="`自定义内容`">鼠标</span>
  </div>  
  <div v-tooltips="`自定义内容`" 
  style="display:flex;
        justify-content: flex-end;width:100px;
        height:100px;
        box-shadow:0 0 20px #ccc;
        border-radius:10px;
        margin:10px">
  鼠标
  </div> 

```vue
<template>
  <div>
    <span v-tooltips>鼠标</span>
  </div>
  <div style="display:flex;justify-content: flex-end;">
    <span v-tooltips="`自定义内容`">鼠标</span>
  </div>
</template>
```
## API

### Directives Props
|Directives|Explanation|Value|
|:----------|:-----------|:------------|
|v-tooltips|Mark and display content, if left it blank, tooltips will show inner text | `Optional` | 