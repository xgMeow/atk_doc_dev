# Missile

## 作用

使用弹道学设置导弹弹道

## 语法

```
Missile <ObjectPath> Trajectory {TimeValue} <StepSize> LnLatGeoD <GeodeticLatitude> <Longitude> <Altitude> {TrajOption} <Value> ImLatGeoD <GeodeticLatitude> <Longitude> <Altitude>
```

## 参数说明

| 参数 | 说明 |
| -------------- | ------------------- |
| `TOF`            | `<FlightDuration>`  |
| `DeltaV`         | `<DeltaV>`          |
| `ApogeeAlt`      | `<ApogeeAltitude>`  |
| `DeltaVMinEcc`   | `<DeltaV>`          |

## 示例

::: details open **使用弹道学设置导弹弹道**
```
Missile */Missile/Missile1 Trajectory "1 Jun 2000 00:00:00.00" 60.0 LnLatGeod 27 -81 0.0 TOF 5086 ImLatGeod 24 -14 0.0
```
:::
