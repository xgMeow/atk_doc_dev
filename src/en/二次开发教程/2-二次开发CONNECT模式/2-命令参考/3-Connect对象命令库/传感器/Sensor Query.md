---
description: Queries sensor properties, supporting the retrieval of the pointing mode, pattern name, and definition type.
---

# Sensor Query

## Description

Gets the sensor properties.

## Syntax

```atk-command
SensorQuery <SensorObjectPath> [{QueryType}]
```

## Additional Notes

Currently, `{QueryType}` accepts the values `Pointing`, `PatternName`, and `Definition`.

## Examples

::: details open **Query Sensor Properties**
```
SensorQuery */Satellite/Satellite1/Sensor/Sensor1 Pointing
```
:::
