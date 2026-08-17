# Graphics Pass2D

## 作用

设置对象轨迹属性

## 语法

```atk-command
Graphics <ObjectPath> Pass2D ({LeadTrailOption} <Parameters>)
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `LeadTrailOption` | `GrndTrail` |
| `Parameters` | `Time <Time>`、`PointNumber <PointNumber>`、`All`、`None` |

## 示例

::: details open **设置对象轨迹属性**
```
Graphics */LaunchVehicle/LaunchVehicle1 Pass2D GrndTrail PointNumber 5000
```
:::
