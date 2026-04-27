# VVLH坐标系

## 概述

VVLH（Velocity Vertical Local Horizontal）坐标系是航天器轨道运动分析中常用的局部坐标系。VVLH以航天器质心为原点，轴向定义与轨道运动状态紧密相关，特别适用于轨道控制、交会对接、编队飞行等任务的分析。

## 定义

### 轴向定义

VVLH坐标系的定义如下：

| 轴 | 名称 | 方向 |
|----|------|------|
| X轴 | 径向（Radial） | 沿地心指向航天器方向，向外为正 |
| Y轴 | 顺轨向（Along-Track） | 沿航天器运动方向，速度方向 |
| Z轴 | 法向（Cross-Track/Normal） | 垂直于轨道平面，指向轨道面正法向 |

### 几何解释

```
           Z (正法向)
            ↑
            |
            |
            ● → X (径向，指向地心)
           /
          / 
         ↓
        Y (顺轨向，速度方向)
        
      地心 ← ← ← ← ← ← ←
```

### 数学定义

假设航天器在地心惯性坐标系中的位置向量为 $\vec{r}$，速度向量为 $\vec{v}$：

$$
\begin{aligned}
\hat{X}_{VVLH} &= \frac{\vec{r}}{|\vec{r}|} \quad \text{（指向地心）} \\
\hat{Y}_{VVLH} &= \frac{\vec{v}_\perp}{|\vec{v}_\perp|} \quad \text{（垂直于径向的速度分量方向）} \\
\hat{Z}_{VVLH} &= \hat{X}_{VVLH} \times \hat{Y}_{VVLH} \quad \text{（轨道面正法向）}
\end{aligned}
$$

其中 $\vec{v}_\perp = \vec{v} - (\vec{v} \cdot \hat{X}_{VVLH}) \hat{X}_{VVLH}$ 是速度的切向分量。

## 特点

1. **物理意义明确**：三个轴分别对应径向、顺轨、法向方向
2. **局部惯性**：在短时间间隔内可视为惯性坐标系
3. **运动跟踪**：Y轴始终指向航天器运动方向
4. **常用于控制**：轨道控制常在VVLH坐标系中定义

## 应用场景

| 应用领域 | 具体用途 |
|----------|----------|
| **轨道控制** | 冲量方向定义、轨道修正 |
| **相对运动** | 编队飞行、星座保持 |
| **交会对接** | 接近轨迹设计、相对导航 |
| **大气密度探测** | 沿轨/垂轨密度梯度 |
| **姿态控制** | 太阳翼对日定向 |

### 轨道控制中的典型应用

轨道提升/降低（火箭沿+Y方向）：

$$
\Delta v = [0, \Delta v_y, 0]_{VVLH}
$$

轨道面内机动（沿X方向）：

$$
\Delta v = [\Delta v_x, 0, 0]_{VVLH}
$$

法向机动（沿Z方向）：

$$
\Delta v = [0, 0, \Delta v_z]_{VVLH}
$$

### 编队飞行中的典型应用

HH-1卫星采用VVLH坐标系描述相对运动方程：

$$
\begin{aligned}
\ddot{x} - 2n\dot{y} - 3n^2 x &= 0 \\
\ddot{y} + 2n\dot{x} &= 0 \\
\ddot{z} + n^2 z &= 0
\end{aligned}
$$

其中 $n$ 为轨道平均角速度。

## 在ATK中的使用

### 配置方法

在ATK中设置VVLH坐标系：

```
参考框架：VVLH
关联对象：卫星名称
```

### ATK配置示例

```python
# 创建VVLH参考框架
vvlh_frame = sat.ReferenceFrame.Create("VVLH_Frame")
vvlh_frame.Type = "VVLH"
vvlh_frame.Origin = "Satellite"

# 在VVLH坐标系中定义位置
sat.Orbit.Locator[VVLH] = [100, 0, 0]  # km，径向100km偏移

# 获取VVLH坐标系下的速度
vel_vvlh = sat.Velocity(VVLH)
```

### 典型输出参数

| 参数 | 说明 | 单位 |
|------|------|------|
| X_VVLH | 径向位置分量 | km |
| Y_VVLH | 顺轨向位置分量 | km |
| Z_VVLH | 法向位置分量 | km |
| Vx_VVLH | 径向速度分量 | km/s |

## 注意事项

1. **随轨道变化**：VVLH坐标系随航天器沿轨道运动而转动
2. **非惯性系**：长时间积分需考虑非惯性效应
3. **近圆轨道简化**：对于近圆轨道，VVLH近似与LVLH一致
4. **奇异性**：在极轨道附近，Z轴方向变化剧烈
