# SetAnimation

## 作用

操控仿真状态

## 语法

```atk-command
SetAnimation <ScenarioPath> {AnimateOption} <Parameters>
```

## 参数说明

| `{AnimateOption}` | `<Parameters>` | 说明 |
| --- | --- | --- |
| `CurrentTime` | `{TimeInstant}` | 设置当前仿真时间 |
| `AnimationMode` | `{Normal \| RealTime \| XRealTime}` | 设置仿真模式 |
| `TimeStep` | `{Increase \| Decrease \| <StepValue>}` | 设置步长模式预报步长增加或减少，可直接输入值 |
| `RealTimeOffset` | `{Increase \| Decrease \| <OffsetValue>}` | 设置实时模式预报步长增加或减少，可直接输入值 |
| `XRealTimeMultiplier` | `{Increase \| Decrease \| <MultValue>}` | 设置倍率模式预报步长增加或减少，可直接输入值 |

## 示例

::: details open **设置仿真模式为倍率模式**

```
SetAnimation * AnimationMode XRealTime
```

:::
