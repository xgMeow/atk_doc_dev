# CentralBodyCode

## Description

Set the central body for the perturbation force.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.{Attribute} <Value>
```

## Parameters

| Parameter | Description |
|------|------|
| `CentralBodyName` | Corresponding order: `Mercury`-0, `Venus`-1, `Earth`-2, `Mars`-3, `Jupiter`-4, `Saturn`-5, `Uranus`-6, `Neptune`-7, `Pluto`-8, `Moon`-9, `Sun`-10 |

## Examples

::: details open **Set the perturbation central body to Mars**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.CentralBodyCode 3
```
:::
