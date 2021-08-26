# Card 卡片
## Overview
基础卡片组件,

附带多个卡片模版, 

也可自定义内容
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

<div style="display: flex; flex-wrap: wrap; width: 50%; margin: 20px auto;">
  <MPCard type="userinfo" :avatarPosition="`left`" style="width: 100%">
    <template #title>title</template>
    <template #content>content</template>
    <template #others>others</template>
  </MPCard>
</div>


```vue 
<div style="display: flex; flex-wrap: wrap; width: 50%; margin: 20px auto;">
  <MPCard type="userinfo" :avatarPosition="`left`" style="width: 100%">
    <template #title>title</template>
    <template #content>content</template>
    <template #others>others</template>
  </MPCard>
</div>
```
<div style="display: flex; flex-wrap: wrap; width: 50%; margin: 20px auto;">
  <MPCard avatar="/images/avatar/default-avatar.png" type="userinfo" :avatarPosition="`right`" style="width: 100%">
    <template #title>title</template>
    <template #content>content</template>
    <template #others>others</template>
  </MPCard>
</div>

```vue 
<div style="display: flex; flex-wrap: wrap; width: 50%; margin: 20px auto;">
  <MPCard type="userinfo" :avatarPosition="`right`" style="width: 100%">
    <template #title>title</template>
    <template #content>content</template>
    <template #others>others</template>
  </MPCard>
</div>
```


#### 2. Bank Card

<div>
  <MPCard type="bankCard" style="width: 350px; height: 200px" >
    <template #header>> Header</template>
    <template #avatar>> Logo</template>
    <template #content>> Content</template>
    <template #date>> Date</template>
    <template #others>> Others</template>
  </MPCard>
</div>

```vue
<div>
  <MPCard type="bankCard" style="width: 350px; height: 200px" >
    <template #header>> Header</template>
    <template #avatar>> Logo</template>
    <template #content>> Content</template>
    <template #date>> Date</template>
    <template #others>> Others</template>
  </MPCard>
</div>
```

<div>
  <MPCard :radius="`20px`"
          type="bankCard"
          style="width: 350px; height: 200px"
          :bgBlur="false">
    <template #header>
      <div style="
          display: flex;
          justify-content: space-between;
          flex: 1;
          align-items: center;
        ">
        <span style="font-size: 12px">WORD ELITE</span>
        <span>
          <img src="/images/mastercard/wave.png"
                :width="15" />
        </span>
      </div>
    </template>
    <template #avatar>
      <img src="/images/mastercard/mastercard.png"
            :width="35"
            :height="35"
            style="margin: 0px 5px 0px 0px"
            alt="" />
    </template>
    <template #content>5412 7512 3412 3456</template>
    <template #date><small style="font-size: 0.5rem">VALID THAU</small> 12/23</template>
    <template #others><small style="font-size: 12px">LEE M. CARDHOLDER</small></template>
  </MPCard>
</div>

```vue
<div>
  <MPCard :radius="`20px`"
          type="bankCard"
          style="width: 350px; height: 200px"
          :bgBlur="false">
    <template #header>
      <div style="
          display: flex;
          justify-content: space-between;
          flex: 1;
          align-items: center;
        ">
        <span style="font-size: 12px">WORD ELITE</span>
        <span>
          <img src="/images/mastercard/wave.png"
                :width="15" />
        </span>
      </div>
    </template>
    <template #avatar>
      <img src="/images/mastercard/mastercard.png"
            :width="35"
            :height="35"
            style="margin: 0px 5px 0px 0px"
            alt="" />
    </template>
    <template #content>5412 7512 3412 3456</template>
    <template #date><small style="font-size: 0.5rem">VALID THAU</small> 12/23</template>
    <template #others><small style="font-size: 12px">LEE M. CARDHOLDER</small></template>
  </MPCard>
</div>
```

