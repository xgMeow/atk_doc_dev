# Graphics Basic

## 作用

设置火箭可视化显示属性

## 语法

```atk-command
Graphics <ObjectPath> Basic { AttributeOption } {Action}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Show` | `{On \| Off}` |
| `Label` | `{On \| Off}` |
| `groundtrack` | `{On \| Off}` |
| `orbit` | `{On \| Off}` |
| `color` | 请查看[常用颜色格式](../../../2-参数值格式/颜色格式.md) |
| `linestyle` | 请查看[常用线型格式](../../../2-参数值格式/线型格式.md) |
| `linewidth` | 轨迹宽度值介于 1 到 10 |
| `markerstyle` | 目前标识类型均为默认 |

## 示例

::: details open **设置火箭可视化显示属性**
```
Graphics */LaunchVehicle/LaunchVehicle1 Basic Show on Label on LineStyle 2 LineWidth 5.0 MarkerStyle Star Orbit on color 15
```
:::
