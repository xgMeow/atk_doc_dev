# InitialSampleSize

## Description

Sets the initial sample size on the Polynomial Chaos property page of the deviation analysis segment.

## Syntax

```atk-command
AstroUQ <SatelliteObjectPath> SetValue <AttributePath>.Profiles.PolynomialChaosExpansion.InitialSampleSize <Value>
```

## Additional Notes

The following table describes the command parameters.

| Parameter | Description |
|------|------|
| `<SatelliteObjectPath>` | Full path of the satellite object, specified in full starting from the scenario `*`, for example `*/Satellite/Satellite1` |
| `<AttributePath>` | Path of the deviation analysis segment in the flight sequence, for example `MainSequence.SegmentList.UncertQuantify` |
| `<Value>` | Initial sample size, an integer |

## Examples

::: details open **Set the initial sample size of the deviation analysis segment**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.UncertQuantify.Profiles.PolynomialChaosExpansion.InitialSampleSize 10
```

- `*/Satellite/Satellite1`: full path of the satellite object
- `MainSequence.SegmentList.UncertQuantify.Profiles.PolynomialChaosExpansion.InitialSampleSize`: attribute path, the initial sample size of the deviation analysis segment
- `10`: initial sample size

:::
