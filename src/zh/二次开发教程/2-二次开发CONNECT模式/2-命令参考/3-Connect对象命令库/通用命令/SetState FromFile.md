---
description: 使用星历文件设置对象状态。
---

# SetState FromFile

## 作用

使用星历文件设置对象状态。

## 语法

```atk-command
SetState <VehObjectPath> FromFile "<FilePath>"
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<VehObjectPath>` | 对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<FilePath>` | 星历文件路径，须使用双引号，如 `"C:\atk\User\Data\EphemFile.e"` |

## 适用对象

卫星、导弹、火箭

## 示例

::: details open **使用星历文件设置对象状态**
```
SetState */Satellite/Satellite1 FromFile "C:\atk\User\Data\EphemFile.e"
```
:::

::: details open **使用星历文件设置卫星对象状态**
```
SetState */Satellite/Satellite1 FromFile "C:\atk\User\Data\EphemFile.e"
```
:::

::: details open **使用星历文件设置导弹弹道**
```
SetState */Missile/Missile1 FromFile "C:\atk\User\Data\EphemFile.e"
```
:::

::: details open **使用星历文件设置火箭弹道**
```
SetState */LaunchVehicle/LaunchVehicle1 FromFile "C:\atk\User\Data\EphemFile.e"
```
:::
