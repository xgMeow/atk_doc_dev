## Graphics Pass2D

作用：设置卫星轨迹属性

用法：
```
Graphics <ObjectPath> Pass2D ({LeadTrailOption} <Parameters>)
```

说明：

- `LeadTrailOption`:  GrndTrail

- `Parameters`: `Time <Time>`、`PointNumber <PointNumber>`、`All`、`None`

::: note 举例
```
Graphics */Satellite/Satellite1 Pass2D GrndTrail PointNumber 5000
```
:::
