# Animate

作用：设置场景仿真操作

用法：
```
Animate <ScenarioPath> {AnimateOption} <Parameters>
```

- 说明：

| AnimateOption                | `<Parameters>`                                  |说明                                           |
| --------------------------   | ----------------------------------------------- |-----------------------------------------------|
| `Start`                      | `[{Forward \| Reverse \| RealTime \| XRealTime \| Normal}]`  |设置仿真开始状态，默认正向仿真{正向|反向|实时模式|倍率模式|步长模式} |
| `Pause`                      |                                     |仿真暂停                                    |
| `Reset`                      |                                     |仿真重置       |
| `Faster`                     |                                     |仿真步长增加       |
| `Slower`                     |                                     |仿真步长减少      |
| `Speed`                      |                                     |设置仿真步长       |
| `Step`                       | `{Forward \| Reverse}`               |仿真步长正向+1/反向-1       |
| `XRealTimeContinueFromPausedTime`           | `{On \| Off}`         |此参数设置为{On}时，可在仿真暂停时停止内部实时时钟运行，并在仿真恢复时从当前仿真时间继续播放。默认情况下，倍率模式在仿真暂停时会继续运行内部实时时钟，当仿真恢复时，仿真时间会跳转到暂停期间经过的时间点|       |


::: note 举例
```
Animate * Start
```
:::
