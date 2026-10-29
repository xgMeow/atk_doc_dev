---
description: 设置二维视图中的地面椭圆属性，用于增、删、改飞行器的地面椭圆数据。
groups: [二维视图, 车辆, 船, 导弹, 飞机, 火箭, 卫星]
---

# GroundEllipse

## 作用

设置二维视图中的地面椭圆属性，用于增、删、改飞行器的地面椭圆数据。

## 语法

```atk-command
GroundEllipse <VehObjectPath> {EllipseSetOptions}
```

## 参数说明

`{EllipseSetOptions}` 决定对椭圆集或椭圆执行的操作，须从下列取值中选取一个：

| `{EllipseSetOptions}` | 说明 |
|------|------|
| `AddSet <SetName>` | 新增一个指定名称的椭圆集。 |
| `DeleteSet <SetName>` | 删除指定名称的椭圆集。 |
| `ClearSet <SetName>` | 移除指定椭圆集中的全部椭圆。 |
| `RenameSet <SetName> <NewSetName>` | 把椭圆集重命名为新名称。 |
| `AddSetEllipse <SetName> {EllipseOptions}` | 向指定椭圆集新增一个椭圆，椭圆选项见下方 `{EllipseOptions}`。 |
| `DeleteSetEllipse <SetName> {EllipseAtTime <TimeVal> \| EllipseAtLatLon <Latitude> <Longitude>}` | 从指定椭圆集中删除由指定时刻或指定位置确定的那一个椭圆。`<TimeVal>` 的取值单位由当前 Connect 的 `Date` 单位设置决定；`<Latitude>`、`<Longitude>` 的取值单位由当前 Connect 的 `Angle` 单位设置决定。 |
| `ModifySetEllipse <SetName> {EllipseAtTime "<TimeVal>" \| EllipseAtLatLon <Latitude> <Longitude>} {EllipseOptions}` | 用给定的 `{EllipseOptions}` 修改指定椭圆集中由指定时刻或指定位置确定的那一个椭圆。`<TimeVal>` 的取值单位由当前 Connect 的 `Date` 单位设置决定；`<Latitude>`、`<Longitude>` 的取值单位由当前 Connect 的 `Angle` 单位设置决定。 |

::: warning 注意
`AddSetEllipse` 可不给出 `{EllipseOptions}`，此时按默认值新增椭圆；`ModifySetEllipse` 则**至少要给出一个** `{EllipseOptions}`。
:::

`{EllipseOptions}` 可取下列取值：

| `{EllipseOptions}` | 说明 |
|------|------|
| `Time {TimeValue}` | 椭圆的时刻，合法取值参见[日期时间格式](../../2-参数值格式/日期时间格式.md)。 |
| `SemiMajorAxis <Value>` | 半长轴，取值单位由当前 Connect 的 `Distance` 单位设置决定，取值须大于或等于 `0.0`。 |
| `SemiMinorAxis <Value>` | 半短轴，取值单位由当前 Connect 的 `Distance` 单位设置决定，取值须大于或等于 `0.0`。 |
| `Bearing <Value>` | 方位角，取值单位由当前 Connect 的 `Angle` 单位设置决定。 |
| `UseObjPos {On \| Off}` | 取 `On` 时，地面椭圆以该椭圆所指定时刻的飞行器位置为中心；取 `Off` 时，中心位置改用 `Lat`、`Lon` 两个选项指定。 |
| `Lat <Value>` | 纬度，取值单位由当前 Connect 的 `Angle` 单位设置决定。 |
| `Lon <Value>` | 经度，取值单位由当前 Connect 的 `Angle` 单位设置决定。 |

## 适用对象

卫星、导弹、火箭、船、视图、车辆、飞机

## 示例

::: details open **新增一个椭圆集**

```
atkConnect(conID,'GroundEllipse','*/GroundVehicle/GroundVehicle1 AddSet Testset')
```

- `'GroundEllipse'`：命令名
- `'*/GroundVehicle/GroundVehicle1 AddSet Testset'`：为当前场景下的车辆 `GroundVehicle1` 新增一个名为 `Testset` 的椭圆集

:::

::: tip 相关参考

- [GroundEllipse_R](./GroundEllipse_R.md)：获取二维视图中的地面椭圆属性

:::
