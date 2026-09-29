# GroundEllipse_R

## 作用

获取二维视图中的地面椭圆属性，即对象的椭圆集数据。

适用于飞机、船、车辆、卫星、导弹、火箭共 6 类对象。

## 语法

```atk-command
GroundEllipse_R <VehObjectPath> {GetAllSets [IncludeEmptySets] | GetSetEllipses <SetName>}
```

## 参数说明

`{GetAllSets [IncludeEmptySets] | GetSetEllipses <SetName>}` 决定获取哪一部分数据，须从下列取值中选取一个：

| 取值 | 说明 |
|------|------|
| `GetAllSets [IncludeEmptySets]` | 获取该对象**全部**椭圆集的数据。默认**不**返回空椭圆集；若要连空椭圆集一并返回，须再带上关键字 `IncludeEmptySets`。 |
| `GetSetEllipses <SetName>` | 返回指定椭圆集的信息。 |

## 示例

::: details open **获取全部椭圆集（含空集）**

```
atkConnect(conID,'GroundEllipse_R','*/GroundVehicle/GroundVehicle1 GetAllSets IncludeEmptySets')
```

- `'GroundEllipse_R'`：命令名
- `'*/GroundVehicle/GroundVehicle1 GetAllSets IncludeEmptySets'`：获取当前场景下车辆 `GroundVehicle1` 的全部椭圆集，并**连空椭圆集一并返回**

:::

::: tip 相关参考

- [GroundEllipse](GroundEllipse.md)：设置二维视图中的地面椭圆属性

:::
