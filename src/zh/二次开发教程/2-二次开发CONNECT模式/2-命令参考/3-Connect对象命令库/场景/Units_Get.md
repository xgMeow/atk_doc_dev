# Units_Get

## 作用

获取输入模块当前的使用单位

## 语法

```atk-command
Units_Get <ScenarioPath> {Option}
```

## 补充说明

`{Option}` 用于指定要查询哪一类单位，取值如下。

| `{Option}` | 说明 |
|------|------|
| `GUI` | 返回通过图形界面输入数据时使用的单位 |
| `Report` | 返回通过图形界面生成和显示报告时使用的单位 |
| `Connect` | 返回 Connect 命令专用的单位。Connect 单位仅对 `Date`、`Distance`、`Time`、`Angle` 这几个量纲有效 |
| `ConnectReport` | 返回当前 Connect 会话中生成和显示报告时使用的单位。仅当 `ConnectReportUnitsFlag` 已设为 `On` 时才生效 |

## 示例

::: details open **获取 GUI 输入模块当前的使用单位**

```
Units_Get * GUI
```

:::

::: details open **获取 Connect 输入模块当前的使用单位**

```
Units_Get * Connect
```

:::
