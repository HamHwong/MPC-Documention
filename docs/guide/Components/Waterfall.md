# Modal
## Overview
瀑布流

## Example
<div style="overflow-y:auto;height:500px;width:700px;margin:20px">
    <MPWaterFall column="3" type="center">
        <MPCard
            :radius="`10px`"
            type="gallery"
            style="margin:5px"
            v-for="i in 20"
            :key="i"
            :image="`/images/img${i % 4 == 0 || i % 4 == 1 ? '' : i % 4}.jpg`"
        >
            <div style="padding:10px;position:relative">
                <div>
                    <i>
                    <font-awesome-icon :icon="['far', 'heart']" />
                    </i>
                </div>
                <div>
                    Name
                </div>
            </div>
        </MPCard>
    </MPWaterFall>
</div>

```vue
<div style="overflow-y:auto;height:500px;width:700px;margin:20px">
    <MPWaterFall column="3" type="center">
        <MPCard
            :radius="`10px`"
            type="gallery"
            style="margin:5px"
            v-for="i in 20"
            :key="i"
            :image="`/images/img${i % 4 == 0 || i % 4 == 1 ? '' : i % 4}.jpg`"
        >
            <div style="padding:10px;position:relative">
                <div>
                    <i>
                    <font-awesome-icon :icon="['far', 'heart']" />
                    </i>
                </div>
                <div>
                    Name
                </div>
            </div>
        </MPCard>
    </MPWaterFall>
</div>
```
## API


### Props
|Props Name|Explanation|Type|Default| 
|:---------|:----------|:---|:------|
|column|列数|`Number`| `3` |
|height|高度|`String`| `100%` |
|type|瀑布流对齐方式,包括[`'around'`,`'between'`,`'unset'`,`'center'`,`'evenly'`]|`string`|`0`|


### Events
<!-- |Event Name|Explanation|Type|Default| -->

|Event Name|Explanation|
|:----------|:-----------|
| | |
| | |
