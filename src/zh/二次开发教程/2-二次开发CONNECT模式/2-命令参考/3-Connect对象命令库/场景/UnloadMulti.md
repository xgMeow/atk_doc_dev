# UnloadMulti

## 作用

从当前场景移除一个或多个对象及他的子对象

## 语法

```atk-command
UnloadMulti <ApplicationPath> <ObjectPath>
```

## 补充说明

- 此命令可以使用 `*` 设置 `ObjectPath` 代替完整的名字，所有匹配的对象均会被删除。除此之外和 `Unload` 命令使用方法相同

## 示例

::: details open **移除指定对象**

```
UnloadMulti / */Facility/Fac1
```

:::

::: details open **使用通配符移除多个对象**

```
UnloadMulti / */Facility/Fac*
```

:::
