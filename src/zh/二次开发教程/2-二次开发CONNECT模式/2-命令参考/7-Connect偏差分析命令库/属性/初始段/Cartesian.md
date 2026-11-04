# Cartesian

## 作用

为初始段坐标类型位置速度设置属性值

## 语法

```atk-command
AstroUQ <Satellite Object Path> SetValue <AstroUQ ObjectPath>.Cartesian.<Element> <Value> <Unit>
```

## 参数说明

| 参数 | 说明 |
| --- | --- |
| `X` | 位置 X 分量，单位随当前 `Distance` 单位设置 |
| `Y` | 位置 Y 分量，单位随当前 `Distance` 单位设置 |
| `Z` | 位置 Z 分量，单位随当前 `Distance` 单位设置 |
| `Vx` | 速度 X 分量，取当前 Connect 的距离单位与时间单位之比，可附 km/sec 等单位 |
| `Vy` | 速度 Y 分量，取当前 Connect 的距离单位与时间单位之比，可附 km/sec 等单位 |
| `Vz` | 速度 Z 分量，取当前 Connect 的距离单位与时间单位之比，可附 km/sec 等单位 |

## 示例

::: details open **为初始段设置 Cartesian X 分量值**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.InitialState.Cartesian.X 6700000 m
```
:::
