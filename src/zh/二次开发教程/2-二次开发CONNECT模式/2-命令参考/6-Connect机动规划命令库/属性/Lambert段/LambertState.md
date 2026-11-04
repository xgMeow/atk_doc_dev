# LambertState

## 作用

为兰勃特段坐标类型位置速度设置属性值

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.LambertTarget.<CoordinateType>.<Element> <Value> <Unit>
```

::: details 属性设置详细说明（点击展开）

位置类值取当前 Connect 的 `Distance` 单位，角度类值取 `Angle` 单位，速度类值取距离单位与时间单位之比。

- `<CoordinateType>` 为 `"Cartesian"` 时

| Element | 说明 |
| ------- | ---- |
| X       | 位置 X 分量，单位随当前 `Distance` 单位设置 |
| Y       | 位置 Y 分量，单位随当前 `Distance` 单位设置 |
| Z       | 位置 Z 分量，单位随当前 `Distance` 单位设置 |
| Vx      | 速度 X 分量，取当前 Connect 的距离单位与时间单位之比，可附 km/sec 等单位 |
| Vy      | 速度 Y 分量，取当前 Connect 的距离单位与时间单位之比，可附 km/sec 等单位 |
| Vz      | 速度 Z 分量，取当前 Connect 的距离单位与时间单位之比，可附 km/sec 等单位 |

- `<CoordinateType>` 为 `"Keplerian"` 时

| Element | 说明 |
| ------- | ---- |
| Sma     | 半长轴，单位随当前 `Distance` 单位设置，可附 km、m 等单位，设置属性使用 sma |
| Ecc     | 偏心率 |
| Inc     | 轨道倾角，单位随当前 `Angle` 单位设置 |
| RAAN    | 升交点赤经，单位随当前 `Angle` 单位设置 |
| W       | 近拱点角距，单位随当前 `Angle` 单位设置 |
| TA      | 真近点角，单位随当前 `Angle` 单位设置 |

:::

## 示例

::: details open **设置 Lambert 状态的 Cartesian X 坐标**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.LambertState.Cartesian.X 6700000 m
```
:::
