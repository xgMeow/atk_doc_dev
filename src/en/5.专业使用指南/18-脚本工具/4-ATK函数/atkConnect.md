# atkConnect

## Description

Sends a Connect command to the connected remote ATK via network communication.

## Syntax

```atks
atkConnect(conID, "command", "objPath", "cmdParamString")
```

## Input Parameters

`conID`          - The handle returned by the [atkOpen](atkOpen.md) function
`command`        - Refer to the Connect command library for details.
`objPath`        - The path of the object that receives the command
`cmdParamString` - The command attribute string

## Return Parameters

Commands that have a return value will directly output the return value string.

## See Also

[atkOpen](atkOpen.md) | [atkClose](atkClose.md)
