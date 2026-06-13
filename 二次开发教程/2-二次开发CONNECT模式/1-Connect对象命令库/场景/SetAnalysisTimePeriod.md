# SetAnalysisTimePeriod

## 作用

设置场景的分析时间段

## 语法

```
SetAnalysisTimePeriod <ScenarioPath> {TimeInterval}
```

## 补充说明

1. `TimeInterval` 设置格式请查看**常用设置格式–常用日期/时间格式**
2. 若使用此命令，需调用 `Animate Reset` 命令将修改后的时间应用到场景。

## 示例

::: details open **设置场景分析时间段**

```
SetAnalysisTimePeriod * "1 Nov 2007 01:02:00.00" "1 Nov 2007 03:04:00.00"
```

:::
