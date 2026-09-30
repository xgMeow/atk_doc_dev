# VO RefreshArticState

## 作用

强制按当前时刻重新求值对象三维模型的关节状态。

对象三维模型中的关节部件会随场景时间改变；本命令令其关节状态在当前时刻重新计算一次。

适用于卫星、地面站、飞机、船、车辆、导弹、火箭共 7 类对象。

## 语法

```atk-command
VO <ObjectPath> RefreshArticState
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<ObjectPath>` | 关节所属对象的完整路径，自场景 `*` 起写全，如 `*/Satellite/Shuttle`；路径参数的写法参见[命令语法约定](../../../1-命令语法约定.md) |

本命令不接受其他参数。

## 示例

::: details open **刷新航天飞机的关节状态**

```
VO */Satellite/Shuttle RefreshArticState
```

- `*/Satellite/Shuttle`：关节所属航天飞机的完整路径
- `RefreshArticState`：令该对象的关节状态按当前时刻重新求值

:::
