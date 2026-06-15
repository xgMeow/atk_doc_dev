# SetValue

## 作用

**设置**接收器属性值。

## 语法

```
Receiver <RcObjectPath> SetValue <AttributePath> [<Value>] [<Unit>]
```

## 参数说明

| 参数 | 说明 |
| --- | --- |
| `Model.Frequency` | 设置频率，默认单位为 `Hz` |
| `Model.Govert` | 设置品质因素，默认单位为 `dB/K` |
| `Model.Polarization` | 设置极化类型，包括 `None`、`Linear`、`Circular`、`Vertical`、`Horizontal`、`Elliptical` |
| `Model.Polarization.ReferenceAxis` | 设置参考轴，包括 `X Axis`、`Y Axis`、`Z Axis` |
| `Model.Polarization.TiltAngle` | 设置极化角度，默认单位为 `rad` |
| `Model.LinkMarginType` | 设置链路裕量类型，包括 `None`、`Flux Density`、`RIP`、`Rcvd Carrier Power`、`C/N`、`C/No`、`Eb/No`、`BER` |
| `Model.LinkMarginThreshold` | 设置阈值，默认单位为 `dB` |
| `Model.Demodulator` | 设置数字载波调制类型，包括 `BPAK`、`QPSK` |

## 示例

::: details open **设置链路裕量类型**
```
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.linkmargintype Rcvd Carrier Power
```
:::
