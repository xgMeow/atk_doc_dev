## Set Position

 

作用：设置地面站位置属性

用法： 
```
SetPosition <ObjectPath> [{Type}] {CoordType} <Parameters>
```
说明：
 

| CoordType | Parameters                  | 说明                       |
| --------- | --------------------------- | -------------------------- |
| Cartesian | `<X>  <Y> <Z>`                | 输入默认单位为 m           |
| Geodetic  | `<Lat>  <Lon> {<Altitude> \| Terrain} [MSL]` | 目前仅支持输入纬度，经度，高度 |

 

举例： 
```
SetPosition */Facility/Facility1 Geodetic 37.9 -75.5 0.0
```
