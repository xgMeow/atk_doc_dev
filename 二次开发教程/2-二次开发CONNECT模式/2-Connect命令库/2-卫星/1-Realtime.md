# Realtime

作用：设置Realtime预报器相关属性

用法：
```
RealTime <VehObjectPath> {RealTimeOption} [<Parameters>]
```

- 说明：

| `{RealTimeOption}`           | `[<Parameters>]`                                            |说明                                 |
| --------------------------   | ----------------------------------------------------------- |------------------------------------ |
| `SetProp`                    |                                                             |是指预报器为Realtime预报器             |
| `SetLookAhead`               | `{PropType} <Duration> <TimeStep> <TimeOutGap> `            |设置持续状态                          |
| `SetHistory`                 | `<Duration> <InterpOrder>`                                  |设置历史状态                          |


- 若`{RealTimeOption}` 输入为`SetLookAhead` ，可设置值如下：

| `<Parameter>`               | 说明                                   |                                    
| --------------------------  | -------------------------------------- |   
| `{PropType}`                | 预报类型                                |
| `<Duration>`                | 持续时间                                |
| `<TimeStep>`                | 步长                                    |
| `<TimeOutGap>`              | 指定预览值                              |

- 若`{RealTimeOption}` 输入为`SetHistory` ，可设置值如下：

| `<Parameter>`                | 说明                        |
| --------------------------   | --------------------------- | 
| `<Duration>`                 | 历史持续时间                 |
| `<InterpOrder>`              | 插值                        |

::: note 举例
```
Realtime */Satellite/Satellite1 SetLookAhead J2Perturbation 1800 60 240
```
:::
