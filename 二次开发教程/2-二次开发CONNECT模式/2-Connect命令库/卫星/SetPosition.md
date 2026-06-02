# SetPosition

- 作用：Realtime模式下设置对象位置点
- 用法：
```
SetPosition <ObjectPath> {PositionType} {TimeValue} <PositionData>
```

::: tip 注意
此命令不可用于修改对象数据，仅用于添加位置点
:::

- 说明: 
    - `{TimeValue}` 请查看常用设置格式--常用日期/时间格式

    
| `{PositionType}`                      | `<PositionData>`                                                |说明                                                     |
| -----------------------------------   | --------------------------------------------------------------- | ------------------------------------------------------- |
| `ECF`                                 | `<x> <y> <z> [<vx> <vy> <vz>]`                                  |地球固定系位置速度，速度默认为0                             |
| `ECI`                                 | `<x> <y> <z> [<vx> <vy> <vz>]`                                  |地球惯性系（J2000）位置速度，速度默认为0                    |
| `LLA`                                 | `<Lat> <Lon> <Alt> [<LatRate> <LonRate> <AltRate>]`             |纬经高，地球表面为0                                        |
| `"<TruncObjectPath> <CrdnName>"`      | `<x> <y> <z> [<vx> <vy> <vz>]`                                  |对象坐标系位置速度，例如 "CentralBody/Earth J2000"          |

::: note 举例
```
SetPosition */Satellite/Satellite1 ECI "1 Jul 2021 09:00:00.000"  8678140.000000 0.000064 -1.837743 0.000781 6789.530412 3686.41396 
```
:::
