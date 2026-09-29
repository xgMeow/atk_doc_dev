# VO RangeContours

## 作用

在 3D 视图中设置**范围轮廓线**的显示。

本命令作用于 **3D 窗口**；**2D 窗口**中显示的范围轮廓线由 [Graphics RangeContours](../Graphics/Graphics%20RangeContours.md) 命令设置。

适用于卫星、地面站、飞机、船、车辆、导弹、火箭共 7 类对象。

## 语法

```atk-command
VO <ObjectPath> RangeContours {AddMethod} <Parameters>
```

## 参数说明

`{AddMethod} <Parameters>` 可取下列选项：

| 选项 | 说明 |
|------|------|
| `Show {On \| Off}` | 显示或隐藏范围轮廓线 |
| `TranslucentLines {On \| Off}` | 显示或隐藏半透明线 |
| `Translucency <Value>` | 设置半透明度，`<Value>` 取值范围为 `0.0`～`100.0` |
| `LabelSwapDist {<Value> \| All \| ModelLabel \| MarkerLabel \| Marker \| Point}` | 设置范围轮廓线标签的可见距离。`<Value>` 须大于或等于 `0.0`；也可填入一个组件名，表示标签沿用该组件的交换距离 |

## 示例

::: details open **显示与隐藏范围轮廓线**

```
VO */Facility/Facility1 RangeContours Show On
VO */Satellite/Satellite1 RangeContours Show Off
```

- 第一条：为地面站 `Facility1` **显示**范围轮廓线
- 第二条：为卫星 `Satellite1` **隐藏**范围轮廓线

:::
