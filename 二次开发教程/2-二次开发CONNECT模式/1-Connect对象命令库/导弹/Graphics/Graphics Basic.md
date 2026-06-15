# Graphics Basic

## 作用

设置可视化显示

## 语法

```
Graphics <ObjectPath> Basic { AttributeOption } {Action}
```

## 参数说明

| 参数 | 说明 |
| ------------------- | ----------------------------------------- |
| `Show` | `{On \| Off}` |
| `Label` | `{On \| Off}` |
| `groundtrack` | `{On \| Off}` |
| `orbit` | `{On \| Off}` |
| `color` | 请查看常用设置格式–常用图形格式 |
| `linestyle` | 请查看常用设置格式–常用图形格式 |
| `linewidth` | 轨迹宽度值介于 1 到 10 |
| `markerstyle` | 目前标识类型均为默认 |

## 示例

::: details open **设置可视化显示**
```
Graphics */Missile/Missile1 Basic Show on Label on LineStyle 2 LineWidth 5.0 MarkerStyle Star Orbit on color 15
```
:::
