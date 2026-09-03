---
description: Sets the pulse display properties of the sensor, including the pulse on/off switch, amplitude, length, frequency, and reverse parameter configurations.
---

# VO Pulse

## Description

Sets the pulse properties.

## Syntax

```atk-command
VO <SensorObjectPath> Pulse {PulseOption1} <Value1> [{PulseOption2} <Value2>...]
```

## Parameters

| PulseOption | Value            | Description                                        |
| ----------- | ---------------- | -------------------------------------------------- |
| Show        | `{On \| Off}`    | If the input value is Off, the other properties cannot be set. |
| Amplitude   | `<AmpValue>`     | The pulse transparency input value should be between 0.0 and 1.0. |
| PulseLength | `<LengthValue>`  | The input pulse length value should be greater than or equal to 0.000001m. |
| Frequency   | `<Value>`        | The input pulse frequency value should be between 0.0 and 100.0. |
| FreqReverse | `{On \| Off}`    | If the input value is On, the pulse is reversed.   |

## Examples

::: details open **Set Pulse Properties**
```
VO */Satellite/Satellite1/Sensor/Sensor1 Pulse Show On Amplitude 0.67 PulseLength 100 Frequency 2.1 FreqReverse on
```
:::
