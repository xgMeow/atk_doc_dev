# SetState Cartesian

## 作用

设置卫星对象 Cartesian 状态。

## 语法

```atk-command
SetState <VehObjectPath> Cartesian {Propagator} {NoProp | {TimeInterval}} <StepSize> {CoordSystem} "<OrbitEpoch>" <X> <Y> <Z> <vX> <vY> <vZ> ["<CoordEpoch>"]
```

## 参数说明

::: details 详细说明（点击展开）

| `Parameters` | 说明 |
| --- | --- |
| `{Propagator}` | 卫星可得属性值为 `TwoBody`, `J2Perturbation`, `J4Perturbation`, `HPOP` 和 `LOP` |
| `{NoProp \| {TimeInterval}}` | 输入 NoProp 可以设置卫星状态但是不进行预报。输入 TimeInterval 定义卫星预报的开始结束时间段，设置格式请查看[常用日期/时间格式](/二次开发教程/2-二次开发CONNECT模式/2-命令参考/2-参数值格式/日期时间格式.md) |
| `<StepSize>` | 输入必须大于等于 0.001 秒 |
| `{CoordSystem}` | 坐标系可设置为 `ICRF`,`J2000`,`Fixed`, `TrueOfDate`,`MeanOfDate`,`TEMEOfDate` |
| `"<OrbitEpoch>"` | 请查看[常用日期/时间格式](/二次开发教程/2-二次开发CONNECT模式/2-命令参考/2-参数值格式/日期时间格式.md) |
| `<X>`, `<Y>`, `<Z>`, `<vX>`, `<vY>`, `<vZ>` | 输入位置速度参数 |
| `["<CoordEpoch>"]` | 请查看[常用日期/时间格式](/二次开发教程/2-二次开发CONNECT模式/2-命令参考/2-参数值格式/日期时间格式.md) |

:::

## 补充说明

- 时间设置暂无作用，时间以场景时间为准

## 示例

::: details open **设置卫星 Cartesian 状态**
```
SetState */Satellite/Satellite1 Cartesian J4Perturbation "1 Nov 2000 00:00:00.00" "1 Nov 2000 08:00:00.00" 60 J2000 "1 Nov 2000 00:00:00.00" -986500 -42152457.0 364.8 3073.7 -0071.9 -0014.9
```
:::
