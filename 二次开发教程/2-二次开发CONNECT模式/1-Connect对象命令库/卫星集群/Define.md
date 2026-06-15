# Define

## 作用

添加及设置**卫星集群**参数。

## 语法

```
Define <ObjectPath> Walker {Optional} <Parameters>
```

## 参数说明

| 参数 | 说明 |
| ---------------------------- | ------------------------- |
| `Propagator <Propagator Name>` | 轨道预报器，支持二体 `TwoBody` 和 J2 `J2Perturbation` |
| `AddShell <Shell Name>` | 添加 Shell |
| `Type {Delta, Star, Custom}` | 构型设计类型 |
| `NumPlanes <num>` | 平面数 |
| `NumSatsPerPlane <num>` | 单轨道卫星数 |
| `InterPlaneOffset <Offset>` | 相位因子 |
| `Epoch <epoch>` | 轨道历元 |
| `Semimajoraxis <a>` | 半长轴 |
| `Eccentricity <e>` | 偏心率 |
| `Inclination <i>` | 轨道倾角 |
| `RAAN <ra>` | 升交点赤经 |
| `ArgumentOfPerigee <aop>` | 近地点角距 |
| `MeanAnomaly <ma>` | 平近点角 |
| `ModifyShell <Shell Name>` | 修改 Shell 参数 |
| `ClearShells <Shell Name>` | 清除所有 Shell |
| `RemoveShell <Shell Name>` | 移除指定 Shell |

## 示例

::: details open **定义 Walker 卫星集群**
```
Define */SatelliteCollection/SatelliteCollection1 Walker Propagator TwoBody AddShell Shell1 numplanes 11 NumSatsPerPlane 2
```
:::
