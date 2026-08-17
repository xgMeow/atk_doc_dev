# VO Point

## 作用

设置车辆 3D 模型点属性。

## 语法

```atk-command
VO <ObjectPath> Point {PointOptions}
```

## 参数说明

| 参数 | 说明 |
| --- | --- |
| `Show` | `{On \| Off}`，是否显示模型点 |
| `Size` | `<Value>`，模型点大小设置 |

## 示例

::: details open **设置模型点属性**
```
VO */GroundVehicle/GroVeh1 Point Show On Size 7
```
:::
