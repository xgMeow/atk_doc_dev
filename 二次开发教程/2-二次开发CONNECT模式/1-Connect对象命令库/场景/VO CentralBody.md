# VO CentralBody

## 作用

三维中心天体、坐标系视点显示

## 语法

```atk-command
VO <ScenarioPath> CentralBody <CBName> [<WinNumber>]
```

```atk-command
VO <ScenarioPath> CentralBody "<ObjectPath> <Point> <Axes>"
```

## 示例

::: details open **设置三维中心天体为火星**

```
VO * CentralBody Mars
```

:::

::: details open **设置对象坐标系视点**

```
VO * CentralBody "Satellite/Satellite1 PointFixed AxesFixed"
```

:::
