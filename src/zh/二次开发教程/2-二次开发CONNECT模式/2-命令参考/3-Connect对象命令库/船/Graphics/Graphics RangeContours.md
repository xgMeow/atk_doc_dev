# Graphics RangeContours

## 作用

在 **2D 图形窗口**中添加和移除地面范围轮廓线，并定义轮廓分级在 2D 窗口中的显示方式。

本命令作用于 **2D 窗口**；**3D 窗口**中显示的范围轮廓线由 [VO RangeContours](../VO/VO%20RangeContours.md) 命令设置。

适用于卫星、地面站、飞机、船、车辆、导弹、火箭共 7 类对象。

## 语法

```atk-command
Graphics <ObjectPath> RangeContours {AddMethod} [<Parameters>]
```

## 参数说明

`{AddMethod}` 决定分级值的定义方式，须提供的 `<Parameters>` 取决于所选的 `{AddMethod}`：

| `{AddMethod}` | `<Parameters>` | 说明 |
|------|------|------|
| `Show` | `{On \| Off}` | 显示或隐藏范围轮廓线图形 |
| `Explicit` | `<LevelValue> {Color} {LineStyle} <LineWidth> {ShowDistance} [{ShowText} ["<LabelText>" [<LabelAngle>]]]` | 逐条添加范围轮廓分级并指定其显示属性。`{Color}`、`{LineStyle}` 的合法取值参见[颜色格式](../../../2-参数值格式/颜色格式.md)、[线型格式](../../../2-参数值格式/线型格式.md)；`<LineWidth>` 为 `1.0`～`10.0` 的像素宽度；`{ShowDistance}`、`{ShowText}` 取 `On` 或 `Off`；`<LabelAngle>` 以度为单位 |
| `Contour` | `<LevelValue> {Keyword} <Value> [{Keyword} <Value>...]` | 修改指定 `<LevelValue>` 分级的属性 |
| `StartStop` | `<Start> <Stop> <Step>` | 从 `Start` 开始、按 `Step` 递增生成分级，直到超过 `Stop` 为止。`<Step>` 须大于 `0` |
| `Remove` | `<LevelValue>` | 移除指定 `<LevelValue>` 对应的分级 |
| `RemoveAll` | 无 | 移除全部分级 |
| `LabelAngle` | `<Angle>` | 为所有**已存在**的分级设置标签角度，决定文字与距离沿轮廓线的显示位置。`<Angle>` 取 `0`～`359` 度，顺时针；默认 `180` 度，即 6 点钟方向 |
| `Fill` | `{On \| Off} [{FillStyle}]` | 设为 `On` 时以填充多边形在天体表面上显示范围轮廓线。`{FillStyle}` 可取 `Solid`、`VerticalStripe`、`HorizontalStripe`、`DiagonalStripe1`、`DiagonalStripe2`、`Hatch`、`DiagonalHatch`、`Screen`；仅当同时给出 `On` 时才能指定 `{FillStyle}` |
| `FillTranslucency` | `<Value>` | 设置填充区域的半透明度，`<Value>` 取值范围为 `0.0`～`100.0` |

::: warning 注意
- 用 `Remove` 移除某个分级时，若该分级**不存在**，命令仍返回 **Ack**，但不做任何操作。
- `LabelAngle` 只作用于**调用时已存在**的分级；此后新增的分级仍使用默认的 `180` 度。
:::

## 示例

::: details open **显示范围轮廓线**

```
atkConnect(conID,'Graphics','*/Satellite/Satellite1 RangeContours Show On')
```

- `'Graphics'`：命令类别
- `'*/Satellite/Satellite1 RangeContours Show On'`：为卫星 `Satellite1` 显示范围轮廓线

:::
