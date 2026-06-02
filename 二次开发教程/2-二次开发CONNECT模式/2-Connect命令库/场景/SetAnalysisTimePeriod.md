# SetAnalysisTimePeriod

作用：设置场景的分析时间段

用法：
```
SetAnalysisTimePeriod <ScenarioPath> {TimeInterval}
```

::: info 说明
1. TimeInterval 设置格式请查看**常用设置格式–常用日期/时间格式**

2. 若使用此命令，需调用Animate Reset命令将修改后的时间应用到场景。
:::

::: note 举例
```
SetAnalysisTimePeriod * "1 Nov 2007 01:02:00.00" "1 Nov 2007 03:04:00.00"
```
:::
