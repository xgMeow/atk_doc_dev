# Set Constraint

## 作用

设置行星约束

## 语法

```atk-command
SetConstraint <ObjectPath> {ConstraintName} {State}
```

## 参数说明

| 参数 | 说明 |
| ---- | ---- |
| `LineOfSight` | `{On \| Off}` |
| `TerrainMask` | `{On \| Off}` |

## 示例

::: details open **设置行星视距约束**
```
SetConstraint */Planet/Jupiter LineOfSight On
```
:::