<div>
  <MPCard :radius="`20px`"
          type="bankCard"
          style="width: 350px; height: 200px; color: #fff;"
          backgroundImage="/images/img.jpg"
          :bgBlur="false">
    <template #header>
      <div style="
          display: flex;
          justify-content: space-between;
          flex: 1;
          align-items: center;
        ">
        <span style="font-size: 12px">WORD ELITE</span>
        <span>
          <img src="/images/mastercard/wave.png"
                :width="15" />
        </span>
      </div>
    </template>
    <template #avatar>
      <img src="/images/mastercard/mastercard.png"
            :width="35"
            :height="35"
            style="margin: 0px 5px 0px 0px"
            alt="" />
    </template>
    <template #content>5412 7512 3412 3456</template>
    <template #date><small style="font-size: 0.5rem">VALID THAU</small> 12/23</template>
    <template #others><small style="font-size: 12px">LEE M. CARDHOLDER</small></template>
  </MPCard>
</div>

```vue
<div>
  <MPCard :radius="`20px`"
          type="bankCard"
          style="width: 350px; height: 200px; color: #fff;"
          backgroundImage="/images/img.jpg"
          :bgBlur="false">
    <template #header>
      <div style="
          display: flex;
          justify-content: space-between;
          flex: 1;
          align-items: center;
        ">
        <span style="font-size: 12px">WORD ELITE</span>
        <span>
          <img src="/images/mastercard/wave.png"
                :width="15" />
        </span>
      </div>
    </template>
    <template #avatar>
      <img src="/images/mastercard/mastercard.png"
            :width="35"
            :height="35"
            style="margin: 0px 5px 0px 0px"
            alt="" />
    </template>
    <template #content>5412 7512 3412 3456</template>
    <template #date><small style="font-size: 0.5rem">VALID THAU</small> 12/23</template>
    <template #others><small style="font-size: 12px">LEE M. CARDHOLDER</small></template>
  </MPCard>
</div>
```

<div>
  <MPCard :radius="`20px`"
          type="bankCard"
          style="width: 350px; height: 200px">
    <template #header>
      <div style="
          display: flex;
          justify-content: space-between;
          flex: 1;
          align-items: center;
        ">
        <span style="font-size: 12px">WORD ELITE</span>
        <span>
          <img src="/images/mastercard/wave.png"
                :width="15" />
        </span>
      </div>
    </template>
    <template #avatar>
      <img src="/images/mastercard/mastercard.png"
            :width="35"
            :height="35"
            style="margin: 0px 5px 0px 0px"
            alt="" />
    </template>
    <template #content>5412 7512 3412 3456</template>
    <template #date><small style="font-size: 0.5rem">VALID THAU</small> 12/23</template>
    <template #others><small style="font-size: 12px">LEE M. CARDHOLDER</small></template>
  </MPCard>
</div>

```vue
<div>
  <MPCard :radius="`20px`"
          type="bankCard"
          style="width: 350px; height: 200px">
    <template #header>
      <div style="
          display: flex;
          justify-content: space-between;
          flex: 1;
          align-items: center;
        ">
        <span style="font-size: 12px">WORD ELITE</span>
        <span>
          <img src="/images/mastercard/wave.png"
                :width="15" />
        </span>
      </div>
    </template>
    <template #avatar>
      <img src="/images/mastercard/mastercard.png"
            :width="35"
            :height="35"
            style="margin: 0px 5px 0px 0px"
            alt="" />
    </template>
    <template #content>5412 7512 3412 3456</template>
    <template #date><small style="font-size: 0.5rem">VALID THAU</small> 12/23</template>
    <template #others><small style="font-size: 12px">LEE M. CARDHOLDER</small></template>
  </MPCard>
</div>
```

## API
### Props
|Props Name|Explanation|Type|Default| 
|:---------|:----------|:---|:------|
|radius| 卡片圆角弧度 |`String`|`'10px'`|
|type| 适用预设,目前有以下主题[`'bankCard'`,`'userInfo'`],留空则为默认纯白卡片 |`String`| `null` | 
|avatar| 当`type`为[`'userInfo'`]时设置有效,传入图片url或base64,作为头像显示 |`String`| `null` | 
|avatarPosition| 当`type`为[`'userInfo'`]时设置有效,设置头像位置,可设为[`left`,`right`] |`String`|`'left'`| 
|backgroundImage| 当`type`为[`'bankCard'`]时设置有效,传入图片url或base64,作为背景图片显示,背景图片显示模式为Cover,当`type`为`bankCard`且当前值不设置时,默认生成彩球图片 |`String`| `null`| 
|bgBlur| 当`type`为[`'bankCard'`]时设置有效, 是否开启背景模糊模式 |`Boolean`|`true`|  