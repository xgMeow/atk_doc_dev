---
description: 控制用于显示对象的属性类型，可选基本属性或按时间区间自定义的图形属性。
groups: [二维视图, 导弹, 火箭, 卫星]
---

# Graphics SetAttrType

## 作用

控制用于显示对象的**属性类型**。

## 语法

```atk-command
Graphics <ObjectPath> SetAttrType {AttributeType}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<ObjectPath>` | 对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |

`{AttributeType}` 可取下列取值：

| `{AttributeType}` | 说明 |
|------|------|
| `Basic` | 设置颜色、线图形、标记等基本属性及标准选项。多数用户使用该选项即可。 |
| `CustomIntervals` | 在动画过程中的特定时间区间内，显示不同的图形属性。 |

::: tip 相关参考

- [Graphics CustomIntervals](./Graphics%20CustomIntervals.md)：按时间区间自定义图形显示

:::

## 适用对象

卫星、导弹、火箭、视图

## 示例

::: details open **按时间区间显示**

```
Graphics */Satellite/Satellite1 SetAttrType CustomIntervals
```

- `*/Satellite/Satellite1 SetAttrType CustomIntervals`：把卫星 `Satellite1` 的显示属性类型设为 `CustomIntervals`，即按时间区间显示不同图形属性

:::
