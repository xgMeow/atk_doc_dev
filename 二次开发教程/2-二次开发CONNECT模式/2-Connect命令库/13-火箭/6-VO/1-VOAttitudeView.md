## VOAttitudeView

- 作用：设置对象姿态球属性

- 用法： 
```
VO <ObjectPath> AttitudeView {AttitudeViewOption} <Parameters>
```

::: details 详细说明（点击展开）

 

| AttitudeViewOption | Parameters                                                   |
| ------------------ | ------------------------------------------------------------ |
| Sphere             | `{SphereOption1} <Value1> [{SphereOption2} <Value2> ...]`      |
| Projection         | `{ProjectionOption1} <Value1> [{ProjectionOption2} <Value2> ...]` |

- 如果 `AttitudeViewOption` 输入的是 `Sphere`, 那么 `SphereOption` 可得属性有


| SphereOption        | Value       | 说明                                     |
| ------------------- | ----------- | ---------------------------------------- |
| Show                | `{On \| Off}` | 姿态球是否显示                           |
| SphereColor         | `{Color}`     | 颜色设置请参考常用设置格式-常用图形格式 |
| ZeroDegLineWidth    | `<Value>`     | 设置零度线宽，范围 `1 - 10`                |
| GridLineWidth       | `<Value>`     | 设置线宽，范围 `1 - 10`                     |
| Frame               | `"Type Axes {CrdnDefOptions}"` | `CrdnDefOptions` 目前仅包括 `Name  Body `和 `Name J2000` |
| Scale               | `<Value>`                        | 设置比例，范围 `0-30`                                |

- 如果 `AttitudeViewOption` 输入的是 `Projection，那么` `ProjectionOption` 可得属性有



| ProjectionOption | Value       | 说明                                     |
| ---------------- | ----------- | ---------------------------------------- |
| Name             | `<CBName>`    | 目前仅包括 Sun 和 Moon                   |
| Show             | `{On \| Off}` | 需要输入投影名称，才会设置是否显示       |
| ShowLabel        | `{On \| Off}` | 需要输入投影名称，才会设置标签是否显示  |
| Color            | `{Color}`     | 颜色设置请查看常用格式设置-常用图形格式 |
| PointSize        | `<Value>`     | 设置点大小                               |

:::

::: note 举例
```
VO */LaunchVehicle/LaunchVehicle1 AttitudeView Projection Name Sun Show On ShowLabel On Color red PointSize 6
```

```
VO */LaunchVehicle/LaunchVehicle1 AttitudeView Sphere Show On SphereColor %255000000 ZeroDegLineWidth 2 GridLineWidth 5 Frame "Type Axes Name Body" Scale 10
```
:::
