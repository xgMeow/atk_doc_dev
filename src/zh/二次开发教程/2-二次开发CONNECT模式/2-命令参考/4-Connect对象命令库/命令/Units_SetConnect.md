---
groups: [场景]
---

# Units_SetConnect

## 作用

设置 Connect 模式单位属性

## 语法

```atk-command
Units_SetConnect <AppOrScenPath> {Default | Internal | {Dimension} {Unit}... }
```

## 补充说明

- `{Dimension} {Unit}` 请查看[单位格式](../../2-参数值格式/单位格式.md)
- 本命令只作用于 Connect 单位，等效于 [Units_Set](./Units_Set.md) 的 `Connect` 类别，如 `Units_SetConnect / Distance km` 与 `Units_Set * Connect Distance km` 效果相同
- 本命令可设置十一个量纲的单位：`Date`、`Distance`、`Time`、`Angle`、`Mass`、`Power`、`Frequency`、`Temperature`、`Ratio`、`Force`、`Pressure`；速度、加速度、角速度、面积等由这些量纲组合推导，不单独设置

## 示例

::: details open **设置日期单位为儒略日**

```
Units_SetConnect / Date "JDate"
```

:::
