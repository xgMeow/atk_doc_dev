# GetObject

## 作用

通过对象路径获取ATK对象

## 语法

```atks
GetObject(objectPath)
```

## 补充说明

输入对象路径 `objectPath`，返回一个路径对应的ATK对象

## 示例

::: details open **获取ATK对象**

```atks
sat = GetObject("Satellite/satellite1")
sensor = GetObject("Satellite/satellite1/Sensor/sensor1")
```

:::
