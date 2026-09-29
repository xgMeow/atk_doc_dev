# Swath

## 作用

在二维视图中显示飞行器刈幅。

适用于卫星、飞机、导弹、火箭共 4 类对象。

## 语法

```atk-command
Swath <ObjectPath> {Type} <Value> [{DisplayOption}]
```

## 参数说明

`{Type}` 决定刈幅的类型，可取下列取值：

| `{Type}` | 含义 | `<Value>` |
|------|------|------|
| `Elevation` | 地面仰角 | 以**度**为单位，取 `0.0`～`90.0` |
| `HalfAngle` | 飞行器半锥角 | 以**度**为单位，取 `0.0`～`90.0` |
| `HalfWidth` | 刈幅半幅宽 | 以 Connect 距离单位计，参见[单位格式](../../2-参数值格式/单位格式.md)，须大于或等于 `0.0` 米 |
| `ElevationEnvelope` | 地面仰角包络 | 以**度**为单位，取 `0.0`～`90.0` |
| `HalfAngleEnvelope` | 飞行器半锥角包络 | 以**度**为单位，取 `0.0`～`90.0` |

`{DisplayOption}` 为可选项，决定刈幅的绘制方式，可取下列取值：

| `{DisplayOption}` | 含义 |
|------|------|
| `Edge` | 显示边缘 |
| `Filled` | 显示填充 |
| `None` | 不显示 |

::: warning 注意
若不给出 `{DisplayOption}`，刈幅会被置为 **Off**（不显示）。
:::

## 示例

::: details open **显示填充形式的刈幅**

```
atkConnect(conID,'Swath','*/Satellite/Satellite1 Elevation 10.0 Filled')
```

- `'Swath'`：命令类别
- `'*/Satellite/Satellite1 Elevation 10.0 Filled'`：为卫星 `Satellite1` 显示**地面仰角**为 `10.0` 度的刈幅，并以**填充**方式绘制

:::
