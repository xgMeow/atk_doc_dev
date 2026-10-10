# Graphics ElevContours

## 作用

在**二维图形窗口**中显示仰角轮廓线。

轮廓线的分级表示地表上能以指定仰角看到飞行器的各个区域。

适用于卫星、导弹、火箭、飞机共 4 类对象。

## 语法

```atk-command
Graphics <ObjectPath> ElevContours {AddMethod} [<Parameters>]
```

## 参数说明

`{AddMethod}` 决定分级取值的定义方式；需要提供的 `<Parameters>` 随所选的 `{AddMethod}` 而不同。`{AddMethod}` 可取下列取值：

| `{AddMethod}` | `<Parameters>` | 说明 |
|------|------|------|
| `Show` | `{On \| Off}` | 显示仰角轮廓线图形。 |
| `Explicit` | `<LevelValue> {Color} {LineStyle} <LineWidth> {ShowDistance} [{ShowText} ["<LabelText>" [<LabelAngle>]]]` | 通过指定 `<LevelValue>` 及其显示属性，逐条新增仰角轮廓线分级。`{Color}`、`{LineStyle}` 的合法取值参见[颜色格式](../../../2-参数值格式/颜色格式.md)、[线型格式](../../../2-参数值格式/线型格式.md)。`<LineWidth>` 取 `1.0`～`10.0` 的像素宽度。`{ShowDistance}`、`{ShowText}` 取 `On` 或 `Off`。`<LabelAngle>` 以**度**为单位。 |
| `Contour` | `<LevelValue> {Keyword} <Value> [{Keyword} <Value>...]` | 修改指定 `<LevelValue>` 的属性。`{Keyword} <Value>` 配对见下表。 |
| `StartStop` | `<Start> <Stop> <Step>` | 从 `Start` 开始，按 `Step` 递增生成轮廓线分级，直到**超过** `Stop` 为止。`<Step>` 须大于 `0.0`。 |
| `Remove` | `<LevelValue>` | 删除指定 `<LevelValue>` 所对应的那条轮廓线。 |
| `RemoveAll` | 无 | 删除**全部**轮廓线。 |
| `LabelAngle` | `<Angle>` | 为**已有**的全部轮廓线设置标注角度，用以决定文字和／或距离标注沿轮廓线的显示位置。`<Angle>` 取 `0`～`359` 度，顺时针；默认为 `180` 度，即 6 点钟位置。 |
| `Fill` | `{On \| Off} [{FillStyle}]` | 取 `On` 时，把**范围**轮廓线以填充多边形绘制在中心天体表面。`{FillStyle}` 可取 `Solid`、`VerticalStripe`、`HorizontalStripe`、`DiagonalStripe1`、`DiagonalStripe2`、`Hatch`、`DiagonalHatch`、`Screen`；仅当同时取 `On` 时才能给出 `{FillStyle}`。 |
| `FillTranslucency` | `<Value>` | 设置填充的半透明度，`<Value>` 取 `0.0`～`100.0`。 |

::: warning 注意
- `Remove`：若指定的分级不存在，本命令会返回 **Ack**，并**不做任何改动**。
- `LabelAngle`：调用本命令**之后**新增的轮廓线，其标注角度仍为默认的 `180`。
- 原始资料中 `Fill` 一行的说明写的是「把**范围**轮廓线……绘制」，与本命令的仰角轮廓线不符，**已按原文保留**。
:::

`<LevelValue>` 与 `<Start> <Stop> <Step>` 的取值均以**度**为单位，合法的仰角轮廓线分级取 `0.0`～`90.0` 度。用 `StartStop` 方式输入分级时，**即使给出的分级非法，本命令也不会返回 Nack**，只是**只绘制其中合法的分级**。

`{Keyword} <Value>` 配对可取下列取值：

| `{Keyword} <Value>` | 说明 |
|------|------|
| `Color {Color}` | 设置轮廓线的颜色，合法取值参见[颜色格式](../../../2-参数值格式/颜色格式.md)。 |
| `LineStyle {LineStyle}` | 设置轮廓线的线型。`{LineStyle}` 可以是名称（如 `Solid`、`Dashed`、`Dotted` 等），也可以是编号（`0`、`1`、`2` 等），全部合法取值参见[线型格式](../../../2-参数值格式/线型格式.md)。 |
| `LineWidth <Width>` | 取 `1.0`～`10.0` 的像素宽度。 |
| `ShowDistance {On \| Off}` | 显示或隐藏轮廓线的距离标注。 |
| `ShowText {On \| Off}` | 显示或隐藏轮廓线的用户自定义文字。 |
| `Text "<Text>"` | 设置轮廓线的用户自定义文字。 |
| `LabelAngle <Angle>` | 决定文字和／或距离标注沿轮廓线的显示位置。`<Angle>` 取 `0`～`359` 度，顺时针；默认为 `180` 度，即 6 点钟位置。 |

::: tip 相关参考

- [VO ElevContours](../VO/VO%20ElevContours.md)：在三维视图中开关仰角轮廓线的显示并设置其样式

:::

## 示例

::: details open **显示仰角轮廓线**

```
atkConnect(conID,'Graphics','*/Satellite/Satellite1 ElevContours Show On')
```

- `'Graphics'`：命令类别
- `'*/Satellite/Satellite1 ElevContours Show On'`：为卫星 `Satellite1` 显示仰角轮廓线

:::
