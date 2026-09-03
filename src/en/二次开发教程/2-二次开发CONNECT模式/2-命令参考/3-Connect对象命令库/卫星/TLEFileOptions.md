# TLEFileOptions

## Description

Reapplies the attributes from a TLE file to the TLE object.

## Syntax

```atk-command
TLEFileOptions <SatObjectPath> (AddFile "<FilePath>")
```

## Additional Notes

- The file must contain satellite data whose `SSCNumber` matches an existing satellite, and the parameters must be different from those of the existing satellite

## Examples

::: details open **Reapply the Attributes from a TLE File to the TLE Object**
```
TLEFileOptions */Satellite/Satellite1 AddFile "C:\Users\A411-2\Desktop\ATK_B\Bin\SGP4-VER.TLE"
```
:::
