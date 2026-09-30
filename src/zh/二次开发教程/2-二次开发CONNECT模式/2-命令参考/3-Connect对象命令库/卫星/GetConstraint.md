# GetConstraint

## 作用

获取指定时刻卫星相对中心天体与参考卫星的三体规避角。

## 语法

```atk-command
GetConstraint <ObjectPath> <CentralBodyName> <ReferenceSatPath> {TimeValue}
```

## 补充说明

下表为命令参数说明。

| 参数 | 说明 |
|------|------|
| `<ObjectPath>` | 待查询的卫星对象完整路径，自场景 `*` 起写全 |
| `<CentralBodyName>` | 中心天体名称，取值包括 `Mercury`、`Venus`、`Earth`、`Mars`、`Jupiter`、`Saturn`、`Uranus`、`Neptune`、`Pluto`、`Moon`、`Sun`，与[行星中心天体定义](../行星/Define.md)中的天体名称一致 |
| `<ReferenceSatPath>` | 参考卫星路径，只写截断路径，不带场景前缀 `*/` |
| `{TimeValue}` | 查询时刻，填写绝对日期时间 |

注意事项：

- 首个对象路径 `<ObjectPath>` 为**完整路径**，须自场景 `*` 起写全；其后的 `<ReferenceSatPath>` 为**截断路径**，**不要带场景前缀 `*/`**，如 `Satellite/SatB`。两者的区别参见[命令语法约定](../../1-命令语法约定.md)。
- `{TimeValue}` 内部含空格，必须用双引号括起来，填写格式参见[日期时间格式](../../2-参数值格式/日期时间格式.md)。

## 示例

::: details open **获取指定时刻的三体规避角**

```
GetConstraint */Satellite/SatA Earth Satellite/SatB "1 Jul 2025 12:00:00.000"
```

- `*/Satellite/SatA`：待查询卫星的完整路径
- `Earth`：中心天体名称
- `Satellite/SatB`：参考卫星路径，截断路径，不带场景前缀
- `"1 Jul 2025 12:00:00.000"`：查询时刻，字符串内部含空格，须用双引号括起来

:::
