# Modal

## Overview

## Example

<script> 
import { onMounted, ref, nextTick, reactive, watch } from 'vue'
export default{
    setup(){
        const modalVisibility = ref(false)
        function handleClose (){
            modalVisibility.value=false;
        } 
        function handleShow(){
            modalVisibility.value=true; 
        }
        return {
            modalVisibility,
            handleClose,
            handleShow
        }
    }
}
</script>
<div @click="handleShow">{{modalVisibility}} {{typeof modalVisibility}}</div>
<MPModal :visible='modalVisibility'  @close="handleClose" draggable resizeable>aa</MPModal>

## API

### Props

### Data Props

### Events
