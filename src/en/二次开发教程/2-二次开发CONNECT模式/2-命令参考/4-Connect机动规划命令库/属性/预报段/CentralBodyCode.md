# CentralBodyCode

## Description

Sets the perturbation-force central body `CentralBodyCode`

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.{Attribute} <Value>
```

## Additional Notes

- `CentralBodyName` order: `Mercury`-0, `Venus`-1, `Earth`-2, `Mars`-3, `Jupiter`-4, `Saturn`-5, `Uranus`-6, `Neptune`-7, `Pluto`-8, `Moon`-9, `Sun`-10

## Examples

::: details open **Set the central body code to 3 (Mars)**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.CentralBodyCode 3
```
:::
