# Position

## 作用

获得卫星当前位置数据。

## 语法

```
Position <ObjectPath> [{TimeValue}]
```

## 补充说明

- 返回数据为当前位置 X,Y,Z，当前速度 X,Y,Z

## 示例

::: details open **获得卫星当前位置数据**
```
Position */Satellite/Satellite1 "29 Jul 2023 00:00:00.00"
```
:::
