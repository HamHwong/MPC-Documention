# Blur 
## Overview
DOM设置为毛玻璃效果,

注意容器需要设置背景
## Example
<div style="background:url(/images/img.jpg) no-repeat;background-size:cover;width:500px;height:400px;padding:100px;">
  <ClientOnly>
    <div style="width:300px;height:200px; box-shadow:0 0 20px #333;border-radius:10px;color:#fff;margin:0 auto;" v-blur>
      <div style="font-size:40px;font-weight:bold;text-align:center;">
        Blur
      </div>
      <div style="padding:0 10px">
        <p>It's not fit for child dom with position 'Fixed','Static'</p>
      </div>
    </div>
  </ClientOnly>
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


<div style="background:url(/images/img.jpg) no-repeat;background-size:cover;width:500px;height:400px;padding:100px;">
  <ClientOnly>
    <div style="width:300px;height:200px; box-shadow:0 0 20px #333;border-radius:10px;overflow:hidden;color:#fff;margin:0 auto;" v-blur:white="10">
      <div style="font-size:40px;font-weight:bold;text-align:center;">
        Blur
      </div>
      <div style="padding:0 10px">
        <p>The v-blur was set to 10 and white bg color</p>
      </div>
    </div>
  </ClientOnly>
</div>

## API
### Directives Props
|Directives|Explanation|Arg|Value|
|:----------|:-----------|:--|:--|
|v-blur| 设置毛玻璃效果, 需要放在设置了background-image的DOM中 |[`white`,`dark`] 可设置背景色(如果模糊度过大可能导致边缘原图显示,故用背景色填充)|`1-10`模糊度, 对应`blur(2px ~ 20px)`, 默认为`1`|