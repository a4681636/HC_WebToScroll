# HC_WebToScroll
捲動至指定元素

# 範例
https://a4681636.github.io/HC_WebToScroll/

# 使用方式
## 連結CDN
將CDN 放在 body 結束標籤前
https://a4681636.github.io/HC_WebToScroll/main.js

````````
<script src="https://a4681636.github.io/HC_WebToScroll/main.js"></script>
    
</body>
````````



## 捲動說明
屬性名稱 | 屬性說明
---------------|-----------------
data-st-target | 要前往元素的ID名稱
data-st-duration | 捲動所花時間(毫秒)
data-st-offset | 位移大小

範例
`````````
<a id="arrow" data-st-target="top" data-st-duration="800"  data-st-offset="100"
`````````


## 箭頭說明
屬性名稱 | 屬性說明
-----------|--------------
data-st-top | 箭頭要出現的高度
data-st-time | 特效持續時間

範例
````````
data-st-top="300" data-st-time="600"></a>
````````