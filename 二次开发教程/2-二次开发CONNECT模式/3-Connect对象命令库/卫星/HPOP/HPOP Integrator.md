# HPOP Integrator

## 作用

设置积分算法。

## 语法

```atk-command
HPOP <ObjectPath> Integrator <Parameters>
```

## 参数说明

- `ReportOnFixedStep { On | Off }`
- `OrbitEps <Value>`

::: tip 注意
使用此命令，必须保证轨道预报器类型为 HPOP
:::

## 示例

::: details open **设置积分算法**
```
HPOP */Satellite/Satellite1 Integrator ReportOnFixedStep On
```
:::
