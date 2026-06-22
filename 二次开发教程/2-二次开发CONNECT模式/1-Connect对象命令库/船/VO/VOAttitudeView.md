# VOAttitudeView

## 作用

设置**车辆姿态球**属性。

## 语法

```atk-command
VO <ObjectPath> AttitudeView {AttitudeViewOption} <Parameters>
```

## 参数说明

### AttitudeViewOption 取值

| AttitudeViewOption | Parameters |
| -- | -- |
| `Sphere` | `{SphereOption1} <Value1> [{SphereOption2} <Value2> ...]` |
| `Projection` | `{ProjectionOption1} <Value1> [{ProjectionOption2} <Value2> ...]` |

### SphereOption 取值

| SphereOption | Value | 说明 |
| -- | -- | -- |
| `Show` | `{On \| Off}` | 姿态球是否显示 |
| `SphereColor` | `{Color}` | 颜色设置请参考常用设置格式-常用图形格式 |
| `ZeroDegColor` | `{Color}` | 设置零度颜色，颜色设置请参考常用设置格式-常用图形格式 |
| `ZeroDegLineWidth` | `<Value>` | 设置零度线宽，范围 `1-10` |
| `GridLineWidth` | `<Value>` | 设置线宽，范围 `1-10` |
| `Frame` | `"Type Axes {CrdnDefOptions}"` | `CrdnDefOptions` 可输入内容请查看下方表格 |
| `Scale` | `<Value>` | 设置比例，范围 `0-30` |

### Frame 的 CrdnDefOptions 取值

| CrdnDefOptions | `<CrdnDefValue>` | 说明 |
| -- | -- | -- |
| `Name` | `<NameOfAxes>` | Axes的名称 |
| `CBName` | `<NameOfCentralBody>` | 中心天体名称 |
| `ObjectPath` | `<ObjectPath>` | 对象路径，例 `Satellite/Satellite2` |

### ProjectionOption 取值

| ProjectionOption | Value | 说明 |
| -- | -- | -- |
| `Name` | `<CBName>` | 目前仅包括 Sun 和 Moon |
| `Show` | `{On \| Off}` | 需要输入投影名称，才会设置是否显示 |
| `ShowLabel` | `{On \| Off}` | 需要输入投影名称，才会设置标签是否显示 |
| `Color` | `{Color}` | 颜色设置请查看常用设置格式-常用图形格式 |
| `PointSize` | `<Value>` | 设置点大小 |

## 补充说明

- 不输入 `CBName` 和 `ObjectPath`，`Name` 默认为当前对象 Axes。

## 示例

::: details open **设置姿态球投影属性**
```
VO */Ship/Ship1  AttitudeView Projection Name Sun Show On ShowLabel On Color red PointSize 6 Frame "Type Axes ObjectPath Satellite/Satellite2 Name Fixed"
```
:::

::: details open **设置姿态球 Sphere 属性**
```
VO */Ship/Ship1  AttitudeView Sphere Show On SphereColor %255000000 ZeroDegLineWidth 2 GridLineWidth 5 Frame "Type Axes Name Body" Scale 10
```
:::
