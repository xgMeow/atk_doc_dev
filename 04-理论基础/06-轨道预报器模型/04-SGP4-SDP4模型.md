# SGP4-SDP4模型

## 概述

SGP4（Simplified General Perturbations）和SDP4（Simplified Deep-space Perturbations）是美国空军于1970年代开发的轨道预报模型，专门用于处理NORAD两行星历（TLE）数据。SGP4/SDP4模型是航天领域最广泛使用的轨道预报模型之一。

## 模型历史

| 版本 | 年份 | 说明 |
|------|------|------|
| SGP | 1966 | 初始版本 |
| SGP4 | 1970 | 加入长期摄动 |
| SDP4 | 1970 | 深空轨道扩展 |
| SGP8 | 1979 | 简化模型 |
| SDP8 | 1979 | 深空扩展 |
| SGP4/SDP4 | 1980s | 广泛使用 |

## TLE数据格式

### 两行星历格式

```
第一行:
1 NNNNNC NNNNNAAA NNNNN.nnnnnn +.nnnnn + nnnnn-n + nnnnn-n n nnnnn

第二行:
2 NNNNN nnn.nnnn nnn.nnnn nnnnn aaaaaaaa nnn.nnnn nnn.nnnn nn.nnnnnnnnnnnnn
```

### 关键参数

| 参数 | 位置 | 说明 |
|------|------|------|
| NORAD编号 | 列3-7 | 目标标识 |
| 国际代号 | 列10-17 | 发射标识 |
| 历元年 | 列19-20 | 年份末两位 |
| 历元日 | 列21-32 | 年内天数+小数 |
| 轨道衰减 | 列34-43 | 平均运动一阶导数 |
| 衰减二阶导 | 列45-52 | 平均运动二阶导数 |
| BSTAR | 列54-61 | 大气阻力参数 |
| 轨道倾角 | 列88-98 | 倾角(度) |
| 升交点赤经 | 列99-111 | 赤经(度) |
| 偏心率 | 列117-123 | 小数部分 |
| 近地点幅角 | 列124-134 | (度) |
| 平近点角 | 列135-147 | (度) |
| 平均角速度 | 列148-163 | 圈/天 |

## SGP4模型

### 适用范围

| 条件 | 参数 |
|------|------|
| 轨道周期 | <225分钟 |
| 半长轴 | <48,000 km |
| 轨道类型 | LEO, MEO |

### 考虑的主要效应

- 二体运动
- J2长期摄动
- J2、J3、J4周期摄动
- 大气阻力（一阶长期）

### 计算步骤

1. 初始化常数
2. 计算半长轴和平均角速度
3. 计算摄动项
4. 积分平均根数
5. 计算真位置和速度

## SDP4模型

### 适用范围

| 条件 | 参数 |
|------|------|
| 轨道周期 | ≥225分钟 |
| 半长轴 | ≥48,000 km |
| 轨道类型 | GEO, HEO, 月球 |

### 额外考虑

- 月球引力
- 太阳引力
- 共振效应
- 长期摄动

## 模型方程

### 平均根数到真根数

$$
\begin{aligned}
M_k &= M_0 + \dot{M}(t - t_0) \\
E_k &= M_k + e\sin E_k \\
\nu &= 2\arctan2(\sqrt{1-e}\sin\frac{E_k}{2}, \sqrt{1+e}\cos\frac{E_k}{2})
\end{aligned}
$$

### 位置计算

$$
\vec{r} = r(\cos\nu\hat{P} + \sin\nu\hat{Q})
$$

其中 $\hat{P}, \hat{Q}$ 是近焦点坐标系单位矢量。

### SGP4状态转移

$$
\vec{x}_{SGP4} = f(\vec{x}_0, t - t_0)
$$

## 在ATK中的使用

### TLE导入

```python
# 从TLE创建卫星
tle_line1 = "1 25544U 98067A   24015.50000000  .00016744  00000-0  30000-3 0  9002"
tle_line2 = "2 25544  51.6400 250.0000 0006700  80.0000 280.0000 15.50000000350000"

sat.Orbit.Source = "TLE"
sat.Orbit.TLE = tle_line1 + "\n" + tle_line2
sat.Orbit.Propagator = "SGP4"
```

### 配置SGP4/SDP4

```python
# 设置预报模型
sat.Propagator.Type = "SGP4"

# 设置误差模型
sat.Propagator.UseErrorModel = True

# 设置坐标系统
sat.Propagator.CoordinateSystem = "TEME"
```

### TLE更新

```python
# 手动更新TLE
new_tle_line1 = "1 25544U 98067A   24020.50000000  .00016744  00000-0  30000-3 0  9003"
new_tle_line2 = "2 25544  51.6400 250.5000 0006700  80.5000 280.5000 15.50000000350003"

sat.Orbit.TLE = new_tle_line1 + "\n" + new_tle_line2
```

### 分析工具

```python
# 预报可见弧段
access = Coverage.Access(GroundStation, sat)
access.Constraint.MinElevation = 10  # deg

# 计算碰撞概率
collision = Analysis.CollisionProbability(sat1, sat2)
```

## 模型精度

### 精度特性

| 时间尺度 | 精度 | 说明 |
|----------|------|------|
| 1天 | 1-2 km | 良好 |
| 7天 | 5-10 km | 可接受 |
| 14天 | 10-50 km | 较差 |
| 30天 | 50-100 km | 差 |

### 误差来源

1. **TLE精度**：轨道确定误差
2. **大气模型**：大气阻力简化
3. **光压模型**：未考虑
4. **第三体**：SDP4简化
5. **数值积分**：简化算法

## SGP4与SDP4的切换

### 自动切换

ATK自动根据TLE数据选择：

```python
# 设置自动切换
sat.Propagator.AutoSwitch = True

# 手动设置
sat.Propagator.Model = "SDP4"  # 强制使用SDP4
```

### 判断条件

$$
T = \frac{2\pi}{\sqrt{GM} \cdot n^{3/2}} \begin{cases} < 225 \text{ min} & \rightarrow \text{SGP4} \\ \geq 225 \text{ min} & \rightarrow \text{SDP4} \end{cases}
$$

## 注意事项

1. **TLE时效**：TLE数据越新，预报越准确
2. **模型局限**：SGP4/SDP4是简化模型
3. **坐标系**：输出在TEME坐标系
4. **大气模型**：未考虑太阳活动变化
5. **长周期**：长期预报需使用HPOP
