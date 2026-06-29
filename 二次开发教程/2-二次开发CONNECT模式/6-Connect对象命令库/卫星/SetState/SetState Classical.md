# SetState Classical

## 作用

设置卫星对象 Classical 状态。

## 语法

```atk-command
SetState <VehObjectPath> Classical {Propagator} {NoProp | {TimeInterval}} <StepSize> {CoordSystem} "<OrbitEpoch>" <SemiMajorAxis> <Eccentricity> <Inclination> <ArgOfPerigee> <RAAN> <MeanAnom> ["<CoordEpoch>"]
```

## 参数说明

::: details 详细说明（点击展开）

| `Parameters` | 说明 |
| --- | --- |
| `{Propagator}` | 卫星可得属性值为 `TwoBody`, `J2Perturbation`, `J4Perturbation`, `HPOP` 和 `LOP` |
| `{NoProp \| {TimeInterval}}` | 输入 NoProp 可以设置卫星状态但是不进行预报，输入 TimeInterval 定义卫星预报的开始结束时间段，设置格式请查看[常用日期/时间格式](/二次开发教程/2-二次开发CONNECT模式/常用设置格式/日期时间格式.md) |
| `<StepSize>` | 输入必须大于等于 0.001 秒。若选择 LOP 预报器，输入必须大于等于一天（86164.09 秒） |
| `{CoordSystem}` | 坐标系可设置为 `ICRF`,`J2000`, `TrueOfDate`,`MeanOfDate`,`TEMEOfDate` |
| `"<OrbitEpoch>"` | 请查看[常用日期/时间格式](/二次开发教程/2-二次开发CONNECT模式/常用设置格式/日期时间格式.md) |
| `<SemiMajorAxis>` | 输入半长轴参数 |
| `<Eccentricity>` | 输入离心率参数，参数值应大于等于 0.0 且小于等于 1.0 |
| `<Inclination>` | 输入轨道倾角参数，默认单位是度 |
| `<ArgOfPerigee>` | 输入近地点角参数，默认单位是度 |
| `<RAAN>` | 输入升交点赤经参数，默认单位是度 |
| `<MeanAnom>` | 输入平近点角参数，默认单位是度 |
| `["<CoordEpoch>"]` | 请查看[常用日期/时间格式](/二次开发教程/2-二次开发CONNECT模式/常用设置格式/日期时间格式.md) |

:::

::: tip 注意
- 此命令不接受小于 `-180` 度的轨道参数值
- 时间设置暂无作用，时间以场景时间为准
:::

## 示例

::: details open **设置卫星 Classical 状态**
```
SetState */Satellite/Satellite1 Classical HPOP "1 Nov 2000 00:00:00.00" "1 Nov 2000 04:00:00.00" 60 J2000 "1 Nov 2000 00:00:00.00" 7163000.137079 0.5 98.5 0.0 139.7299 120.0
```
:::
