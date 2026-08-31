# atkOpen

## Description

Establishes a network connection (TCP) with a remote ATK.

## Syntax

```atks
conID = atkOpen()
conID = atkOpen("127.0.0.1", 6655)
```

## Return Parameters

`conID`: Connection handle. A return value of `-1` indicates a failed connection.

## See Also

[atkConnect](atkConnect.md) | [atkClose](atkClose.md)
