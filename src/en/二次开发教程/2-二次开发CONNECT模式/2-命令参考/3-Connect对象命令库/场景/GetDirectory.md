# GetDirectory

## Description

Returns the path of the selected directory.

## Syntax

```atk-command
GetDirectory <ApplicationPath> {DirOption}
```

## Parameters

| `{DirOption}` | Description |
|------|------|
| `DefaultUser` | Returns the program run directory |
| `UserData` | Returns the current user data directory |
| `ATKHome` | Returns the ATK run folder |
| `Config` | Returns the user configuration directory |
| `Scenario` | Returns the scenario file directory |
| `AllUsers` | Returns the directory that contains ATK application data for all users |
| `Database {Satellite \| City \| Facility}` | Returns the specified data directory |

## Examples

::: details open **Return the satellite database directory**

```
GetDirectory / Database Satellite
```

:::
