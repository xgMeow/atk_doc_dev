# PassBreak

- 作用：设置轨道圈数
- 用法：
```
PassBreak <SatObjectPath> {PassOption} [<Parameters>]
```
- 说明：

| `PassOption`                                    | 说明            |
| ----------------------------------------------  | ----------------|
| `Ascending`                                     | 设置方向为升轨   |
| `Descending`                                    | 设置方向为降轨   |
| `Latitude  <Value> [{Ascending \|  Descending}]`| 设置纬度值和方向 |
| `Longitude  <Value> `                           | 设置经度值       |
| `CoordSys {Inertial \| Fixed }`                 | 设置坐标系统     |

::: note 举例
```
PassBreak */Satellite/Satellite1 Latitude 90.0
```
:::
