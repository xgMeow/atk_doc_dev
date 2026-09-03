# SetValue

## Description

Sets the transmitter attribute values.

## Syntax

```atk-command
Transmitter <XmObjectPath> SetValue <AttributePath> [<Value>] [<Unit>]
```

## Parameters

| Parameter | Description |
|------|------|
| `Model.Frequency` | Sets the frequency. The default unit is `Hz`. |
| `Model.DataRate` | Sets the symbol rate. The default unit is `Mb/sec`. |
| `Model.EIRP` | Sets the `EIRP`. The default unit is `dBW`. |
| `Model.Polarization` | Sets the polarization type, including `None`, `Linear`, `Circular`, `Vertical`, `Horizontal`, and `Elliptical`. |
| `Model.Polarization.ReferenceAxis` | Sets the reference axis, including `X Axis`, `Y Axis`, and `Z Axis`. |
| `Model.Polarization.TiltAngle` | Sets the polarization tilt angle. The default unit is `rad`. |
| `Model.Modulator` | Sets the digital carrier modulation type, including `BPSK` and `QPSK`. |
| `Model.Modulator.Band width` | Sets the bandwidth. The default unit is `Hz`. |

## Examples

::: details open **Set the Polarization Type to Linear**
```
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model.Polarization Linear
```
:::
