# Define

## Description

Sets the central body of a planet.

## Syntax

```atk-command
Define <PlanetObjectPath> CentralBody {CBName} 
```

## Additional Notes

- `{CBName}` includes the central body names `Mercury`, `Venus`, `Earth`, `Mars`, `Jupiter`, `Saturn`, `Uranus`, `Neptune`, `Pluto`, `Moon`, `Sun`.

## Examples

::: details open **Define the planet's central body as Jupiter**
```
Define */Planet/Planet1 CentralBody Jupiter
```
:::
