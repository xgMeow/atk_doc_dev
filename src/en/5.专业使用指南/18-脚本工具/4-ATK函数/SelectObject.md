# SelectObject

## Description

Opens the relevant interface to select an ATK algorithm model/object and returns it.

## Syntax

```atks
SelectObject(typeName)
```

## Additional Notes

Input the type name `typeName`; an object selection interface pops up, and the selected ATK algorithm model/object is returned.

## Example

::: details open **Select an ATK object**

```atks
sat = SelectObject("Satellite")
fac = SelectObject("Facility")
```

:::
