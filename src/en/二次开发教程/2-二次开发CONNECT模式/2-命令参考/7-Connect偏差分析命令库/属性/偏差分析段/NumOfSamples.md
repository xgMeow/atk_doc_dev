# NumOfSamples

## Description

Sets the number of sample points on the Monte Carlo property page of the deviation analysis segment.

## Syntax

```atk-command
AstroUQ <SatelliteObjectPath> SetValue <AttributePath>.Profiles.PolynomialChaosExpansion.NumOfSamples <Value>
```

## Additional Notes

The following table describes the command parameters.

| Parameter | Description |
|------|------|
| `<SatelliteObjectPath>` | Full path of the satellite object, specified in full starting from the scenario `*`, for example `*/Satellite/Satellite1` |
| `<AttributePath>` | Path of the deviation analysis segment in the flight sequence, for example `MainSequence.SegmentList.UncertQuantify` |
| `<Value>` | Number of sample points, an integer |

## Examples

::: details open **Set the number of sample points of the deviation analysis segment**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.UncertQuantify.Profiles.PolynomialChaosExpansion.NumOfSamples 10
```

- `*/Satellite/Satellite1`: full path of the satellite object
- `MainSequence.SegmentList.UncertQuantify.Profiles.PolynomialChaosExpansion.NumOfSamples`: attribute path, the number of sample points of the deviation analysis segment
- `10`: number of sample points

:::
