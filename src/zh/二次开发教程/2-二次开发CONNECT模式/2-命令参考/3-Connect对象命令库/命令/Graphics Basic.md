---
description: 设置对象可视化显示属性，包括轨迹、标签、地面轨迹、颜色、线型与标识等基本显示选项。
groups: [二维视图显示, 导弹, 火箭, 卫星]
---

# Graphics Basic

## 作用

设置对象可视化显示属性。

## 语法

```atk-command
Graphics <ObjectPath> Basic { AttributeOption } {Action}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<ObjectPath>` | 对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `Show` | `{On \| Off}`：是否在窗口中显示该对象 |
| `Label` | `{On \| Off}`：是否显示标签 |
| `groundtrack` | `{On \| Off}`：是否显示地面轨迹 |
| `orbit` | `{On \| Off}`：是否显示轨道 |
| `color` | 请查看[常用颜色格式](../../2-参数值格式/颜色格式.md) |
| `linestyle` | 请查看[常用线型格式](../../2-参数值格式/线型格式.md) |
| `linewidth` | 轨迹宽度值介于 1 到 10 |
| `markerstyle` | 目前标识类型均为默认 |

## 适用对象

卫星、导弹、火箭

## 示例

::: details open **设置可视化显示属性**
```
Graphics */Satellite/Satellite1 Basic Show on Label on LineStyle 2 LineWidth 5.0 Orbit on color 15
```
:::

::: details open **设置卫星可视化显示属性**
```
Graphics */Satellite/Satellite1 Basic Show on Label on LineStyle 2 LineWidth 5.0 Orbit on color 15
```
:::

::: details open **设置可视化显示**
```
Graphics */Missile/Missile1 Basic Show on Label on LineStyle 2 LineWidth 5.0 MarkerStyle Star Orbit on color 15
```
:::

::: details open **设置火箭可视化显示属性**
```
Graphics */LaunchVehicle/LaunchVehicle1 Basic Show on Label on LineStyle 2 LineWidth 5.0 MarkerStyle Star Orbit on color 15
```
:::
