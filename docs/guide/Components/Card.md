# Card 卡片
## Overview
基础卡片组件,

附带多个卡片模版, 

也可自定义使用
## Example 
### Basic
<div style="width:100%;
            background-color:#fff;
            box-sizing:content-box;">
  <MPCard> This is Basic Card </MPCard> 

  <MPCard style="background-color:#fff;margin-top:15px;">

  <div style="font-weight:bold;font-size:30px;text-align:center;">You can custom your own card.</div>

  <MPCard style="width:60%;margin:0 auto;padding:10px;"> This is Basic Card </MPCard> 

  </MPCard> 
</div>

```vue 
<div style="width:100%;
            background-color:#fff;
            box-sizing:content-box;">
  <MPCard> This is Basic Card </MPCard>  
  <MPCard style="background-color:#fff;
                margin-top:15px;"> 
    <div style="font-weight:bold;
                font-size:30px;
                text-align:center;">
                  You can custom your own card.
                </div> 
    <MPCard style="width:60%;
                margin:0 auto;
                padding:10px;"> 
      This is Basic Card 
    </MPCard> 
  </MPCard> 
</div>
```

### Templates

#### 1. User Info Card

<div style="display:flex;
        flex-wrap: wrap;
        width :50%;
        margin-top:20px;">
  <MPCard type="userinfo" :avatarPosition="`left`" style="width:100%;">
    <template #title>title</template>
    <template #content>content</template>
    <template #others>others</template>
  </MPCard>
</div>

```vue 
<div style="display:flex;
        flex-wrap: wrap;
        width :50%;
        margin-top:20px;">
  <MPCard type="userinfo" :avatarPosition="`left`"  style="width:100%;">
    <template #title>title</template>
    <template #content>content</template>
    <template #others>others</template>
  </MPCard>
</div>
```

#### 2. Bank Card
<div style="flex-wrap: nowrap;
      overflow-x: auto;
      padding: 20px;">
  <div style="width:1100px;
      display: flex;">
    <MPCard
      :radius="`20px`"
      type="bankCard"
      style="width:350px;height:200px" 
      :bgBlur="false"
    >
      <template #header>
        <div
          style="display:flex;justify-content: space-between;flex:1; align-items: center;"
        >
          <span style="font-size:12px;">WORD ELITE</span>
          <span>
            <img
              src="/images/mastercard/wave.png"
              :width="15" 
            />
          </span>
        </div>
      </template>
      <template #avatar>
        <img
          src="/images/mastercard/mastercard.png"
          :width="35"
          :height="35"
          style="margin:0px 5px 0px 0px;"
          alt=""
        />
      </template>
      <template #content>5412 7512 3412 3456</template>
      <template #date
        ><small style="font-size:0.5rem">VALID THAU</small> 12/23</template
      >
      <template #others
        ><small style="font-size:12px">LEE M. CARDHOLDER</small></template
      >
    </MPCard> 
    <MPCard
      :radius="`20px`"
      type="bankCard"
      style="width:350px;height:200px"
      backgroundImage='/images/img.jpg'
    >
      <template #header>
        <div
          style="display:flex;justify-content: space-between;flex:1; align-items: center;"
        >
          <span style="font-size:12px">WORD ELITE</span>
          <span>
            <img
              src="/images/mastercard/wave.png"
              :width="15" 
            />
          </span>
        </div>
      </template>
      <template #avatar> 
        <img
          src="/images/mastercard/mastercard.png"
          :width="35"
          :height="35"
          style="margin:0px 5px 0px 0px;"
          alt=""
        />
      </template>
      <template #content>5412 7512 3412 3456</template>
      <template #date
        ><small style="font-size:0.5rem">VALID THAU</small> 12/23</template
      >
      <template #others
        ><small style="font-size:12px">LEE M. CARDHOLDER</small></template
      >
    </MPCard>
    <MPCard
      :radius="`20px`"
      type="bankCard"
      style="width:350px;height:200px" 
      :bgBlur="false"
    >
      <template #header>
        <div
          style="display:flex;justify-content: space-between;flex:1; align-items: center;"
        >
          <span style="font-size:12px">WORD ELITE</span>
          <span>
            <img
              src="/images/mastercard/wave.png"
              :width="15" 
            />
          </span>
        </div>
      </template>
      <template #avatar> 
        <img
          src="/images/mastercard/mastercard.png"
          :width="35"
          :height="35"
          style="margin:0px 5px 0px 0px;"
          alt=""
        />
      </template>
      <template #content>5412 7512 3412 3456</template>
      <template #date
        ><small style="font-size:0.5rem">VALID THAU</small> 12/23</template
      >
      <template #others
        ><small style="font-size:12px">LEE M. CARDHOLDER</small></template
      >
    </MPCard>
  </div>
