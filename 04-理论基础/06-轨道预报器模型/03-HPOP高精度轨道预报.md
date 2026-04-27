# HPOP高精度轨道预报

## 概述

HPOP（High Precision Orbit Propagator）是一种高精度轨道预报器，使用数值积分方法综合考虑多种摄动力，提供米级甚至厘米级精度的轨道预报。HPOP是卫星精密定轨、精密轨道预报和科学任务分析的标准工具。

## 模型组成

### 摄动力模型

| 摄动类型 | 模型 | 精度贡献 |
|----------|------|----------|
| 地球引力 | EGM96/EGM2008 | ~米级 |
| 大气阻力 | NRLMSISE-00 | ~米-公里级(LEO) |
| 太阳光压 | 球形/面板模型 | ~米级 |
| 第三体引力 | DE430星历 | ~米级 |
| 固体潮 | IERS模型 | ~分米级 |
| 海潮 | IERS模型 | ~分米级 |

### 积分方法

| 方法 | 精度 | 适用场景 |
|------|------|----------|
| RK4 | 中 | 实时仿真 |
| RKF78 | 高 | 批量处理 |
| Adams | 高 | 长期预报 |
| PECE | 最高 | 精密轨道确定 |

## 运动方程

### 完整方程

$$
\ddot{\vec{r}} = \vec{a}_{central} + \vec{a}_{J2n} + \vec{a}_{drag} + \vec{a}_{srp} + \vec{a}_{3body} + \vec{a}_{tide} + \ldots
$$

### 各分量

#### 中心引力

$$
\vec{a}_{central} = -\frac{\mu}{r^3}\vec{r}
$$

#### 地球引力场

$$
\vec{a}_{gravity} = \nabla V_{earth}
$$

#### 大气阻力

$$
\vec{a}_{drag} = -\frac{1}{2}\rho\frac{C_D A}{m}v_{rel}^2\hat{v}_{rel}
$$

#### 太阳光压

$$
\vec{a}_{srp} = -\nu P\frac{C_R A}{m}\hat{S}_{sun}
$$

## 在ATK中的使用

### 基本配置

```python
# 设置HPOP
sat.Propagator.Type = "HPOP"
sat.Propagator.StepSize = 60  # 积分步长(秒)
sat.Propagator.EphemerisStep = 60  # 输出步长

# 精度控制
sat.Propagator.Accuracy = 1e-10
sat.Propagator.RelTol = 1e-10
sat.Propagator.AbsTol = 1e-10
```

### 重力场配置

```python
# 设置地球引力场
Earth.Gravity.Type = "EGM2008"
Earth.Gravity.Order = 70  # 阶数
Earth.Gravity.Degree = 70

# 或使用EGM96
Earth.Gravity.Type = "EGM96"
Earth.Gravity.Order = 50
Earth.Gravity.Degree = 50
```

### 大气阻力配置

```python
# 设置大气模型
Earth.Atmosphere.Type = "NRLMSISE-00"

# 卫星阻力参数
sat.Drag.CD = 2.2  # 阻力系数
sat.Drag.AreaMassRatio = 0.01  # 面积质量比(m²/kg)

# 太阳活动指数
Earth.Atmosphere.F107 = 150  # 当日F10.7
Earth.Atmosphere.F107A = 140  # 81天平均
Earth.Atmosphere.Ap = 15  # 地磁指数
```

### 太阳光压配置

```python
# 太阳光压模型
sat.SolarPressure.Type = "Cannonball"  # 球形模型
sat.SolarPressure.CR = 1.3  # 反射系数
sat.SolarPressure.Area = 20  # 受光面积(m²)

# 或使用面板模型
sat.SolarPressure.Type = "Panel"
sat.SolarPressure.PanelFile = "solar_panels.cfg"
```

### 第三体配置

```python
# 第三体引力
sat.ThirdBody.Moon = True
sat.ThirdBody.Sun = True

# 星历模型
Space.SolarSystem.Ephemeris = "DE430"
```

### 潮汐配置

```python
# 固体潮
Earth.Tide.SolidTide = True

# 海潮
Earth.Tide.OceanTide = True
Earth.Tide.OceanTideModel = "FES2004"
```

### 完整配置示例

```python
# 创建高精度卫星预报器
sat.Propagator.Type = "HPOP"

# 积分器设置
sat.Propagator.Integrator = "Adams"
sat.Propagator.MaxStep = 300  # 最大步长
sat.Propagator.InitialStep = 1  # 初始步长

# 重力场
sat.Propagator.Gravity = True
sat.Propagator.GravityModel = "EGM2008"
sat.Propagator.GravityOrder = 70

# 非球形引力
sat.Propagator.Drag = True
sat.Propagator.SolarPressure = True
sat.Propagator.MoonGravity = True
sat.Propagator.SunGravity = True

# 固体潮汐
sat.Propagator.SolidTide = True
sat.Propagator.OceanTide = True

# 精度
sat.Propagator.Accuracy = 1e-11
```

## 输出与分析

### 轨道数据输出

```python
# 生成星历文件
ephemeris = sat.Orbit.GenerateEphemeris(
    "precise_orbit.pt",
    StepSize=60,
    Format="SPK"
)

# 导出为文本
sat.Orbit.Export(
    "orbit_data.csv",
    TimeSystem="UTC",
    CoordinateSystem="J2000",
    Format="CSV"
)
```

### 精度验证

```python
# 与参考星历比较
reference = OrbitFile.Load("reference.pt")
computed = sat.Orbit.Trajectory

# 计算偏差
deviation = computed - reference
print(f"位置偏差RMS: {RMS(deviation.Position)} m")
print(f"速度偏差RMS: {RMS(deviation.Velocity)} m/s")
```

## 性能考虑

### 计算时间

| 模型复杂度 | 1天预报 | 30天预报 |
|------------|---------|----------|
| J2 | <1秒 | <1秒 |
| J4 | <1秒 | <1秒 |
| HPOP(50x50) | ~1分钟 | ~30分钟 |
| HPOP(100x100) | ~5分钟 | ~2小时 |

### 优化策略

1. **步长自适应**：根据轨道变化率调整
2. **并行计算**：多核并行处理
3. **插值输出**：积分步长与输出步长分离
4. **模型简化**：根据精度需求选择模型

## 注意事项

1. **精度匹配**：确保各模型精度相互匹配
2. **数据质量**：输入参数需准确（面质比、CD等）
3. **计算资源**：高精度模型计算量大
4. **星历时效**：第三体星历需覆盖目标时间
5. **内存使用**：长时间预报需考虑内存
