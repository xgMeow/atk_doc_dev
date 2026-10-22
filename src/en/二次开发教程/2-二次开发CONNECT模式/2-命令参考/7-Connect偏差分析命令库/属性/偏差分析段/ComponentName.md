# ComponentName

## Description

Renames the deviation analysis segment.

## Syntax

```atk-command
AstroUQ <SatelliteObjectPath> SetValue <AttributePath>.ComponentName <Rename>
```

## Additional Notes

The following table describes the command parameters.

| Parameter | Description |
|------|------|
| `<SatelliteObjectPath>` | Full path of the satellite object, specified in full starting from the scenario `*`, for example `*/Satellite/Satellite1` |
| `<AttributePath>` | Path of the deviation analysis segment in the flight sequence, for example `MainSequence.SegmentList.UncertQuantify` |
| `<Rename>` | New name of the deviation analysis segment |

## Examples

::: details open **Rename the deviation analysis segment**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.UncertQuantify.ComponentName Temp
```

- `*/Satellite/Satellite1`: full path of the satellite object
- `MainSequence.SegmentList.UncertQuantify.ComponentName`: attribute path, the name of the deviation analysis segment
- `Temp`: new name of the deviation analysis segment

:::
