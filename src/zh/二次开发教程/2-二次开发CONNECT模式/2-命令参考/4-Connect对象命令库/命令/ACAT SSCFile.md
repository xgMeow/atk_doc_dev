---
groups: [高级接近分析]
---

# ACAT SSCFile

## 作用

使用文件设置 **SSC** 目标半径（包络球半径）。

对应界面【高级】页的“SSC 目标半径文件”：勾选读取后选择相应文件，该文件中包含空间目标的包络球半径。

## 前置条件

本命令仅能设置**已存在**的高级接近分析对象，**不具备创建对象的能力**。使用前须先用 [New](./New.md) 创建高级接近分析对象：

```
New / */AdvCat MyAdvCat
```

## 语法

```atk-command
ACAT <AdvCatObjPath> SSCFile {On | Off | "<FilePath>"}
```

## 语法说明

本命令为 [ACAT](./ACAT.md) 的子命令之一，通过 SSCFile 指定 SSC 目标半径文件。SSCFile 之后须给出下列三种取值之一：

| 取值 | 说明 |
| --- | --- |
| 一个文件路径 | 指定 SSC 目标半径文件的路径，须用双引号括起。**仅记录路径，不启用该文件**。 |
| On | 启用 SSC 目标半径文件，对应勾选界面上的“SSC 目标半径文件”。 |
| Off | 关闭 SSC 目标半径文件。 |

**文件路径必须用双引号括起。** 路径不加引号时，命令虽返回成功，但该路径不会被记录。

**SSCFile 之后必须给出上述三种取值之一。** 以下写法会返回成功，但不产生任何效果：

- 只写 SSCFile 而不给出取值，如 ACAT */AdvCat/MyAdvCat SSCFile；
- 写入 On、Off、文件路径之外的文字，如 ACAT */AdvCat/MyAdvCat SSCFile True 或 ACAT */AdvCat/MyAdvCat SSCFile 1。

对象路径的写法及其余参数的说明，参见 [ACAT](./ACAT.md)。

## 补充说明

- **指定路径与启用为两个步骤**：仅给出文件路径时 ATK 只记录该路径，须另行执行以 On 结尾的命令，方可使该文件生效。
- **文件路径不做校验**：所指定的文件不存在时，ATK 不会报错，仍返回成功。文件路径的有效性需自行保证。
- **与逐个目标设置的包络球半径的关系**：不使用本命令时，包络球半径由添加目标时的 Add 附加参数 HardBodyRadius 指定，参见 [ACAT](./ACAT.md) 的“Add 附加参数取值”。

## 示例

::: details open **使用SSC文件设置目标半径**

```
ACAT */AdvCat/MyAdvCat SSCFile "C:\atk\User\Data\SSC.rad"
ACAT */AdvCat/MyAdvCat SSCFile On
```

:::

::: details open **关闭SSC目标半径文件**

```
ACAT */AdvCat/MyAdvCat SSCFile Off
```

:::
