# SetValue

## Description

**Sets** the receiver attribute values.

## Syntax

```atk-command
Receiver <RcObjectPath> SetValue <AttributePath> [<Value>] [<Unit>]
```

## Parameters

| Parameter | Description |
| --- | --- |
| `Model.Frequency` | Sets the frequency. The default unit is `Hz`. |
| `Model.Govert` | Sets the figure of merit (G/T). The default unit is `dB/K`. |
| `Model.Polarization` | Sets the polarization type, including `None`, `Linear`, `Circular`, `Vertical`, `Horizontal`, and `Elliptical`. |
| `Model.Polarization.ReferenceAxis` | Sets the reference axis, including `X Axis`, `Y Axis`, and `Z Axis`. |
| `Model.Polarization.TiltAngle` | Sets the polarization tilt angle. The default unit is `rad`. |
| `Model.LinkMarginType` | Sets the link margin type, including `None`, `Flux Density`, `RIP`, `Rcvd Carrier Power`, `C/N`, `C/No`, `Eb/No`, and `BER`. |
| `Model.LinkMarginThreshold` | Sets the threshold. The default unit is `dB`. |
| `Model.Demodulator` | Sets the digital carrier modulation type, including `BPAK` and `QPSK`. |

## Examples

::: details open **Set Link Margin Type**
```
Receiver */Satellite/Satellite1/Receiver/Receiver1 SetValue Model.linkmargintype Rcvd Carrier Power
```
:::
