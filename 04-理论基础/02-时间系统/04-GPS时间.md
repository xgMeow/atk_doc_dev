# GPS时间

## 概述

GPS时间（GPST）是美国全球定位系统（GPS）使用的时间系统。GPS时间是连续的时间尺度，不含闰秒，是卫星导航系统内部的时间基准。GPS时间与UTC之间的偏移通过导航电文广播给用户。

## 定义

### 基本特性

| 特性 | 值 |
|------|-----|
| 秒长定义 | SI秒（与TAI相同） |
| 起点 | 1980年1月6日 00:00:00 UTC |
| 参考历元 | 1980-01-06 00:00:00 GPS |
| 与TAI偏移 | 19秒（固定） |
| 周计数 | 10位，0-1023循环 |

### 时间表达

GPS时间采用以下格式表达：

$$
T_{GPS} = \text{Week} \times 604800 + \text{TOW}
$$

其中：
- **Week**：GPS周计数（0起始，模1024）
- **TOW**：周内秒（Time of Week，0-604799）

### Z计数

GPS时间还使用Z计数表示子帧时间：

$$
Z = \text{Week} \times 2^{10} + \frac{\text{SOW}}{1.5}
$$

Z计数每1.5秒递增1，每7680个Z计数（每周）循环。

## 与其他时间系统的关系

### 与TAI的关系

GPS时间与TAI保持固定19秒偏移：

$$
\text{TAI} = \text{GPS} + 19 \text{ s}
$$

### 与UTC的关系

GPS时间与UTC的关系：

$$
\text{UTC} = \text{GPS} - \Delta t_{GPS}
$$

其中 $\Delta t_{GPS} = 19$ 秒（固定），但UTC会因闰秒而变化。

### 时间转换链

```
GPS → TAI → UTC
```

转换公式：

$$
\begin{aligned}
\text{TAI} &= \text{GPS} + 19 \text{ s} \\
\text{UTC} &= \text{TAI} - \Delta \text{AT} \\
          &= \text{GPS} + 19 - \Delta \text{AT} \text{ s}
\end{aligned}
$$

### 历史数据

| 日期 | GPS-UTC (s) |
|------|-------------|
| 1980-01-06 | 0 |
| 1980-01-06 | 0 |
| 1999-01-01 | 13 |
| 2006-01-01 | 14 |
| 2009-01-01 | 15 |
| 2012-07-01 | 16 |
| 2015-07-01 | 17 |
| 2017-01-01 | 18 |

## 在卫星导航中的应用

### 导航电文

GPS导航电文（子帧0）包含以下时间信息：

| 参数 | 说明 | 位数 |
|------|------|------|
| WN | GPS周数 | 10 |
| TOW | 周内秒 | 17 |
| Δt_LS | 闰秒数 | 8 |

### 用户定位

用户接收机进行定位计算时：

1. 测量伪距（包含GPS时间）
2. 解算GPS时间
3. 转换为UTC进行显示
4. 计算用户位置

### 历元表示

GPS数据常用以下历元表示：

```
GPS Week : TOW
例如：2345 : 123456
表示：第2345周的第123456秒
```

## GPS周翻转问题

### 10位周计数

GPS使用10位表示周数，范围0-1023：

$$
\text{Week}_{actual} = \text{Week}_{received} + 1024 \times N
$$

其中 $N$ 是需要确定的周数。

### 翻转时间

| 周计数 | 翻转时间 |
|--------|----------|
| 0 → 1023 | 1980-01-06 到 2019-04-07 |
| 1023 → 0 | 2019-04-07 |

### 解决方案

现代接收机通过以下方式处理：

1. 根据当前日期推断N值
2. 使用增强系统提供的周数信息
3. 多系统联合定位

## 在ATK中的使用

### 配置方法

ATK支持GPS时间系统：

```
时间系统：GPS
```

### ATK配置示例

```python
# 设置GPS时间系统
mission.TimeSystem = GPS
mission.StartTime = "2024-01-01 00:00:00 GPS"

# GPS卫星轨道数据
gps_sat.Orbit.TimeSystem = GPS

# 时间转换
time_gps = Time("2024-01-01 12:00:00 GPS")
time_utc = time_gps.Convert(UTC)
time_tai = time_gps.Convert(TAI)

# 获取GPS周和周内秒
gps_week, sow = Time.GPSWeek(time_gps)
```

### GPS星座分析

```python
# 创建GPS星座
gps_constellation = Constellation.Create("GPS")
gps_constellation.Type = "GPS"
gps_constellation.TimeSystem = GPS

# 可见性分析
access = Coverage.Access(GroundStation, gps_constellation)
access.TimeSystem = GPS
```

## 注意事项

1. **周翻转**：2019年4月7日发生首次周翻转，需注意兼容处理
2. **闰秒广播**：用户需从导航电文获取最新闰秒数
3. **多系统**：GPS与GLONASS、Galileo、北斗的时间互操作性
4. **连续性**：GPS时间连续，UTC因闰秒不连续
