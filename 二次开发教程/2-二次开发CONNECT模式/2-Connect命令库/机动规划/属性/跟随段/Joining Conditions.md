# Joining Conditions

## 作用

设置跟随停止条件

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.JoiningConditions <List of Joining Conditions>
```

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.JoiningConditions.{Joining Condition} <Value> [{Unit}]
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Joining Condition` | `Altitude`、`Apoapsis`、`Argument_of_Latitude`（设置属性使用 `ArgLat`）、`AscendingNode`、`DescendingNode`、`Duration`、`Epoch`、`Longitude`、`Latitude`、`Mean_Anomaly`、`Periapsis`、`R_Magnitude`、`True_Anomaly`、`X-Y_Plane_Cross`（设置属性使用 `XYPlaneCross`）、`Y-Z_Plane_Cross`（设置属性使用 `YZPlaneCross`）、`Z-X_Plane_Cross`（设置属性使用 `ZXPlaneCross`）、`AscToDesc`、`DescToAsc`、`StateCalc` |

## 示例

::: details open **设置多个加入条件**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions Duration Apoapsis R_Magnitude Duration Altitude
```

:::
