# SetPosition

## 作用

Realtime 模式下设置对象位置点。

## 语法

```atk-command
SetPosition <ObjectPath> {PositionType} {TimeValue} <PositionData>
```

::: tip 注意
此命令不可用于修改对象数据，仅用于添加位置点
:::

## 参数说明

`{TimeValue}` 请查看[常用日期/时间格式](/二次开发教程/2-二次开发CONNECT模式/常用设置格式/日期时间格式.md)

| `{PositionType}` | `<PositionData>` | 说明 |
| --- | --- | --- |
| `ECF` | `<x> <y> <z> [<vx> <vy> <vz>]` | 地球固定系位置速度，速度默认为 0 |
| `ECI` | `<x> <y> <z> [<vx> <vy> <vz>]` | 地球惯性系（J2000）位置速度，速度默认为 0 |
| `LLA` | `<Lat> <Lon> <Alt> [<LatRate> <LonRate> <AltRate>]` | 纬经高，地球表面为 0 |
| `"<TruncObjectPath> <CrdnName>"` | `<x> <y> <z> [<vx> <vy> <vz>]` | 对象坐标系位置速度，例如 "CentralBody/Earth J2000" |

## 示例

::: details open **Realtime 模式下设置对象位置点**
```
SetPosition */Satellite/Satellite1 ECI "1 Jul 2021 09:00:00.000"  8678140.000000 0.000064 -1.837743 0.000781 6789.530412 3686.41396 
```
:::
