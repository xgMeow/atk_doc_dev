# RadioButton

## Description

Creates a radio button.

## Syntax

```atks
RadioButton()
```

## Additional Notes

- A radio button can be bound to a [reactive variable](./reactive关键词.md) or a [reactive expression](./Reactive.md)

## Example

::: details open **Binding the radio button state to a reactive variable**

```atks
reactive valueRef = true

CreateDialog(
    Text(valueRef),
    RadioButton(valueRef)
)
```

:::
