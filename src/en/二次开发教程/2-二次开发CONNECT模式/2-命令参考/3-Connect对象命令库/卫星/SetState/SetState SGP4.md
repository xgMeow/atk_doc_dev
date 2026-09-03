# SetState SGP4

## Description

Sets the SGP4 state of the satellite object.

## Syntax

```atk-command
SetState <SatObjectPath> SGP4 {NoProp | {TimeInterval}} <StepSize> <SSCNumber> TLESource {Automatic | DefineElements} [<Parameters >]
```

## Parameters

::: details Detailed Description (click to expand)

| `Parameter` | Description |
| --- | --- |
| `{NoProp \| {TimeInterval}}` | For the `TimeInterval` format, see [Common Date/Time Formats](../../../2-参数值格式/日期时间格式.md) |
| `TLESource {Automatic \| DefineElements}` | See the table below |

- If the value of `TLESource` is `Automatic`, the following parameters can be included:

| `Parameter` | Description |
| --- | --- |
| `Source {AGIServer \| File "<Filename>"}` | Defaults to `AGIServer`. If `Filename` is entered, the file path should be included, and `SSCNum` must be included |
| `UseTLE {All \| First}` | Use this method to restore `TLE` data. The default value is `All` |
| `SwitchMethod {Epoch \| Midpoint \| TCA}` | Sets the method to convert `TLE` data. The default value is `Epoch`. If `UseTLE` is set to `First`, this method will not take effect |
| `UseCatalogModel` | This method loads a satellite model according to `SSCNum`. If it is not entered, the default satellite model is used |

- If the value of `TLESource` is `DefineElements`, the following parameters can be included:

| `Parameter` | Description |
| --- | --- |
| `Source {AGIServer \| File "<Filename>" \| DefaultFile \| Elements <Parameters>}` | Defaults to `AGIServer`. If `Filename` is entered, the file path should be included, and `SSCNum` must be included. If `DefaultFile` is entered, the default file is used. If `Elements` is entered, see the table below for the `Parameters` format |
| `SwitchMethod {Epoch \| Midpoint \| TCA}` | Sets the method to convert `TLE` data. The default value is `Epoch`. If `UseTLE` is set to `First`, this method will not take effect |
| `UseCatalogModel` | This method loads a satellite model according to `SSCNum`. If it is not entered, the default satellite model is used. |

- If the value of `Source` is `Elements`, the following parameters can be included:

| `Parameter` | Description |
| --- | --- |
| `ElementSet <MeanMotion> <Eccentricity> <Inclination> <ArgOfPerigee> <RAAN> <MeanAnomaly> <BStar>` | Use these parameters to describe the orbit state; see the table below for descriptions of these values. Note: if the `Source Elements` attribute is entered, `ElementSet` is required. |
| `OrbitEpochYYDDD <Date>` | Specifies the universal date and time of the orbit elements. The input format of `Date` is YYDDD.DDDDDDDD. |
| `RevNumber <Value>` | Sets the number of elapsed revolutions. If this attribute is not entered, it defaults to the first revolution |
| `Classification <Value>` | Sets the security classification. Only one letter can be entered |
| `IntlDesignator <Value>` | Sets the international designator of the satellite using 1 to 8 characters |
| `MeanMotionDot <Value>` | Sets the first time derivative of the mean motion |
| `MeanMotionDotDot <Value>` | Sets the second time derivative of the mean motion |

- This table describes the values of `ElementSet` under `Source Elements`:

| `Element` | Description |
| --- | --- |
| `<MeanMotion>` | Sets the mean motion |
| `<Eccentricity>` | Sets the eccentricity. The value must be greater than 0 and less than 1 |
| `<Inclination>` | Sets the orbital inclination. The default unit is degrees. |
| `<ArgOfPerigee>` | Sets the argument of perigee. The default unit is degrees. |
| `<RAAN>` | Sets the right ascension of the ascending node. The default unit is degrees. |
| `<MeanAnomaly>` | Sets the mean anomaly. The default unit is degrees. |
| `<BStar>` | Sets the drag term. |

:::

## Examples

::: details open **Set the Satellite SGP4 State**
```
SetState */Satellite/M1 SGP4 NoProp 60.0 43001 TLESource DefineElements Source Elements OrbitEpochYYDDD 21193.89900000 ElementSet 1.86231812 0.0011522 55.3739 293.8842 123.0806 178.195 0 IntlDesignator 17069A_ MeanMotionDot 1.5e-07 RevNumber 2507 Classification U
```
:::
