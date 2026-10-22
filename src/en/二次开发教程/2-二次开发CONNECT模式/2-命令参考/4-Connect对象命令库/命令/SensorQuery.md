---
description: Queries sensor properties, supporting the retrieval of the pointing mode, pattern name, and definition type.
groups: [Sensor]
---

# SensorQuery

## Description

Gets the sensor properties.

## Syntax

```atk-command
SensorQuery <SensorObjectPath> [{QueryType}]
```

## Additional Notes

Currently, `{QueryType}` accepts the values `Pointing`, `PatternName`, and `Definition`.

## Examples

::: details open **Query sensor properties**
```
SensorQuery */Satellite/Satellite1/Sensor/Sensor1 Pointing
```
:::
