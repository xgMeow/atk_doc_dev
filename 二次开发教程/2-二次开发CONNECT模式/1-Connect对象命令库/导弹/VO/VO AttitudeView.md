# VO AttitudeView

## 作用

设置导弹姿态球属性

## 语法

```atk-command
VO <ObjectPath> AttitudeView {AttitudeViewOption} <Parameters>
```

## 参数说明

| 参数 | 说明 |
| ------------------ | ------------------------------------------------------------ |
| `Sphere`             | `{SphereOption1} <Value1> [{SphereOption2} <Value2> ...]`      |
| `Projection`         | `{ProjectionOption1} <Value1> [{ProjectionOption2} <Value2> ...]` |

### Sphere 取值

| 参数 | Value | 说明 |
| ------------------- | ----------- | ---------------------------------------- |
| `Show`                | `{On \| Off}` | 姿态球是否显示                           |
| `SphereColor`         | `{Color}`     | 颜色设置请参考常用设置格式-常用图形格式 |
| `ZeroDegLineWidth`    | `<Value>`     | 设置零度线宽，范围 `1 - 10`                |
| `GridLineWidth`       | `<Value>`     | 设置线宽，范围 `1 - 10`                     |
| `Frame`               | `"Type Axes {CrdnDefOptions}"` | `CrdnDefOptions` 目前仅包括 `Name Body` 和 `Name J2000` |
| `Scale`               | `<Value>`                        | 设置比例，范围 `0-30`                                |

### Projection 取值

| 参数 | Value | 说明 |
| ---------------- | ----------- | ---------------------------------------- |
| `Name`             | `<CBName>`    | 目前仅包括 Sun 和 Moon                   |
| `Show`             | `{On \| Off}` | 需要输入投影名称，才会设置是否显示       |
| `ShowLabel`        | `{On \| Off}` | 需要输入投影名称，才会设置标签是否显示  |
| `Color`            | `{Color}`     | 颜色设置请查看常用格式设置-常用图形格式 |
| `PointSize`        | `<Value>`     | 设置点大小                               |

## 示例

::: details open **设置投影属性**
```
VO */Missile/Missile1 AttitudeView Projection Name Sun Show On ShowLabel On Color red PointSize 6
```
:::

::: details open **设置姿态球属性**
```
VO */Missile/Missile1 AttitudeView Sphere Show On SphereColor %255000000 ZeroDegLineWidth 2 GridLineWidth 5 Frame "Type Axes Name Body" Scale 10
```
:::
