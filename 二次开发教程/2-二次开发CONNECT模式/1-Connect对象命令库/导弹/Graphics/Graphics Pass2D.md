# Graphics Pass2D

## 作用

设置轨迹类型

## 语法

```
Graphics <ObjectPath> Pass2D ({LeadTrailOption} <Parameters>)
```

## 补充说明

- `LeadTrailOption`: `GrndTrail`
- `Parameters`: `Time <Time>`、`PointNumber <PointNumber>`、`All`、`None`

## 示例

::: details open **设置轨迹类型**
```
Graphics */Missile/Missile1 Pass2D GrndTrail PointNumber 5000
```
:::