</div>

```vue
<div style="flex-wrap: nowrap;
      overflow-x: auto;
      padding: 20px;">
  <div style="width:1100px;
      display: flex;">
    <MPCard
      :radius="`20px`"
      type="bankCard"
      style="width:350px;height:200px" 
      :bgBlur="false"
    >
      <template #header>
        <div
          style="display:flex;justify-content: space-between;flex:1; align-items: center;"
        >
          <span style="font-size:12px;">WORD ELITE</span>
          <span>
            <img
              src="/images/mastercard/wave.png"
              :width="15" 
            />
          </span>
        </div>
      </template>
      <template #avatar>
        <img
          src="/images/mastercard/mastercard.png"
          :width="35"
          :height="35"
          style="margin:0px 5px 0px 0px;"
          alt=""
        />
      </template>
      <template #content>5412 7512 3412 3456</template>
      <template #date
        ><small style="font-size:0.5rem">VALID THAU</small> 12/23</template
      >
      <template #others
        ><small style="font-size:12px">LEE M. CARDHOLDER</small></template
      >
    </MPCard> 
    <MPCard
      :radius="`20px`"
      type="bankCard"
      style="width:350px;height:200px"
      backgroundImage='/images/img.jpg'
    >
      <template #header>
        <div
          style="display:flex;justify-content: space-between;flex:1; align-items: center;"
        >
          <span style="font-size:12px">WORD ELITE</span>
          <span>
            <img
              src="/images/mastercard/wave.png"
              :width="15" 
            />
          </span>
        </div>
      </template>
      <template #avatar> 
        <img
          src="/images/mastercard/mastercard.png"
          :width="35"
          :height="35"
          style="margin:0px 5px 0px 0px;"
          alt=""
        />
      </template>
      <template #content>5412 7512 3412 3456</template>
      <template #date
        ><small style="font-size:0.5rem">VALID THAU</small> 12/23</template
      >
      <template #others
        ><small style="font-size:12px">LEE M. CARDHOLDER</small></template
      >
    </MPCard>
    <MPCard
      :radius="`20px`"
      type="bankCard"
      style="width:350px;height:200px" 
      :bgBlur="false"
    >
      <template #header>
        <div
          style="display:flex;justify-content: space-between;flex:1; align-items: center;"
        >
          <span style="font-size:12px">WORD ELITE</span>
          <span>
            <img
              src="/images/mastercard/wave.png"
              :width="15" 
            />
          </span>
        </div>
      </template>
      <template #avatar> 
        <img
          src="/images/mastercard/mastercard.png"
          :width="35"
          :height="35"
          style="margin:0px 5px 0px 0px;"
          alt=""
        />
      </template>
      <template #content>5412 7512 3412 3456</template>
      <template #date
        ><small style="font-size:0.5rem">VALID THAU</small> 12/23</template
      >
      <template #others
        ><small style="font-size:12px">LEE M. CARDHOLDER</small></template
      >
    </MPCard>
  </div>
</div>
```

## API
### Props
|Props Name|Explanation|Type|Default| 
|:---------|:----------|:---|:------|
|value|The source data of carousel|`Array`|`[]`|
|height|The height of carousel|`String`|`300px`|
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