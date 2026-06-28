# AER

## 作用

计算并获得可见性视线参数分析的报告

## 语法

```atk-command
AER <ObjectPath> <AccessObjectPath> {TimePeriod <StartTime> <StopTime>}
```

## 示例

::: details open **计算两颗卫星之间的可见性**

```
AER */Satellite/Satellite1 */Satellite/Satellite2 TimePeriod "14 Mar 2024 00:00:00.000" "15 Mar 2024 00:00:00.000"
```

:::
