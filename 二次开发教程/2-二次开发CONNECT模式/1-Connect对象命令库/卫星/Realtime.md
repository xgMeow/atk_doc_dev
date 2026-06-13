# Realtime

## 作用

设置 Realtime 预报器相关属性。

## 语法

```
RealTime <VehObjectPath> {RealTimeOption} [<Parameters>]
```

## 参数说明

| `{RealTimeOption}` | `[<Parameters>]` | 说明 |
| --- | --- | --- |
| `SetProp` | | 是指预报器为 Realtime 预报器 |
| `SetLookAhead` | `{PropType} <Duration> <TimeStep> <TimeOutGap>` | 设置持续状态 |
| `SetHistory` | `<Duration> <InterpOrder>` | 设置历史状态 |

### `SetLookAhead` 参数

| `<Parameter>` | 说明 |
| --- | --- |
| `{PropType}` | 预报类型 |
| `<Duration>` | 持续时间 |
| `<TimeStep>` | 步长 |
| `<TimeOutGap>` | 指定预览值 |

### `SetHistory` 参数

| `<Parameter>` | 说明 |
| --- | --- |
| `<Duration>` | 历史持续时间 |
| `<InterpOrder>` | 插值 |

## 示例

::: details open **设置 Realtime 预报器属性**
```
Realtime */Satellite/Satellite1 SetLookAhead J2Perturbation 1800 60 240
```
:::
