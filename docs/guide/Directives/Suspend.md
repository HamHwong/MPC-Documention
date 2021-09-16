# Suspend 
## Overview
DOM设置为悬浮样式
## Example

  <div style="display:flex">
  <ClientOnly>
      <div
        v-for="i in 5"
        :key="i"
        style="width:100px;
              height:100px;
              box-shadow:0 0 20px #ccc;
              border-radius:10px; 
              margin:10px" 
        v-suspend="i*100+`px`"
      >Perspective: {{ i * 200}} px</div>
    </ClientOnly>
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
      v-suspend="`${ i * 200 } px`"
    >Perspective: {{ i * 200}} px</div>
  </div> 
```
## API
### Directives Props
|Directives|Explanation|Default|
|:----------|:-----------|:---|
|v-suspend| Mark and suspend content, `String`value will set the perspective | `800px` |