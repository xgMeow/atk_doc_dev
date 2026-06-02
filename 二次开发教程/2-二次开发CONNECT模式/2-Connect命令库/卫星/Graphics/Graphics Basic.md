# Graphics Basic

作用：设置卫星可视化显示属性

用法：
```
Graphics <ObjectPath> Basic { AttributeOption } {Action}
```

`AttributeOption`说明：

- `Show`: `{On | Off}`
- `Label`: `{On | Off}`
- `groundtrack`: `{On | Off}`
- `orbit`: `{On | Off}`
- `color`: 请查看常用设置格式–常用图形格式
- `linestyle`: 请查看常用设置格式–常用图形格式
- `linewidth`: 轨迹宽度值介于 1 到 10
- `markerstyle`: 目前标识类型均为默认

::: note 举例
```
Graphics */Satellite/Satellite1 Basic Show on Label on LineStyle 2 LineWidth 5.0 Orbit on color 15
```
:::
