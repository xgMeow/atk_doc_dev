# Graphics Pass2D

## 作用

设置卫星轨迹属性。

## 语法

```atk-command
Graphics <ObjectPath> Pass2D ({LeadTrailOption} <Parameters>)
```

## 参数说明

- `LeadTrailOption`: `GrndTrail`
- `Parameters`: `Time <Time>`、`PointNumber <PointNumber>`、`All`、`None`

## 示例

::: details open **设置卫星轨迹属性**
```
Graphics */Satellite/Satellite1 Pass2D GrndTrail PointNumber 5000
```
:::
