# QuickReportAdd

作用：添加快捷报告

用法：
```
QuickReportAdd <ScenarioPath> Name "<QuickReportName>" Type {RptType} Style "<StyleName>" Object <TruncObjPath> [FromObject <TruncObjPath>]
```

::: info

    - <QuickReportName>暂不支持
    
    - {RptType} 包括 Report, Graph, DynamicDisplay 和 StripChart 类型，暂不支持设置
    
    - FromObject <TruncObjPath>在访问快捷报告时输入

:::

::: note 举例
```
QuickReportAdd * Name "Sat Pos-Vel" Type Graph Style "J2000 Position Velocity" Object Satellite/Satellite1
```
:::
