---
groups: [Satellite]
---

# SetPassNumber

## Description

Sets the pass number of a satellite.

## Syntax

```atk-command
SetPassNumber <ObjectPath> <PassNumber>
```

## Additional Notes

The following table describes the command parameters.

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Full path of the satellite object, specified in full starting from the scenario `*`, for example `*/Satellite/SatB` |
| `<PassNumber>` | Pass number, an integer |

- This command sets the **initial pass** in the satellite's orbit pass counting rules; the other rules (latitude, longitude, direction, coordinate system) are set by [PassBreak](./PassBreak.md). For the location of the pass counting rules in the graphical interface, see [Satellite Properties](../../../../../03-基础使用指南/03-对象管理/02-属性配置/卫星.md).
- For how to write path parameters as full paths or truncated paths, see [Command Syntax Conventions](../../1-命令语法约定.md).

## Examples

::: details open **Set the Satellite Pass Number**

```
SetPassNumber */Satellite/SatB 12
```

- `*/Satellite/SatB`: full path of the satellite object
- `12`: pass number

:::
