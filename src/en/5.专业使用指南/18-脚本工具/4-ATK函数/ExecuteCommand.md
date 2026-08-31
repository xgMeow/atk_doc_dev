# ExecuteCommand

## Description

Executes a Connect command in the current ATK engine.

## Syntax

```atks
ExecuteCommand("command", "objPath", "cmdParamString")
```

## Input Parameters

`command`        - Refer to the Connect command library for details.
`objPath`        - The path of the object that receives the command
`cmdParamString` - The command attribute string

## Return Parameters

Commands that have a return value will directly output the return value string.
