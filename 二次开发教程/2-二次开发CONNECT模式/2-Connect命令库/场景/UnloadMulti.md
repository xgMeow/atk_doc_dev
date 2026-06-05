# UnloadMulti

## 作用

从当前场景移除一个或多个对象及他的子对象

## 用法

```
UnloadMulti <ApplicationPath> <ObjectPath>
```

## 说明

此命令可以使用*设置 ObjectPath 代替完整的名字，所有匹配的对象均会被删除。除此之外和 Unload 命令使用方法相同

## 举例

```
UnloadMulti / */Facility/Fac1
```

```
UnloadMulti / */Facility/Fac*
```
