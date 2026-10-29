---
groups: [Antenna]
---

# Antenna

## Description

Sets the model parameters and the pointing attitude of an antenna.

## Syntax

```atk-command
Antenna <AntennaObjectPath> SetValue <Parameter> <Value>
```

## Additional Notes

- `<AntennaObjectPath>` is the full path of the antenna object, written out from the scenario `*`. An antenna is normally attached to a parent object such as a satellite, aircraft, or Facility, for example `*/Satellite/Satellite1/Antenna/Antenna1`. For how to write path parameters, see [Command Syntax Conventions](../../1-命令语法约定.md).
- This command sets only one `<Parameter>` at a time. To set several parameters, execute the command repeatedly.

The `<Parameter>` of an antenna falls into two groups, **antenna model** and **antenna pointing**. Each group consists of one switching parameter and several specific parameters.

| Group | Switching parameter | Specific parameters |
|------|----------|----------|
| Antenna model | `Model` | `Model.DesignFrequency`, `Model.Diameter`, `Model.BackLobeGain`, `Model.Efficiency`, `Model.ExternalAntennaFile` |
| Antenna pointing | `Orientation` | pointing parameters such as `Orientation.AzimuthAngle`, and position offset parameters such as `Orientation.XPositionOffset` |

`Model` and `Orientation` are switching parameters, used to switch the antenna model and the antenna pointing mode respectively. The specific parameters all carry a `Model.` or `Orientation.` prefix and must be set after the switching parameter of their own group. After a switch, the parameters of the previous mode no longer participate in the computation.

**Antenna model**

The `Model` values are as follows, corresponding to the four antenna types in the **Definition** section of the antenna properties.

| `Model` Value | Description |
|------|------|
| `Gaussian` | Gaussian antenna, which describes the pattern with an analytical Gaussian beam model |
| `Isotropic` | Isotropic antenna, an idealized model with the same gain in all directions |
| `Parabolic` | Parabolic antenna, which describes the directivity with a circular-aperture antenna model |
| `ExternalAntennaPattern` | External antenna, whose gain distribution is defined by an external pattern file |

The specific parameters of the `Model` group are as follows.

| Parameter | Description |
|------|------|
| `Model.DesignFrequency` | Design frequency of the antenna model, used to determine the wavelength and involved in the computation of parameters such as antenna gain and beamwidth; the unit is determined by the current Connect `Frequency` unit setting |
| `Model.Diameter` | Aperture diameter of the antenna; the unit is determined by the current Connect `Distance` unit setting |
| `Model.BackLobeGain` | Back-lobe gain of the antenna, in dB |
| `Model.Efficiency` | Efficiency of the antenna, reflecting the performance reduction of the actual antenna relative to an ideal aperture antenna, in % |
| `Model.ExternalAntennaFile` | Pattern file of the external antenna |

**Antenna pointing**

The `Orientation` values are as follows, corresponding to the four pointing modes in the **Pointing** section of the antenna properties.

| `Orientation` Value | Description |
|------|------|
| `AzimuthElevation` | Azimuth-elevation |
| `EulerAngles` | Euler angles |
| `Quaternion` | Quaternion |
| `YPRAngles` | YPR angles |

The specific parameters of the `Orientation` group are as follows.

| Parameter | Description |
|------|------|
| `Orientation.AzimuthAngle` | Azimuth angle, which describes the direction of the antenna axis within the horizontal plane of the reference coordinate system |
| `Orientation.ElevationAngle` | Elevation angle, which describes the elevation of the antenna axis relative to the reference plane |
| `Orientation.AboutBoresight` | Treatment about the boresight in azimuth-elevation mode |
| `Orientation.EulerA` | First Euler rotation angle in Euler angle mode |
| `Orientation.EulerB` | Second Euler rotation angle in Euler angle mode |
| `Orientation.EulerC` | Third Euler rotation angle in Euler angle mode |
| `Orientation.Yaw` | Yaw angle in YPR angle mode, the rotation about the reference Z axis |
| `Orientation.Pitch` | Pitch angle in YPR angle mode, the rotation about the reference Y axis |
| `Orientation.Roll` | Roll angle in YPR angle mode, the rotation about the reference X axis |
| `Orientation.Sequence` | Rotation order in Euler angle and YPR angle modes |
| `Orientation.Qx` | Vector component qx in quaternion mode |
| `Orientation.Qy` | Vector component qy in quaternion mode |
| `Orientation.Qz` | Vector component qz in quaternion mode |
| `Orientation.Qs` | Scalar component qs in quaternion mode |
| `Orientation.XPositionOffset` | X component of the position offset of the antenna reference point relative to the reference origin of the parent object; the unit is determined by the current Connect `Distance` unit setting |
| `Orientation.YPositionOffset` | Y component of the position offset of the antenna reference point relative to the reference origin of the parent object; the unit is determined by the current Connect `Distance` unit setting |
| `Orientation.ZPositionOffset` | Z component of the position offset of the antenna reference point relative to the reference origin of the parent object; the unit is determined by the current Connect `Distance` unit setting |

