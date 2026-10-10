# LambertState

## 作用

为兰勃特段坐标类型位置速度设置属性值

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.LambertTarget.<CoordinateType>.<Element> <Value> <Unit>
```

::: details 属性设置详细说明（点击展开）

- `<CoordinateType>` 为 `"Cartesian"` 时

| Element | 说明 |
| ------- | ---- |
| X       | 默认单位时 m，包括单位 m、km |
| Y       | 默认单位时 m，包括单位 m、km |
| Z       | 默认单位时 m，包括单位 m、km |
| Vx      | 默认单位时 m/sec，包括单位 m/sec、km/sec |
| Vy      | 默认单位时 m/sec，包括单位 m/sec、km/sec |
| Vz      | 默认单位时 m/sec，包括单位 m/sec、km/sec |

- `<CoordinateType>` 为 `"Keplerian"` 时

| Element | 说明 |
| ------- | ---- |
| Sma     | 半长轴默认单位是 m，包括单位 km、m，设置属性使用 sma |
| Ecc     | 偏心率 |
| Inc     | 轨道倾角，默认单位 rad |
| RAAN    | 升交点赤经，默认单位 rad |
| W       | 近拱点角距，默认单位 rad |
| TA      | 真近点角，默认单位 rad |

:::

## 示例

::: details open **设置 Lambert 状态的 Cartesian X 坐标**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.LambertState.Cartesian.X 6700000 m
```
:::
