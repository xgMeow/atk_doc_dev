# HPOP Integrator

## Description

Sets the integration algorithm.

## Syntax

```atk-command
HPOP <ObjectPath> Integrator <Parameters>
```

## Parameters

- `ReportOnFixedStep { On | Off }`
- `OrbitEps <Value>`

::: tip Note
When using this command, make sure the orbit propagator type is HPOP
:::

## Examples

::: details open **Set the Integration Algorithm**
```
HPOP */Satellite/Satellite1 Integrator ReportOnFixedStep On
```
:::
