# PDFReader PDF阅读器
## Overview
基于PDFjs-dist开发，简单的PDF阅读器。
## Example
<MPPdfReader :pdfurl="url" @pageChanged="handlePageChanged"/>
<script setup>
  const url='/static/demo.pdf'
  function handlePageChanged (page, Instance) {
    // Your code here...
    console.log(page,Instance)
  }
</script>
```vue
<template>
  <MPPdfReader 
    @pageChanged="handlePageChanged" 
    :pdfurl="url"
  />
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
  setup(){
    const url=ref('/static/demo.pdf')
    function handlePageChanged (page, Instance) {
      // Your code here...
    } 
    return {
      url,
      handlePageChanged
    }
  }
}
</script>


```
## API
### Props
|Props Name|Explanation|Type|Default| 
|:---------|:----------|:---|:------|
|pdfurl|The path of pdf|`String`| |
|width|the initial width of PDF|`Number`|`0`|
|height|the initial height of PDF|`Number`|`0`|
|maxHeight|the max-width of PDF|`Number`|`950`|
|minHeight|the max-height of PDF|`Number`|`450`| 

### Events
<!-- |Event Name|Explanation|Type|Default| -->

|Event Name|Explanation|Return Value|
|:----------|:-----------|:------------|
|pageChanged|Triggered by page changed| `page`,`Instance` | 