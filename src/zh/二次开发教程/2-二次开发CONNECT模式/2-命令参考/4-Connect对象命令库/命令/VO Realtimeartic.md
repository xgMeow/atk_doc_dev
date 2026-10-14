---
groups: [三维视图, 车辆, 船, 导弹, 地面站, 飞机, 火箭, 卫星]
---

# VO Realtimeartic

## 作用

实时设置关节部件的属性。

## 语法

```atk-command
VO <ObjectPath> Realtimeartic <ArticName> <TransformationName> <Value>
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<ObjectPath>` | 关节所属对象的完整路径，自场景 `*` 起写全，如 `*/Satellite/Sat1`；路径参数的写法参见[命令语法约定](../../1-命令语法约定.md) |
| `<ArticName>` | 关节部件的名称，来自模型文件中的定义 |
| `<TransformationName>` | 该关节的旋转轴名称，来自模型文件中的定义 |
| `<Value>` | 为该关节的旋转轴设定的值 |

::: warning 注意
- `<ArticName>`、`<TransformationName>` 均来自模型文件定义，须与模型文件中的写法一致。
- ATK 提供的**默认模型文件不支持关节设置**，如需设置关节，须自行提供含关节定义的模型文件。
:::

## 适用对象

卫星、地面站、导弹、火箭、船、车辆、飞机

## 示例

::: details open **实时设置关节部件的属性**

```
VO */Satellite/Sat1 Realtimeartic ArmJoint RotationX 45.0
```

- `*/Satellite/Sat1`：关节所属卫星的完整路径
- `ArmJoint`：被设置的关节部件名，来自模型文件定义
- `RotationX`：该关节的旋转轴名，来自模型文件定义
- `45.0`：为该旋转轴设定的值

:::
