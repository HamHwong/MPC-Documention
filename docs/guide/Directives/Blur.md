# Blur 
## Overview
DOM设置为毛玻璃效果,

注意容器需要设置背景
## Example
<div style="background:url(/images/img2.jpg) no-repeat;background-size:cover;">
  <div style="
  width:100px;
  height:100px;
  box-shadow:0 0 20px #ccc;
  border-radius:10px;
  margin:10px"
  v-blur>
  ssss
  </div>
</div>

```vue
 
```
## API
### Directives Props
|Directives|Explanation|Default|
|:----------|:-----------|:---|
|v-suspend| Mark and suspend content, `String`value will set the perspective | `800px` |