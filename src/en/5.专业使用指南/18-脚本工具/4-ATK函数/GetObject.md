# GetObject

## Description

Gets an ATK object by its object path.

## Syntax

```atks
GetObject(objectPath)
```

## Additional Notes

Input the object path `objectPath`, and an ATK object corresponding to the path is returned.

## Example

::: details open **Get an ATK object**

```atks
sat = GetObject("Satellite/satellite1")
sensor = GetObject("Satellite/satellite1/Sensor/sensor1")
```

:::
