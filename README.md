##基于Leaflet的Marker拓展，可以旋转的标记

因为代码比较简单，这里就不做特别的例子解释

##特性

* 可以设置旋转角度
* 可以设置旋转中心轴

##有问题反馈
在使用中有任何问题，欢迎反馈给我，可以用以下联系方式跟我交流

* 邮件：DerekMar@163.com
* QQ: 363769150


##感激
感谢以下的项目,排名不分先后

* [leaflet](https://github.com/Leaflet/Leaflet) 

##使用方法

```
	import * as RotateMarker from './RotateMarker';
	
	var rotateMarker = new RotateMarker([112.13, 23.12], {rotate: 45}).addto(map);
	
```
## 属性
rotate：旋转角度 0-360
centeraxis：旋转中心轴 ‘center center’ 解释： ‘X Y’ 包括 left、center、right