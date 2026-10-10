# VO ElevContours

## 作用

在 3D 视图中开关**仰角轮廓线**的显示，并设置其样式。

轮廓线的各个分级代表天体表面上能以指定仰角看到该对象的各个区域。

适用于卫星、飞机、导弹、火箭共 4 类对象。

## 语法

```atk-command
VO <ObjectPath> ElevContours {Options}
```

## 参数说明

`{Options}` 可取下列选项：

| 选项 | 说明 |
|------|------|
| `{On \| Off}` | 打开或关闭 3D 窗口中的仰角轮廓线显示 |
| `ShowCones {On \| Off}` | 设为 `On` 时以**填充圆锥**的形式在空间中显示仰角轮廓线；设为 `Off` 时仅显示圆锥面在天体表面上的投影 |
| `ShowFill {On \| Off}` | 设为 `On` 时以**填充多边形**的形式在天体表面上显示仰角轮廓线 |
| `ConeTranslucency <Value>` | 圆锥的半透明度。`<Value>` 为 `0`～`100` 的百分数，`0` 表示完全不透明，`100` 表示完全不可见 |
| `FillTranslucency <Value>` | 填充区域的半透明度，取值口径同 `ConeTranslucency` |

::: warning 注意
仰角轮廓线**不适用于地面载具**：对 `GroundVehicle`（车辆）或 `Ship`（船）下达本命令会返回 **Nack**。
:::

## 示例

::: details open **打开卫星的仰角轮廓线并设置样式**

```
VO */Satellite/ERS1 ElevContours On ShowCones Off ShowFill On FillTranslucency 50.0
```

- `*/Satellite/ERS1`：对象完整路径
- `On`：打开仰角轮廓线显示
- `ShowCones Off`：不显示填充圆锥，仅显示圆锥面在天体表面上的投影
- `ShowFill On`：在天体表面上以填充多边形显示
- `FillTranslucency 50.0`：填充区域的半透明度为 50%

:::

::: warning 注意
原始资料中关于 `VO ElevContours` 与 `Graphics ElevContours` 分工的说明**互相矛盾**：本命令的说明文字既写「在 **3D 窗口**中开关仰角轮廓线」，又写「要在 3D 窗口中真正设置轮廓线，请使用 `Graphics ElevContours` 命令」；而 [Graphics ElevContours](../Graphics/Graphics%20ElevContours.md) 自身的说明明确写的是 **2D Graphics window**（二维图形窗口）。两者**未能调和**，实际分工待开发确认。
:::

::: tip 相关参考

- [Graphics ElevContours](../Graphics/Graphics%20ElevContours.md)：在二维图形窗口中显示仰角轮廓线

:::
