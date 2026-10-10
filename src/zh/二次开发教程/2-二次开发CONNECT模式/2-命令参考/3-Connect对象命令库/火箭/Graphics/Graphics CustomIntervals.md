# Graphics CustomIntervals

## 作用

自定义分段轨迹样式，用于新增、编辑、替换、删除显示区间。

在动画过程中的特定时间区间内控制对象的图形显示。

适用于卫星、导弹、火箭共 3 类对象。

## 语法

```atk-command
Graphics <ObjectPath> CustomIntervals {Action} [<Parameters>]
```

## 参数说明

`{Action}` 可取下列取值：

| `{Action}` | `<Parameters>` | 说明 |
|------|------|------|
| `Clear` | 无 | 从自定义区间列表中移除**全部**显示区间。 |
| `Add` | `<NumIntervalPairs> "<StartTime1>" "<StopTime1>" ["<StartTime2>" "<StopTime2>"...] [{AttributeOption} {Action}]` | 向显示时刻列表中新增区间：当 `Graphics SetAttrIntervals` 被置为 `CustomIntervals` 时，对象图形仅在用本命令设定的区间内出现。需要输入多少组 `"<StartTime>"`／`"<StopTime>"` 值对，由 `<NumIntervalPairs>` 决定。 |
| `Replace` | `<NumIntervalPairs> "<StartTime1>" "<StopTime1>" ["<StartTime2>" "<StopTime2>"...] [{AttributeOption} {Action}]` | 用本命令指定的区间列表**替换**当前的区间列表。需要输入多少组 `"<StartTime>"`／`"<StopTime>"` 值对，由 `<NumIntervalPairs>` 决定。 |
| `Edit` | `[{EditAction} \| "<StartTime>" "<StopTime>"] {AttributesOption} {Action}` | 修改区间。`{EditAction}` 可取 `All`、`Default` 或 `AllIntervals`；若不指定 `{EditAction}`，则必须给出 `"<StartTime>"` 与 `"<StopTime>"`。<br>取 `All` 时，修改**全部**区间（含默认区间）；取 `AllIntervals` 时，修改除默认区间外的全部区间；取 `Default` 时，修改基准图形属性。<br>无论取哪种，都**至少**须给出一组 `{AttributeOption}`／`{Action}`。 |
| `Remove` | `"<StartTime>" "<StopTime>"` | 删除与给定 `"<StartTime>"`、`"<StopTime>"` 相匹配的那个区间。 |

::: warning 注意
- 本命令所做的改动**要生效，必须先下达** [Graphics SetAttrType](Graphics%20SetAttrType.md) 命令。
- 原始资料中本命令的**命令名前后不一致**：前置说明里写的是 `Graphics SetAttrType`，而 `Add` 一行的说明里写的是 `Graphics SetAttrIntervals`。两种写法**均按原文保留**，实际命令名待开发确认。
- 原始资料**未给出** `{AttributeOption}` 与 `{Action}` 的可选取值。
:::

## 示例

::: details open **清除全部显示区间**

```
atkConnect(conID,'Graphics','*/Satellite/Satellite1 CustomIntervals clear')
```

- `'Graphics'`：命令类别
- `'*/Satellite/Satellite1 CustomIntervals clear'`：清除卫星 `Satellite1` 的全部自定义显示区间

:::
