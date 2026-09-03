# Load

## Description

Opens an existing scenario.

## Syntax

```atk-command
Load <ApplicationPath> {<ClassPath> | VDF} "<FilePath>"
```

## Additional Notes

- If another scenario is already open, this scenario cannot be loaded.

## Examples

::: details open **Load a scenario file**

```
Load / Scenario "E:/repo/ATK/Bin/x64/Debug/Scenario1.xml"
```

:::
