# Save

## Description

Saves a scenario or an object.

## Syntax

```atk-command
Save <ApplicationPath> <ObjectPath> ["<SaveInDirectory>"]
```

## Parameters

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Currently defaults to `*`, which is the current scenario path |
| `<SaveInDirectory>` | Sets the save directory; the current scenario is saved to this directory, and a save file name must be entered |

## Examples

::: details open **Save the current scenario**

```
Save / *
```

:::
