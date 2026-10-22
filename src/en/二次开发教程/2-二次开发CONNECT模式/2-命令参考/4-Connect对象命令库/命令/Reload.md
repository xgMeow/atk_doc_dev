---
groups: [Satellite]
---

# Reload

## Description

Restores satellite data.

## Syntax

```atk-command
Reload <ApplicationPath> <ClassPath> "<FilePath>"
```

## Additional Notes

- Only objects whose names differ from those already in the current scenario can be added to the scenario

## Examples

::: details open **Restore satellite data**
```
ReLoad / */Satellite "E:/repo/ATK/ATK/Bin/Scenario2.xml"
```
:::
