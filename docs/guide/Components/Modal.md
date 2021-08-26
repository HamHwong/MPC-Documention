# Modal
## Overview
支持伸缩、移动的窗口

## Example

<script> 
import { onMounted, ref, nextTick, reactive, watch } from 'vue'
export default{
    setup(){
        const modalVisibility = ref(false)
        const url=ref('/static/demo.pdf')
        function handleClose (){
            modalVisibility.value=false;
        } 
        function handleShow(){
            modalVisibility.value=true; 
        }
        return {
            modalVisibility,
            handleClose,
            handleShow,
            url
        }
    }
}
</script>
<Button @click="handleShow">点击开窗</Button>
<MPModal :visible='modalVisibility'  
        @close="handleClose" 
        :position="{x:50,y:100}"  
        draggable 
        resizeable> 
    <MPPdfReader :pdfurl="url"/> 
</MPModal>

## API


### Props
|Props Name|Explanation|Type|Default| 
|:---------|:----------|:---|:------|
|draggable|是否可移动|`Boolean`| `false` |
|resizeable|是否可伸缩|`Number`|`0`|
|width|初始宽度,若未设置,则默认为内容宽度,最小宽度为200px|`Number`,`Null`|`null`|
|height|初始高度,若未设置,则默认为内容高度,最小高度为200px|`Number`,`Null`|`null`|
|maxHeight|最大高度|`Number`,`Null`|`null`| 
|maxWidth|最大宽度|`Number`,`Null`|`null`| 
|position|初始位置|`Object`:{x:`Number`,y:`Number`}|`{x:0,y:0}`| 
|visible|窗口是否可见|`Boolean`|`false`| 
|center|窗口是否居中显示, 若为`true`时`draggable`,`resizeable`失效 |`Boolean`|`false`| 
|tapShadowToClose|点击阴影是否关闭窗口|`Boolean`|`false`| 

### Events
<!-- |Event Name|Explanation|Type|Default| -->

|Event Name|Explanation|
|:----------|:-----------|
|close|窗口关闭时触发|
|display|窗口显示时触发|
