# CheckBox

## Description

Creates a checkbox.

## Syntax

```atks
CheckBox()
```

## Additional Notes

- A checkbox can be bound to a [reactive variable](./reactive关键词.md) or a [reactive expression](./Reactive.md)

## Example

::: details open **Binding the checkbox state to a reactive variable**

```atks
reactive valueRef = true

CreateDialog(
    Text(valueRef),
    CheckBox(valueRef)
)
```

:::
