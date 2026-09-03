# AccessMulti Assets

## Description

Specify the **source objects** (observers) for batch visibility computation. Multiple sources can be specified at the same time.

## Syntax

```atk-command
AccessMulti / Assets < AssetObjectPath > < AssetObjectPath > …
```

## Parameters

| Parameter | Description |
|------|------|
| `< AssetObjectPath >` | Object path; multiple objects can be specified |

## Additional Notes

- This command is the **configuration step** of the AccessMulti framework, used to specify "who observes".
- Source objects (Assets) are usually entities with observation capabilities, such as satellite sensors and detectors.
- Used together: `AccessMulti / Objects` specifies the targets, and `AccessMulti / Access Compute` executes the computation.

## Examples

::: details open **Set the visibility of multiple satellite sensors as accessible.**

```
AccessMulti / Assets */Satellite/Satellite1/Sensor/Sensor1 */Satellite/Satellite2/Sensor/Sensor1 */Satellite/Satellite3/Sensor/Sensor1
```

:::
