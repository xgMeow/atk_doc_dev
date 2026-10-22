---
groups: [三维视图, 导弹, 飞机, 火箭, 卫星]
---

# VO ElevContours

## 作用

在 3D 视图中开关**仰角轮廓线**的显示，并设置其样式。

轮廓线的各个分级代表天体表面上能以指定仰角看到该对象的各个区域。

## 语法

```atk-command
VO <ObjectPath> ElevContours {Options}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<ObjectPath>` | 对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |

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

## 适用对象

卫星、导弹、火箭、视图、飞机

## 示例

::: details open **打开仰角轮廓线并设置样式**

```
VO */Satellite/ERS1 ElevContours On ShowCones Off ShowFill On FillTranslucency 50.0
```

- `*/Satellite/ERS1`：对象完整路径
- `On`：打开仰角轮廓线显示
- `ShowCones Off`：不显示填充圆锥，仅显示圆锥面在天体表面上的投影
- `ShowFill On`：在天体表面上以填充多边形显示
- `FillTranslucency 50.0`：填充区域的半透明度为 50%

:::

::: tip 相关参考

- [Graphics ElevContours](./Graphics%20ElevContours.md)：在二维图形窗口中显示仰角轮廓线

:::
