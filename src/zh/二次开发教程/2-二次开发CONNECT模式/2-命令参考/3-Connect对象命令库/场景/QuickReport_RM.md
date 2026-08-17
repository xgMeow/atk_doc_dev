# QuickReport_RM

## 作用

获得快捷报告数据

## 语法

```atk-command
QuickReport_RM <ScenarioPath> {GetList | GetReport "<QuickReportName>"}
```

## 补充说明

- `GetList` 获得快捷报告列表，`GetReport` 获得快捷报告数据。

## 示例

::: details open **获取快捷报告数据**

```
QuickReport_RM * GetReport "J2000 Position Velocity"
```

:::
