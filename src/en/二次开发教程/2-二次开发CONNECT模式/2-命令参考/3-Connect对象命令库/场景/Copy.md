# Copy

## Description

Copies and pastes an object.

## Syntax

```atk-command
Copy <ApplicationPath> <CopyFromObjectPath> [{CopyOption}]
```

## Parameters

| Parameter | Description |
|------|------|
| `<ApplicationPath>` | Target application path |
| `<CopyFromObjectPath>` | Source object path |
| `{CopyOption}` | Optional parameter that specifies how the copied object is named |

### {CopyOption} Values

| `{CopyOption}` | Description |
|----|------|
| `Name <NewName>` | Uses a new name after copying |
| `Path <NewObjectPath>` | Uses a new path after copying |

## Examples

::: details open **Copy the `/Satellite/Satellite1` object under the `/` application and rename it to `Sat2`**

```
Copy / Satellite/Satellite1 Name Sat2
```

:::
