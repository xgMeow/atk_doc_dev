# ExpansionOrder

## Description

Sets the maximum expansion order on the Polynomial Chaos property page of the deviation analysis segment.

## Syntax

```atk-command
AstroUQ <SatelliteObjectPath> SetValue <AttributePath>.Profiles.PolynomialChaosExpansion.ExpansionOrder <Value>
```

## Additional Notes

The following table describes the command parameters.

| Parameter | Description |
|------|------|
| `<SatelliteObjectPath>` | Full path of the satellite object, specified in full starting from the scenario `*`, for example `*/Satellite/Satellite1` |
| `<AttributePath>` | Path of the deviation analysis segment in the flight sequence, for example `MainSequence.SegmentList.UncertQuantify` |
| `<Value>` | Maximum expansion order, an integer |

## Examples

::: details open **Set the maximum expansion order of the deviation analysis segment**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.UncertQuantify.Profiles.PolynomialChaosExpansion.ExpansionOrder 10
```

- `*/Satellite/Satellite1`: full path of the satellite object
- `MainSequence.SegmentList.UncertQuantify.Profiles.PolynomialChaosExpansion.ExpansionOrder`: attribute path, the maximum expansion order of the deviation analysis segment
- `10`: maximum expansion order

:::