Notes:

- The antenna model and the antenna pointing together determine the actual gain along the link direction, and both must be set correctly.
- For parameters with units, the unit is determined by the current Connect unit settings rather than being a fixed value: the angle parameters under `Orientation` are entered in the `Angle` unit, `Model.DesignFrequency` in the `Frequency` unit, and `Model.Diameter` together with the three position offset components under `Orientation` in the `Distance` unit. For how to set units, see [Unit Format](../../2-参数值格式/单位格式.md).
- The dB of `Model.BackLobeGain` and the % of `Model.Efficiency` have no corresponding dimension in the unit settings; they are fixed units and are not affected by the Connect unit settings.
- A parameter value that contains spaces, such as the file path of `Model.ExternalAntennaFile`, must be enclosed in double quotes as a whole; see [Command Syntax Conventions](../../1-命令语法约定.md).

## Examples

::: details open **Set the antenna model to a Gaussian antenna**

```
Antenna */Satellite/Satellite1/Antenna/Antenna1 SetValue Model Gaussian
```

- `*/Satellite/Satellite1/Antenna/Antenna1`: full path of the antenna object
- `Model`: the parameter to set, here the antenna model type
- `Gaussian`: the model value, denoting a Gaussian antenna

:::

::: details open **Set the model parameters of a Gaussian antenna**

```
Antenna */Satellite/Satellite1/Antenna/Antenna1 SetValue Model.DesignFrequency 2.4
Antenna */Satellite/Satellite1/Antenna/Antenna1 SetValue Model.Diameter 3.0
```

- `Model.DesignFrequency`: the parameter to set, here the design frequency of the antenna model
- `2.4`: the design frequency value; the unit is determined by the current Connect frequency unit setting
- `Model.Diameter`: the parameter to set, here the aperture diameter of the antenna
- `3.0`: the aperture diameter value; the unit is determined by the current Connect `Distance` unit setting

:::

::: details open **Set the antenna pointing mode to azimuth-elevation**

```
Antenna */Satellite/Satellite1/Antenna/Antenna1 SetValue Orientation AzimuthElevation
Antenna */Satellite/Satellite1/Antenna/Antenna1 SetValue Orientation.AzimuthAngle 45
Antenna */Satellite/Satellite1/Antenna/Antenna1 SetValue Orientation.ElevationAngle 30
```

- `Orientation`: the parameter to set, here the antenna pointing mode
- `AzimuthElevation`: the pointing mode value, denoting azimuth-elevation
- `Orientation.AzimuthAngle`: the parameter to set, here the azimuth angle
- `45`: the azimuth angle value
- `Orientation.ElevationAngle`: the parameter to set, here the elevation angle
- `30`: the elevation angle value

:::

::: details open **Set the antenna mounting position offset**

```
Antenna */Satellite/Satellite1/Antenna/Antenna1 SetValue Orientation.XPositionOffset 1.5
Antenna */Satellite/Satellite1/Antenna/Antenna1 SetValue Orientation.YPositionOffset 0.0
Antenna */Satellite/Satellite1/Antenna/Antenna1 SetValue Orientation.ZPositionOffset -0.5
```

- `Orientation.XPositionOffset`: the parameter to set, here the X component of the position offset of the antenna reference point relative to the reference origin of the parent object
- `1.5`: the X offset value; the unit is determined by the current Connect `Distance` unit setting
- `Orientation.YPositionOffset`: the parameter to set, here the Y component of the position offset
- `0.0`: the Y offset value; the unit is determined by the current Connect `Distance` unit setting
- `Orientation.ZPositionOffset`: the parameter to set, here the Z component of the position offset
- `-0.5`: the Z offset value; the unit is determined by the current Connect `Distance` unit setting

:::
