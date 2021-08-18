# Blur 
## Overview
DOM设置为毛玻璃效果,

注意容器需要设置背景
## Example
<div style="
          background:url(/images/img.jpg) no-repeat;
          background-size:cover;
          width:500px;
          height:400px;
          padding:100px;">
  <div style="
            width:300px;
            height:200px; 
            box-shadow:0 0 20px #333;
            border-radius:10px;
            color:#fff;
            margin:0 auto;"
            v-blur>
    <div style="
              font-size:40px;
              font-weight:bold;
              text-align:center;
              ">
      Blur
    </div>
    <div style="padding:0 10px">
      <p>It's not fit for child dom with position 'Fixed','Static'</p>
    </div>
  </div>
</div>

```vue
<div style="background:url(/images/img.jpg) no-repeat;
          background-size:cover;
          width:500px;
          height:400px;
          padding:100px;">
  <div style="width:300px;
            height:200px; 
            box-shadow:0 0 20px #333;
            border-radius:10px;
            color:#fff;
            margin:0 auto;"
            v-blur>
    <div style="font-size:40px;
              font-weight:bold;
              text-align:center;">
      Blur
    </div>
    <div style="padding:0 10px">
      <p>It's not fit for child dom with position 'Fixed','Static'</p>
    </div>
  </div>
</div>
 
```
## API
### Directives Props
|Directives|Explanation|
|:----------|:-----------|
|v-blur| 设置毛玻璃效果, 需要放在设置了background-image的DOM中 |