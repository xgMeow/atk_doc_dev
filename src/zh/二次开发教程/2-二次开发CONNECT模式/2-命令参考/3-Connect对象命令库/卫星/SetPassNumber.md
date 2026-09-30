# SetPassNumber

## 作用

设置卫星的圈次编号。

## 语法

```atk-command
SetPassNumber <ObjectPath> <PassNumber>
```

## 补充说明

下表为命令参数说明。

| 参数 | 说明 |
|------|------|
| `<ObjectPath>` | 卫星对象完整路径，自场景 `*` 起写全，如 `*/Satellite/SatB` |
| `<PassNumber>` | 圈次编号，取整数 |

- 该命令设置卫星轨道圈数计数规则中的**初始圈次**，其余规则（纬度、经度、方向、坐标系）由 [PassBreak](PassBreak.md) 设置。圈数计数规则在图形界面中的位置参见[卫星属性配置](../../../../../03-基础使用指南/03-对象管理/02-属性配置/卫星.md)。
- 路径参数的完整路径与截断路径写法参见[命令语法约定](../../1-命令语法约定.md)。

## 示例

::: details open **设置卫星的圈次编号**

```
SetPassNumber */Satellite/SatB 12
```

- `*/Satellite/SatB`：卫星对象完整路径
- `12`：圈次编号

:::
