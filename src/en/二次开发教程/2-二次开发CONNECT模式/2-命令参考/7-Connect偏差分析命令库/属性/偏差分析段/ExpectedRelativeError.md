# ExpectedRelativeError

## Description

Sets the expected relative error on the adaptive Gaussian mixture model and polynomial chaos expansion property page of the deviation analysis segment.

## Syntax

```atk-command
AstroUQ <SatelliteObjectPath> SetValue <AttributePath>.Profiles.PolynomialChaosExpansion.ExpectedRelativeError <Value>
```

## Additional Notes

The following table describes the command parameters.

| Parameter | Description |
|------|------|
| `<SatelliteObjectPath>` | Full path of the satellite object, specified in full starting from the scenario `*`, for example `*/Satellite/Satellite1` |
| `<AttributePath>` | Path of the deviation analysis segment in the flight sequence, for example `MainSequence.SegmentList.UncertQuantify` |
| `<Value>` | Expected relative error, a decimal |

## Examples

::: details open **Set the expected relative error of the deviation analysis segment**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.UncertQuantify.Profiles.PolynomialChaosExpansion.ExpectedRelativeError 0.0001
```

- `*/Satellite/Satellite1`: full path of the satellite object
- `MainSequence.SegmentList.UncertQuantify.Profiles.PolynomialChaosExpansion.ExpectedRelativeError`: attribute path, the expected relative error of the deviation analysis segment
- `0.0001`: expected relative error

:::
