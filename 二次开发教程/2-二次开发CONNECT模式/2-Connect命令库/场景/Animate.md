# Animate

## 作用

设置场景仿真操作

## 语法

```
Animate <ScenarioPath> {AnimateOption} <Parameters>
```

## 参数说明

| {AnimateOption} | 说明 |
| --- | --- |
| `Start` | 设置仿真开始状态，默认 `Forward`（正向仿真）。`<Parameters>` 取值见下表 |
| `Pause` | 仿真暂停 |
| `Reset` | 仿真重置 |
| `Faster` | 仿真步长增加 |
| `Slower` | 仿真步长减少 |
| `Speed` | 设置仿真步长 |
| `Step` | 仿真步长正向 +1 / 反向 -1。`<Parameters>` 取值见下表 |
| `XRealTimeContinueFromPausedTime` | 暂停期间内部实时时钟行为控制。`<Parameters>` 取值见下表 |

### Start 的 `<Parameters>` 取值

| 取值 | 说明 |
| --- | --- |
| `Forward` | 正向仿真 |
| `Reverse` | 反向仿真 |
| `RealTime` | 实时模式 |
| `XRealTime` | 倍率模式 |
| `Normal` | 步长模式 |

### Step 的 `<Parameters>` 取值

| 取值 | 说明 |
| --- | --- |
| `Forward` | 步长正向 +1 |
| `Reverse` | 步长反向 -1 |

### XRealTimeContinueFromPausedTime 的 `<Parameters>` 取值

| 取值 | 说明 |
| --- | --- |
| `On` | 可在仿真暂停时停止内部实时时钟运行，并在仿真恢复时从当前仿真时间继续播放。 |
| `Off` | 默认值。倍率模式在仿真暂停时会继续运行内部实时时钟，当仿真恢复时，仿真时间会跳转到暂停期间经过的时间点。 |

## 示例

::: details open **启动场景仿真**
```
Animate * Start
```
:::
