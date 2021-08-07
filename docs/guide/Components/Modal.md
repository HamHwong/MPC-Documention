# Modal

## Overview

## Example


<script setup> 
import { ref } from '@vue/reactivity';  
const modalVisibility = ref(false)
function handleClose (){
    modalVisibility.value=false;
} 
</script>
<div @click="modalVisibility=true">{{modalVisibility}}</div>
<MPModal :visible='true' @close="handleClose" draggable resizeable >aa</MPModal> 

## API

### Props

### Data Props

### Events
