# UnloadMulti

## Description

Removes one or more objects and their sub-objects from the current scenario.

## Syntax

```atk-command
UnloadMulti <ApplicationPath> <ObjectPath>
```

## Additional Notes

- This command can use `*` in `ObjectPath` instead of the full name; all matching objects are removed. Otherwise, it is used in the same way as the `Unload` command.

## Examples

::: details open **Remove the specified object**

```
UnloadMulti / */Facility/Fac1
```

:::

::: details open **Remove multiple objects using a wildcard**

```
UnloadMulti / */Facility/Fac*
```

:::
