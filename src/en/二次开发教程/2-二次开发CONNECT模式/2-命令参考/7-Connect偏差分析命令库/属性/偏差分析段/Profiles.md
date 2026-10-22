# Profiles

## Description

Sets the deviation analysis segment property page.

## Syntax

```atk-command
AstroUQ <SatelliteObjectPath> SetValue <AttributePath>.Profiles <ListOfProfiles>
```

## Additional Notes

The following table describes the command parameters.

| Parameter | Description |
|------|------|
| `<SatelliteObjectPath>` | Full path of the satellite object, specified in full starting from the scenario `*`, for example `*/Satellite/Satellite1` |
| `<AttributePath>` | Path of the deviation analysis segment in the flight sequence, for example `MainSequence.SegmentList.UncertQuantify` |
| `<ListOfProfiles>` | Deviation analysis method used by the deviation analysis segment; see the table below for the values |

The values of `<ListOfProfiles>` are as follows.

| `<ListOfProfiles>` | Description |
|------|------|
| `PolynomialChaosExpansion` | Polynomial chaos |
| `MonteCarloSimulation` | Monte Carlo |
| `AdaptiveGMM-PCE` | Adaptive Gaussian mixture model with polynomial chaos expansion |

Notes:

- The property page must be added before the deviation analysis segment property page can be configured.
- For the full-path and truncated-path forms of path parameters, see [Command Syntax Conventions](../../../1-命令语法约定.md).

## Examples

::: details open **Set the deviation analysis method of the deviation analysis segment to polynomial chaos**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.UncertQuantify.Profiles PolynomialChaosExpansion
```

- `*/Satellite/Satellite1`: full path of the satellite object
- `MainSequence.SegmentList.UncertQuantify.Profiles`: attribute path, the data analysis configuration of the deviation analysis segment
- `PolynomialChaosExpansion`: deviation analysis method, here polynomial chaos

:::
