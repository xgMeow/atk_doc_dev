## Graphics
 

作用：设置覆盖定义显示属性

::: note 用法
```
Graphics <CovDefnObjectPath> {GfxType} {DisplayOption}
```
:::

::: info 说明
| GfxType                      | DisplayOption                   |
| ---------------------------- | -----------------------------   |
| Show                         | `{On \| Off}`                   |
| Static                       | `Regions {On \| Off} [{Color}]` |
| Static                       | `Points {On \| Off} [{Color}]`  |

- `Color` 可用属性请查看常用设置格式-常用图形格式
:::

::: tip 举例
```
Graphics */CoverageDefinition/CoverageDefinition1 Static Regions On Red
```
:::
