## Set Constraint
 
作用：设置行星约束

::: details 详细说明（点击展开）

基本约束：
 

| ConstraintName   | Parameters                                                   |
| ---------------- | ------------------------------------------------------------ |
| LineOfSight      | `{On \| Off}`                                                  |
| TerrainMask      | `{On \| Off}`                                                  |
:::


::: note 用法
```
SetConstraint <ObjectPath> {ConstraintName} {State}
```
:::

::: tip 举例
```
SetConstraint */Planet/Jupiter LineOfSight On
```
:::
