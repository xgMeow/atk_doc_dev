# Graphics

## 作用

设置覆盖定义显示属性。

## 语法

```atk-command
Graphics <CovDefnObjectPath> {GfxType} {DisplayOption}
```

## 参数说明

| 参数 | 说明 |
| ---- | ---- |
| `Show` | `{On \| Off}` |
| `Static` | `Regions {On \| Off} [{Color}]` |
| `Static` | `Points {On \| Off} [{Color}]` |

## 补充说明

- `Color` 可用属性请查看常用设置格式-常用图形格式。

## 示例

::: details open **设置覆盖定义显示属性**
```
Graphics */CoverageDefinition/CoverageDefinition1 Static Regions On Red
```
:::
