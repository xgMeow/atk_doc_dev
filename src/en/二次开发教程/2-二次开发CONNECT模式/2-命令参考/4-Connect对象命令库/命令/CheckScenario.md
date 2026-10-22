---
groups: [Scenario]
---

# CheckScenario

## Description

Checks whether a scenario is currently open.

## Syntax

```atk-command
CheckScenario <ApplicationPath>
```

## Additional Notes

- Returns ASCII `"1"` when a scenario is open, and ASCII `"0"` when no scenario is open.

## Examples

::: details open **Check whether a scenario is currently open**

```
CheckScenario /
```

:::
