# GetAnimationData

## 作用

获得场景基本属性

## 用法

```
GetAnimationData <ScenarioPath> {Option}
```

## 说明

| {Option} | 含义 |
|------|------|
| `TimePeriod` | 获取该场景的**开始时间**和**停止时间** |
| `CurrentTime` | 获取**当前仿真时间** |
| `TimeStep` | 获取**仿真步长**，默认单位是秒 |


## 举例

```
GetAnimationData * TimePeriod
```
