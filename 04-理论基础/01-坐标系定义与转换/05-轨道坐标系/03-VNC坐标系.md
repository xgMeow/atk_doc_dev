# VNC坐标系

## 概述

VNC（Velocity Normal Cross-track）坐标系是一种以航天器速度矢量为基础定义的局部坐标系。VNC在轨道力学、相对运动分析和姿态控制中有重要应用，特别适用于描述与速度方向相关的物理量。

## 定义

### 轴向定义

VNC坐标系的定义如下：

| 轴 | 名称 | 方向 |
|----|------|------|
| X轴 | 顺轨向（Velocity） | 沿航天器速度方向 |
| Y轴 | 法向（Normal） | 垂直于速度矢量，指向轨道面法向 |
| Z轴 | 叉乘向（Cross-track） | 垂直于XV平面 |

### 几何解释

```
              Y (正法向)
               ↑
               |
               |
               ● ← X (速度方向)
              /
             /
            ↓
           Z (叉乘向)

      地心 ← ← ← ← ← ←
```

### 数学定义

假设航天器在地心惯性坐标系中的位置向量为 $\vec{r}$，速度向量为 $\vec{v}$：

$$
\begin{aligned}
\hat{X}_{VNC} &= \frac{\vec{v}}{|\vec{v}|} \quad \text{（速度方向）} \\
\hat{Y}_{VNC} &= \frac{\vec{r} \times \vec{v}}{|\vec{r} \times \vec{v}|} \quad \text{（角动量方向）} \\
\hat{Z}_{VNC} &= \hat{X}_{VNC} \times \hat{Y}_{VNC} \quad \text{（垂直于速度的平面内）}
\end{aligned}
$$

### 与VVLH/LVLH的对比

| 轴 | VVLH | LVLH | VNC |
|----|------|------|-----|
| 第一轴 | 径向（指向地心） | 垂向（指向地心） | 顺轨（速度方向） |
| 第二轴 | 顺轨 | 水平 | 法向 |
| 第三轴 | 法向 | 法向 | 叉乘 |

## 特点

1. **速度基准**：以速度矢量作为主轴，物理意义明确
2. **自然跟随**：坐标系统随轨道运动自然变化
3. **冲量方向**：轨道机动冲量常在VNC系中表示
4. **适用范围**：特别适合描述相对运动方程

## 应用场景

| 应用领域 | 具体用途 |
|----------|----------|
| **轨道控制** | 冲量方向优化 |
| **相对运动** | C-W方程推导 |
| **轨道设计** | Lambert转移问题 |
| **导航** | 速度增量计算 |
| **能量分析** | 动能、势能计算 |

### C-W方程（ Clohessy-Whitthee方程）

在VNC坐标系中，线性化的相对运动方程（C-W方程）为：

$$
\begin{aligned}
\ddot{x} - 2n\dot{y} - 3n^2 x &= \frac{F_x}{m} \\
\ddot{y} + 2n\dot{x} &= \frac{F_y}{m} \\
\ddot{z} + n^2 z &= \frac{F_z}{m}
\end{aligned}
$$

其中：
- $x, y, z$ 为VNC坐标系中的相对位置分量
- $n$ 为目标轨道平均角速度
- $F$ 为控制力

### 轨道机动分析

轨道抬升（正向）：

$$
\Delta v = [\Delta v_x, 0, 0]_{VNC}
$$

轨道圆化（径向）：

$$
\Delta v = [0, \Delta v_y, 0]_{VNC}
$$

高度调整（法向）：

$$
\Delta v = [0, 0, \Delta v_z]_{VNC}
$$

## 在ATK中的使用

### 配置方法

在ATK中设置VNC坐标系：

```
参考框架：VNC
关联对象：卫星名称
```

### ATK配置示例

```python
# 创建VNC参考框架
vnc_frame = sat.ReferenceFrame.Create("VNC_Frame")
vnc_frame.Type = "VNC"
vnc_frame.Origin = "Satellite"

# 在VNC坐标系中定义位置
rel_pos = [10, 0, 5] @ VNC(Sat1)  # km

# 获取VNC坐标系下的速度
vel_vnc = sat.Velocity(VNC)
```

### 典型应用场景配置

| 场景 | 推荐坐标系 | 说明 |
|------|------------|------|
| 编队飞行相对运动 | VNC | 自然跟随速度方向 |
| 轨道转移分析 | VNC | 冲量方向明确 |
| 交会对接 | VVLH | 径向控制为主 |

## 坐标转换

### VNC到惯性系的转换矩阵

$$
R_{VNC \to ECI} = \begin{bmatrix} \hat{X}_{VNC} & \hat{Y}_{VNC} & \hat{Z}_{VNC} \end{bmatrix}^T
$$

### 惯性系到VNC的转换

$$
\begin{pmatrix} x \\ y \\ z \end{pmatrix}_{VNC} = R_{VNC \to ECI} \cdot \begin{pmatrix} \Delta r_x \\ \Delta r_y \\ \Delta r_z \end{pmatrix}_{ECI}
$$

## 注意事项

1. **近拱点/远拱点**：在轨道近拱点和远拱点，速度方向变化剧烈
2. **椭圆轨道**：椭圆轨道中VNC方向变化比圆轨道更复杂
3. **法向稳定性**：角动量方向的奇异性问题
4. **数值稳定性**：长时间积分需注意旋转累积
