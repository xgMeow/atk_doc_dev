# QuickReportAdd

## 作用

添加快捷报告

## 语法

```
QuickReportAdd <ScenarioPath> Name "<QuickReportName>" Type {RptType} Style "<StyleName>" Object <TruncObjPath> [FromObject <TruncObjPath>]
```

## 补充说明

- `<QuickReportName>` 暂不支持
- `{RptType}` 包括 `Report`、`Graph`、`DynamicDisplay` 和 `StripChart` 类型，暂不支持设置
- `FromObject <TruncObjPath>` 在访问快捷报告时输入

## 示例

::: details open **添加快捷报告**

```
QuickReportAdd * Name "Sat Pos-Vel" Type Graph Style "J2000 Position Velocity" Object Satellite/Satellite1
```

:::
