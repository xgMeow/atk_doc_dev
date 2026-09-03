# New

## Description

Creates a new scenario or a new object.

## Syntax

```atk-command
New <ApplicationPath> <ClassPath> <NewObjectName> {NewOptions}
```

## Additional Notes

- `{NewOptions}` includes the attributes `NoDefault`, `Ignore`, and `CentralBody <CBName>`.

## Examples

::: details open **Create a new scenario**

```
New / Scenario See_DC
```

:::

::: details open **Create a new satellite object**

```
New / */Satellite Satellite1 CentralBody Earth
```

:::

::: details open **Create a new sensor object**

```
New / */Satellite/Satellite1/Sensor Sensor1
```

:::
