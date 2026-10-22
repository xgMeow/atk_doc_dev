---
groups: [Antenna]
---

# Antenna_RM

## Description

Retrieves parameters such as the antenna model parameters and the antenna pointing attitude.

## Syntax

```atk-command
Antenna_RM <AntennaObjectPath> GetValue <Parameter>
```

## Additional Notes

- `<AntennaObjectPath>` is the full path of the antenna object, written out from the scenario `*`, for example `*/Satellite/Satellite1/Antenna/Antenna1`. For the notation of path parameters, see [Command Syntax Conventions](../../1-命令语法约定.md).
- This command shares the same set of `<Parameter>` names with `Antenna`, so a query uses the same parameter name, without `<Value>`.
- This command queries only one `<Parameter>` at a time. To query several parameters, execute the command repeatedly.
- The command returns the value of the queried parameter.

`<Parameter>` is likewise divided into two groups, **Antenna Model** and **Antenna Pointing**:

- **Antenna Model**: the toggle parameter is `Model`, with the values `Gaussian`, `Isotropic`, `Parabolic`, and `ExternalAntennaPattern`; the specific parameters are `Model.DesignFrequency`, `Model.Diameter`, `Model.BackLobeGain`, `Model.Efficiency`, and `Model.ExternalAntennaFile`.
- **Antenna Pointing**: the toggle parameter is `Orientation`, with the values `AzimuthElevation`, `EulerAngles`, `Quaternion`, and `YPRAngles`; the specific parameters are `Orientation.AzimuthAngle`, `Orientation.ElevationAngle`, `Orientation.AboutBoresight`, `Orientation.EulerA`, `Orientation.EulerB`, `Orientation.EulerC`, `Orientation.Yaw`, `Orientation.Pitch`, `Orientation.Roll`, `Orientation.Sequence`, `Orientation.Qx`, `Orientation.Qy`, `Orientation.Qz`, `Orientation.Qs`, `Orientation.XPositionOffset`, `Orientation.YPositionOffset`, and `Orientation.ZPositionOffset`.

`Model` and `Orientation` are toggle parameters that switch the antenna model and the antenna pointing mode respectively; every specific parameter carries the corresponding `Model.` or `Orientation.` prefix. After a switch, the parameters of the previous mode no longer participate in the computation. Therefore, before querying a specific parameter, the toggle parameter of the group that contains it must first have been set with `Antenna`.

## Examples

::: details open **Get the Antenna Model Type**

```
Antenna_RM */Satellite/Satellite1/Antenna/Antenna1 GetValue Model
```

- `*/Satellite/Satellite1/Antenna/Antenna1`: full path of the antenna object
- `Model`: parameter to query, here the antenna model type

:::

::: details open **Get the Antenna Design Frequency**

```
Antenna_RM */Satellite/Satellite1/Antenna/Antenna1 GetValue Model.DesignFrequency
```

- `*/Satellite/Satellite1/Antenna/Antenna1`: full path of the antenna object
- `Model.DesignFrequency`: parameter to query, here the design frequency of the antenna model

:::
