# VO Realtimeartic

## 作用

实时设置关节部件的属性。

适用于卫星、地面站、飞机、船、车辆、导弹、火箭共 7 类对象。

## 语法

```atk-command
VO <ObjectPath> Realtimeartic <ArticName> <TransformationName> <Value>
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<ObjectPath>` | 关节所属对象的完整路径，自场景 `*` 起写全，如 `*/Satellite/Sat1`；路径参数的写法参见[命令语法约定](../../../1-命令语法约定.md) |
| `<ArticName>` | 关节部件的名称，来自模型文件中的定义 |
| `<TransformationName>` | 该关节的变换名称，来自模型文件中的定义 |
| `<Value>` | 为该关节的变换设定的值 |

::: warning 注意
`<ArticName>`、`<TransformationName>` 均来自模型文件定义，须与模型文件中的写法一致。
:::

## 示例

::: details open **实时设置卫星关节部件的属性**

```
VO */Satellite/Sat1 Realtimeartic ArmJoint RotationX 45.0
```

- `*/Satellite/Sat1`：关节所属卫星的完整路径
- `ArmJoint`：被设置的关节部件名，来自模型文件定义
- `RotationX`：该关节的变换名，来自模型文件定义
- `45.0`：为该变换设定的值

:::
