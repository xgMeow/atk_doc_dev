# SetValue

## 作用

设置发射器属性值

## 语法

```
Transmitter <XmObjectPath> SetValue <AttributePath> [<Value>] [<Unit>]
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Model.Frequency` | 设置频率，默认单位为 `Hz` |
| `Model.DataRate` | 设置符号速率，默认单位为 `Mb/sec` |
| `Model.EIRP` | 设置 `EIRP`，默认单位为 `dBW` |
| `Model.Polarization` | 设置极化类型，包括 `None`、`Linear`、`Circular`、`Vertical`、`Horizontal`、`Elliptical` |
| `Model.Polarization.ReferenceAxis` | 设置参考轴，包括 `X Axis`、`Y Axis`、`Z Axis` |
| `Model.Polarization.TiltAngle` | 设置极化角度，默认单位为 `rad` |
| `Model.Modulator` | 设置数字载波调制类型，包括 `BPSK`、`QPSK` |
| `Model.Modulator.Band width` | 设置带宽，默认单位为 `Hz` |

## 示例

::: details open **设置极化类型为 Linear**
```
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model.Polarization Linear
```
:::
