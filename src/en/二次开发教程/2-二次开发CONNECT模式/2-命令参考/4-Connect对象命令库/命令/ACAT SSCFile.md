---
groups: [AdvCat]
---

# ACAT SSCFile

## Description

Uses a file to set the **SSC** target radius (envelope sphere radius).

This corresponds to **SSC Target Radius File** on the **Advanced** page of the interface: select the option to read the file, then choose the corresponding file. That file contains the envelope sphere radius of the space target.

## Prerequisites

This command can only set an **existing** AdvCat object; it **cannot create an object**. Before using it, create the AdvCat object with [New](./New.md):

```
New / */AdvCat MyAdvCat
```

## Syntax

```atk-command
ACAT <AdvCatObjPath> SSCFile {On | Off | "<FilePath>"}
```

## Syntax Description

This command is one of the subcommands of [ACAT](./ACAT.md) and uses SSCFile to specify the SSC target radius file. SSCFile must be followed by one of the three values below:

| Value | Description |
| --- | --- |
| A file path | Specifies the path to the SSC target radius file, which must be enclosed in double quotes. **The path is only recorded; the file is not enabled.** |
| On | Enables the SSC target radius file, which corresponds to selecting **SSC Target Radius File** in the interface. |
| Off | Disables the SSC target radius file. |

**The file path must be enclosed in double quotes.** When the path is not quoted, the command still returns success, but the path is not recorded.

**SSCFile must be followed by one of the three values above.** The following forms return success but have no effect:

- Writing SSCFile without any value, as in ACAT */AdvCat/MyAdvCat SSCFile;
- Writing anything other than On, Off, or a file path, as in ACAT */AdvCat/MyAdvCat SSCFile True or ACAT */AdvCat/MyAdvCat SSCFile 1.

For the object path syntax and descriptions of the remaining parameters, see [ACAT](./ACAT.md).

## Additional Notes

- **Specifying the path and enabling the file are two separate steps**: when only the file path is given, ATK records that path only, and a separate command ending in On must be executed for the file to take effect.
- **The file path is not validated**: when the specified file does not exist, ATK reports no error and still returns success. The validity of the file path must be ensured by the caller.
- **Relationship to the envelope sphere radius set for individual targets**: when this command is not used, the envelope sphere radius is specified by the HardBodyRadius additional parameter of Add when the target is added; see "Add `[{AdditionalParams}]` Values" in [ACAT](./ACAT.md).

## Examples

::: details open **Set the target radius with an SSC file**

```
ACAT */AdvCat/MyAdvCat SSCFile "C:\atk\User\Data\SSC.rad"
ACAT */AdvCat/MyAdvCat SSCFile On
```

:::

::: details open **Disable the SSC target radius file**

```
ACAT */AdvCat/MyAdvCat SSCFile Off
```

:::
