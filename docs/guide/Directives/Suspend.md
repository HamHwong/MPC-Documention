# Suspend 
## Overview
DOM设置为悬浮样式
## Example

  <div style="display:flex">
    <div
      v-for="i in 5"
      :key="i"
      style="width:100px;
            height:100px;
            box-shadow:0 0 20px #ccc;
            border-radius:10px;
            margin:10px" 
      v-suspend
    ></div>
  </div> 

```vue
  <div style="display:flex">
    <div
      v-for="i in 5"
      :key="i"
      style="width:100px;
            height:100px;
            box-shadow:0 0 20px #ccc;
            border-radius:10px;margin:10px" 
      v-suspend
    ></div>
  </div> 
```
## API
### Directives Props
|Directives|Explanation|
|:----------|:-----------|
|v-suspend| Mark and suspend content |