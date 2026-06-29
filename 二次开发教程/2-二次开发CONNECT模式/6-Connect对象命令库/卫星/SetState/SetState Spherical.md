# SetState Spherical

## 作用

设置卫星对象 Spherical 状态。

## 语法

```atk-command
SetState <VehObjectPath> Spherical {Propagator} {NoProp | {TimeInterval}} <StepSize> {CoordSystem} "<OrbitEpoch>" <RightAscension> <Declination> <Radius> <HorizontalFlightPathAngle> <FlightPathAzimuth> <Velocity> ["<CoordEpoch>"]
```

## 参数说明

::: details 详细说明（点击展开）

| `Parameter` | 说明 |
| --- | --- |
| `{Propagator}` | 卫星可得属性值为 `TwoBody`, `J2Perturbation`, `J4Perturbation`, `HPOP` 和 `LOP` |
| `{NoProp \| {TimeInterval}}` | 输入 NoProp 可以设置卫星状态但是不进行预报。输入 TimeInterval 定义卫星预报的开始结束时间段，设置格式请查看[常用日期/时间格式](/二次开发教程/2-二次开发CONNECT模式/常用设置格式/日期时间格式.md) |
| `<StepSize>` | 输入必须大于等于 0.001 秒。若选择 LOP 预报器，输入必须大于等于一天（86164.09 秒） |
| `{CoordSystem}` | 坐标系可设置为 `ICRF`,`J2000`,`Fixed`, `TrueOfDate`,`MeanOfDate`,`TEMEOfDate` |
| `"<OrbitEpoch>"` | 请查看[常用日期/时间格式](/二次开发教程/2-二次开发CONNECT模式/常用设置格式/日期时间格式.md) |
| `<RightAscension>` | 输入赤经参数，默认单位是度 |
| `<Declination>` | 输入赤纬参数，默认单位是度 |
| `<Radius>` | 输入半径参数，默认单位是米 |
| `<HorizontalFlightPathAngle>` | 输入水平航迹角参数，默认单位是度 |
| `<FlightPathAzimuth>` | 输入方位角参数，默认单位是度 |
| `<Velocity>` | 输入速度参数，默认单位是 m/sec |
| `["<CoordEpoch>"]` | 请查看[常用日期/时间格式](/二次开发教程/2-二次开发CONNECT模式/常用设置格式/日期时间格式.md) |

:::

## 示例

::: details open **设置卫星 Spherical 状态**
```
SetState */Satellite/Satellite1 Spherical TwoBody "1 Jul 2005 12:00:00.00" "1 Jul 2005 12:00:00.00" 60.0 J2000 "1 Jul 2005 12:00:00.00" 0 0 6678137 0 61.5 7725.7
```
:::
