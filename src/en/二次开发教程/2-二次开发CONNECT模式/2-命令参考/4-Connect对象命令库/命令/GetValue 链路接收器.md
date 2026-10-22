---
groups: [Receiver]
---

# GetValue

## Description

**Gets** the receiver attribute values.

## Syntax

```atk-command
Receiver_RM <RcObjectPath> GetValue [<AttributePath>]
```

## Parameters

| Parameter | Description |
| --- | --- |
| `{AttributePath}` (empty) | Gets all attributes and their values |
| `usercomment` | Gets the object description |
| `model` | Gets the model's existing attributes and their values |
| `model.usercomment` | Gets the model description |
| `model.demodulator` | Gets the digital carrier modulation type |
| `model.demodulator.usercomment` | Gets the description of the digital carrier modulation type |
| `model.demodulator.modulationname` | Gets the name of the digital carrier modulation type |
| `model.linkmargintype` | Gets the link margin type |
| `model.linkmarginthreshold` | Gets the threshold |
| `model.govert` | Gets the figure of merit |
| `model.polarization` | Gets the polarization type |
| `model.polarization.referenceaxis` | Gets the polarization reference axis |
| `model.polarization.tiltangle` | Gets the polarization tilt angle |
| `model.frequency` | Gets the receive frequency |

Attribute parameters:

| Attribute Parameters | Description |
| --- | --- |
| `Properties` | Gets all the parameters defined for the current attribute, including the maximum, minimum, units, etc. |
| `Choices` | Gets all selectable options for the current attribute |
| `Size` | Gets the number of rows that have values in the list returned for the current attribute |

Mapping of attributes to supported attribute parameters:

| Attribute Path | Supported Attribute Parameters |
| --- | --- |
| `UserComment` | Includes `Properties` |
| `Model` | Includes `Properties`, `Choices`, `Size` |
| `Model.UserComment` | Includes `Properties` |
| `Model.Demodulator` | Includes `Properties`, `Choices`, `Size` |
| `Model.Demodulator.UserComment` | Includes `Properties` |
| `Model.Demodulator.ModulationName` | Includes `Properties` |
| `Model.LinkmarginType` | Includes `Properties`, `Choices` |
| `Model.GoverT` | Includes `Properties` |
| `Model.Polarization` | Includes `Properties`, `Choices`, `Size` |
| `Model.Polarization.ReferenceAxis` | Includes `Properties`, `Choices` |
| `Model.Polarization.TiltAngle` | Includes `Properties` |
| `Model.frequency` | Includes `Properties` |

## Examples

::: details open **Get all attribute values**
```
Receiver_RM */Satellite/Satellite1/Receiver/Receiver1 GetValue
```
:::

::: details open **Get the size of the model polarization attribute**
```
Receiver_RM */Satellite/Sate1/Receiver/Receiver1 GetValue model.polarization:size
```
:::
