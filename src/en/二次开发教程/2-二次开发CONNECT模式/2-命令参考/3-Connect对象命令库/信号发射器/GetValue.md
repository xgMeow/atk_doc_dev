# GetValue

## Description

Gets the transmitter attribute values.

## Syntax

```atk-command
Transmitter_RM <ObjectPath> GetValue [<AttributePath>]
```

## Parameters

| Parameter | Description |
|------|------|
| | Gets all attributes and their values. |
| `UserComment` | Gets the object description. |
| `Model` | Gets the model's existing attributes and their values. |
| `Model.UserComment` | Gets the model description. |
| `Model.Frequency` | Gets the frequency. |
| `Model.Modulator` | Gets the digital carrier modulation type. |
| `Model.Modulator.Us-  erComment` | Gets the description of the digital carrier modulation type. |
| `Model.Modulator.Band- width` | Gets the name of the digital carrier modulation type. |
| `Model.DataRate` | Gets the data rate. |
| `Model.EIRP` | Gets the EIRP. |
| `Model.Polarization` | Gets the polarization type. |
| `Model.Polarization.Refer- enceAxis` | Gets the polarization reference axis. |
| `Model.Polarization.TiltAn- gle` | Gets the polarization tilt angle. |

### Attribute Parameters

| Attribute Parameters | Description |
|----------|------|
| `Properties` | Gets all the parameters defined for the current attribute, including its maximum, minimum, units, etc. |
| `Choices` | Gets all selectable options for the current attribute. |
| `Size` | Gets the number of rows that have values in the list returned for the current attribute. |

### Supported Attribute Parameters

| `{AttributePath}` | Supported Attribute Parameters |
|-------------------|----------|
| `UserComment` | Includes `Properties`. |
| `Model` | Includes `Properties`, `Choices`, and `Size`. |
| `Model.UserComment` | Includes `Properties`. |
| `Model.Frequency` | Includes `Properties`. |
| `Model.Modulator` | Includes `Properties`, `Choices`, and `Size`. |
| `Model.Modulator.UserComment` | Includes `Properties`. |
| `Model.Modulator.Bandwidth` | Includes `Properties`. |
| `Model.DataRate` | Includes `Properties`. |
| `Model.EIRP` | Includes `Properties`. |
| `Model.Polarization` | Includes `Properties`, `Choices`, and `Size`. |
| `Model.Polarization.ReferenceAxis` | Includes `Properties`, `Choices`. |
| `Model.Polarization.TiltAngle` | Includes `Properties`. |

## Examples

::: details open **Get All Attributes and Their Values**
```
Transmitter_RM */Satellite/Sate1/Transmitter/Trans1 GetValue
```
:::

::: details open **Get the Size of the Model Polarization Type**
```
Transmitter_RM */Satellite/Satellite1/Transmitter/Transmitter1 GetValue model.polarization:size
```
:::
