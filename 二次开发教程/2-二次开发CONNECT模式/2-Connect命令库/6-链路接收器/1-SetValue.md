## SetValue

 

作用：设置接收器属性值

::: note 用法
```
Receiver <RcObjectPath> SetValue <AttributePath> [<Value>] [<Unit>]
```
:::

::: details 参数设置说明（点击展开）

| `{AttributePath}`                  | 说明                                                         |
| ---------------------------------- | ------------------------------------------------------------ |
| Model.Frequency                    | 设置频率，默认单位为 `Hz`                                 |
| Model.Govert                       | 设置品质因素，默认单位为 `dB/K`                                   |
| Model.Polarization                 | 设置极化类型，包括 `None`, `Linear`, `Circular`, `Vertical`,  `Horizontal`, `Elliptical` |
| Model.Polarization.ReferenceAxis   | 设置参考轴，包括 `X Axis` ，`Y Axis` ，`Z Axis`                     |
| Model.Polarization.TiltAngle       | 设置极化角度，默认单位为 `rad`                                |
| Model.LinkMarginType               | 设置链路裕量类型，包括 `None` ，`Flux Density` ，`RIP` ，`Rcvd Carrier Power` ，`C/N` ，`C/No`， `Eb/No` ，`BER`                          |
| Model.LinkMarginThreshold          | 设置阈值，默认单位为 `dB`                                 |
| Model.Demodulator                  | 设置数字载波调制类型，包括 `BPAK` ，`QPSK`                      |

:::

::: tip 举例
```
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.linkmargintype Rcvd Carrier Power
```
:::
