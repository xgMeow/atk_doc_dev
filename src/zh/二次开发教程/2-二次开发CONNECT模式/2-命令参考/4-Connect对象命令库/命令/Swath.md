---
description: 在二维视图中显示飞行器刈幅，并设置刈幅类型与绘制方式。
groups: [二维视图, 导弹, 飞机, 火箭, 卫星]
---

# Swath

## 作用

在二维视图中显示飞行器刈幅。

## 语法

```atk-command
Swath <ObjectPath> {Type} <Value> [{DisplayOption}]
```

## 参数说明

`{Type}` 决定刈幅的类型，可取下列取值：

| `{Type}` | 含义 | `<Value>` |
|------|------|------|
| `Elevation` | 地面仰角 | 取值单位由当前 Connect 的 `Angle` 单位设置决定，取 `0.0`～`90.0` |
| `HalfAngle` | 飞行器半锥角 | 取值单位由当前 Connect 的 `Angle` 单位设置决定，取 `0.0`～`90.0` |
| `HalfWidth` | 刈幅半幅宽 | 取值单位由当前 Connect 的 `Distance` 单位设置决定，参见[单位格式](../../2-参数值格式/单位格式.md)，须大于或等于 `0.0` |
| `ElevationEnvelope` | 地面仰角包络 | 取值单位由当前 Connect 的 `Angle` 单位设置决定，取 `0.0`～`90.0` |
| `HalfAngleEnvelope` | 飞行器半锥角包络 | 取值单位由当前 Connect 的 `Angle` 单位设置决定，取 `0.0`～`90.0` |

`{DisplayOption}` 为可选项，决定刈幅的绘制方式，可取下列取值：

| `{DisplayOption}` | 含义 |
|------|------|
| `Edge` | 显示边缘 |
| `Filled` | 显示填充 |
| `None` | 不显示 |

::: warning 注意
若不给出 `{DisplayOption}`，刈幅会被置为 **Off**（不显示）。
:::

## 适用对象

卫星、导弹、火箭、飞机

## 示例

::: details open **显示填充形式的刈幅**

```
Swath */Satellite/Satellite1 Elevation 10.0 Filled
```

- `*/Satellite/Satellite1 Elevation 10.0 Filled`：为卫星 `Satellite1` 显示**地面仰角**为 `10.0` 度的刈幅，并以**填充**方式绘制

:::
