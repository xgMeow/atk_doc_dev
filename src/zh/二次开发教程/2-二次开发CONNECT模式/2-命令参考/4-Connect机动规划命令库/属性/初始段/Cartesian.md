# Cartesian

## 作用

为初始段坐标类型位置速度设置属性值

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.Cartesian.<Element> <Value> <Unit>
```

## 参数说明

| 参数 | 说明 |
| --- | --- |
| `X` | 默认单位时 m，包括单位 m ，km |
| `Y` | 默认单位时 m，包括单位 m ，km |
| `Z` | 默认单位时 m，包括单位 m ，km |
| `Vx` | 默认单位时 m/sec，包括单位 m/sec ，km/sec |
| `Vy` | 默认单位时 m/sec，包括单位 m/sec ，km/sec |
| `Vz` | 默认单位时 m/sec，包括单位 m/sec ，km/sec |

## 示例

::: details open **为初始段设置 Cartesian X 分量值**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.InitialState.Cartesian.X 6700000 m
```
:::
