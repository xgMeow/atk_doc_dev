# Mode

## Description

Sets the mode on the property page of the deviation analysis segment.

## Syntax

```atk-command
AstroUQ <SatelliteObjectPath> SetValue <AttributePath>.Profiles.PolynomialChaosExpansion.Mode <ModeType>
```

## Additional Notes

The following table describes the command parameters.

| Parameter | Description |
|------|------|
| `<SatelliteObjectPath>` | Full path of the satellite object, specified in full starting from the scenario `*`, for example `*/Satellite/Satellite1` |
| `<AttributePath>` | Path of the deviation analysis segment in the flight sequence, for example `MainSequence.SegmentList.UncertQuantify` |
| `<ModeType>` | Mode; see the table below for the values |

The values of `<ModeType>` are as follows.

| `<ModeType>` | Description |
|------|------|
| `Iterate` | Iteration |
| `Not Active` | Not Active |
| `Run Once` | Run Once |

Notes:

- The `Not Active` and `Run Once` values of `<ModeType>` contain spaces and must be enclosed in double quotes, for example `"Not Active"`.

## Examples

::: details open **Set the mode of the deviation analysis segment to Iteration**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.UncertQuantify.Profiles.PolynomialChaosExpansion.Mode Iterate
```

- `*/Satellite/Satellite1`: full path of the satellite object
- `MainSequence.SegmentList.UncertQuantify.Profiles.PolynomialChaosExpansion.Mode`: attribute path, the mode of the deviation analysis segment
- `Iterate`: mode, here Iteration

:::

::: details open **Set the mode of the deviation analysis segment to Not Active**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.UncertQuantify.Profiles.PolynomialChaosExpansion.Mode "Not Active"
```

- `"Not Active"`: mode, here Not Active; the string contains spaces and must be enclosed in double quotes

:::
