# GetAnimationData

## 作用

获得场景基本属性

## 语法

```atk-command
GetAnimationData <ScenarioPath> {Option}
```

## 参数说明

| `{Option}` | 说明 |
|------|------|
| `TimePeriod` | 获得场景开始时间和停止时间 |
| `CurrentTime` | 获得当前仿真时间 |
| `TimeStep` | 获得仿真步长时间，默认单位为秒 |

## 示例

::: details open **获取场景时间段**

```
GetAnimationData * TimePeriod
```

:::
