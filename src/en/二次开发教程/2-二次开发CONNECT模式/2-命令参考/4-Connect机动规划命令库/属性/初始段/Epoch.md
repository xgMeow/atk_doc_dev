# Epoch

## Description

Sets the orbit epoch for the initial state

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.Epoch <Value> <Unit>
```

## Additional Notes

- `Unit` supports `UTCG`, `EpSec`, `Sec`, `EpMin`, `Min`

::: warning Note
Getting this attribute value is not implemented yet
:::

## Examples

::: details open **Set the orbit epoch using the EpSec unit**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.InitialState.Epoch 86400 EpSec
```
:::

::: details open **Set the orbit epoch using the UTCG format**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.InitialState.Epoch "2 Feb 2023 14:14:14.144" UTCG
```
:::
