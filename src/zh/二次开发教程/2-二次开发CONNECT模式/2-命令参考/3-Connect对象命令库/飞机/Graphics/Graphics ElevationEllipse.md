# Graphics ElevationEllipse

## 作用

设置对象在二维等高线中**仰角椭圆**的属性。

仰角椭圆用于标示特定时刻地面上能以指定仰角观测到该对象的区域边界。

适用于卫星、飞机、导弹、火箭共 4 类对象。

## 语法

```atk-command
Graphics <ObjectPath> ElevationEllipse {EllipseSetType} <Options>
```

## 参数说明

`{EllipseSetType}` 及其 `<Options>` 如下：

| `{EllipseSetType}` | `<Options>` | 说明 |
|------|------|------|
| `Show` | `{on \| off}` | 是否使用仰角椭圆 |
| `Add` | `<TimeValue> <Level> <Color> <LineStyle> <LineWidth>` | 新增/修改仰角椭圆 |
| `Edit` | `<TimeValue> <Level> <Color> <LineStyle> <LineWidth>` | 新增/修改仰角椭圆 |
| `Remove` | `<TimeValue>` | 删除对应时间的仰角椭圆 |
| `Clear` | 无 | 移除所有仰角椭圆 |

- `<TimeValue>` 的合法取值参见[日期时间格式](../../../2-参数值格式/日期时间格式.md)。
- `<Color>`、`<LineStyle>` 的合法取值参见[颜色格式](../../../2-参数值格式/颜色格式.md)、[线型格式](../../../2-参数值格式/线型格式.md)。

## 示例

::: details open **启用仰角椭圆**

```
atkConnect(conID,'Graphics','*/Satellite/Satellite1 ElevationEllipse Show on')
```

- `'Graphics'`：命令类别
- `'*/Satellite/Satellite1 ElevationEllipse Show on'`：为卫星 `Satellite1` 启用仰角椭圆

:::
