# Distribution

## Description

Sets the deviation type on the property page of the deviation analysis segment.

## Syntax

```atk-command
AstroUQ <SatelliteObjectPath> SetValue <AttributePath>.Profiles.PolynomialChaosExpansion.Distribution <DistributionType>
```

## Additional Notes

The following table describes the command parameters.

| Parameter | Description |
|------|------|
| `<SatelliteObjectPath>` | Full path of the satellite object, specified in full starting from the scenario `*`, for example `*/Satellite/Satellite1` |
| `<AttributePath>` | Path of the deviation analysis segment in the flight sequence, for example `MainSequence.SegmentList.UncertQuantify` |
| `<DistributionType>` | Deviation type; see the table below for the values |

The values of `<DistributionType>` are as follows.

| `<DistributionType>` | Description |
|------|------|
| `Gauss` | Gaussian distribution |
| `Uniform` | Uniform distribution |
| `Mixture` | Mixture distribution |

## Examples

::: details open **Set the deviation type of the deviation analysis segment to Gaussian distribution**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.UncertQuantify.Profiles.PolynomialChaosExpansion.Distribution Gauss
```

- `*/Satellite/Satellite1`: full path of the satellite object
- `MainSequence.SegmentList.UncertQuantify.Profiles.PolynomialChaosExpansion.Distribution`: attribute path, the deviation type of the deviation analysis segment
- `Gauss`: deviation type, here Gaussian distribution

:::
