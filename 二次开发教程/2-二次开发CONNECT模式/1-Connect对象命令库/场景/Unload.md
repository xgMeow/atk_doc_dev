# Unload

## 作用

移除一个场景或者一个对象

## 语法

```
Unload <ApplicationPath> <ObjectPath> [RemAssignedObjs]
```

## 补充说明

- 命令会从场景移除此对象及他的子对象。对象文件不会从系统删除。

## 示例

::: details open **移除当前场景**

```
Unload / *
```

:::
