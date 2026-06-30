# Units_SetConnect

## 作用

设置 Connect 模式单位属性

## 语法

```atk-command
Units_SetConnect <AppOrScenPath> {Default | Internal | {Dimension} {Unit}... }
```

## 补充说明

- `{Dimension} {Unit}` 请查看[常用单位格式](/二次开发教程/2-二次开发CONNECT模式/2-命令参考/2-参数值格式/单位格式.md)
- Connect 模式仅支持 `{Dimension}` 设置 `Date`、`Distance`、`Time`、`Angle`

## 示例

::: details open **设置日期单位为儒略日**

```
Units_SetConnect / Date "JDate"
```

:::
