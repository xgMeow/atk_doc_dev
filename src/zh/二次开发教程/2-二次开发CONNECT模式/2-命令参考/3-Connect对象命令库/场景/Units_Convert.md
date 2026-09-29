# Units_Convert

## 作用

在同一个量纲内，把数值从一种单位换算为另一种单位

## 语法

```atk-command
Units_Convert <ScenarioPath> Date {FromUnit} {ToUnit} "<InputValue>"
Units_Convert <ScenarioPath> Unit {DimensionName} {FromUnit} {ToUnit} "<InputValue>"
```

## 补充说明

命令有 `Date` 与 `Unit` 两种形式：`Date` 形式用于时间单位的转换，`Unit` 形式用于其他量纲单位的转换。

下表为命令参数说明。

| 参数 | 说明 |
|------|------|
| `{DimensionName}` | 待转换数值所属的量纲（`Date` 形式不使用该参数） |
| `{FromUnit}` | `<InputValue>` 的单位名称或缩写 |
| `{ToUnit}` | 要把 `<InputValue>` 换算成的单位名称或缩写 |
| `<InputValue>` | 待转换的数值 |

注意事项：

- `{FromUnit}`、`{ToUnit}`、`<InputValue>` 中若含空格，必须用双引号括起来。
- 可用 `Units_Get` 命令获取可用量纲及各量纲当前的单位设置。
- 可用 `Units_Get` 命令的 `UnitNames` 选项获取指定量纲下的合法单位名。

## 示例

::: details open **时间单位转换**

```
Units_Convert * Date UTCG BJT "1 Jul 2021 09:00:00.000"
```

:::

::: details open **量纲单位转换**

```
Units_Convert * Unit Distance m km 1000
```

:::
