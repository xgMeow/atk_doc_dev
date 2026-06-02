# VOOrbitSystem

- 作用：设置卫星相对轨迹
- 用法： 
```
VO <VehObjectPath> OrbitSystem {Action} {Options}
```
- 说明：`{Action}`包括属性 `Add`, `Remove`, `Modify`

| Options                      | 说明                         |
| --------------------------   | ---------------------------- |
| `System {SystemDefn}`        | `{SystemDefn}`说明如下        |
| `Color {{Color} \| Default}` | Default 默认不使用自定义颜色   |
| `Show {On \| Off}`           | 是否显示相对轨迹              |

| SystemDefn                                | 说明                  |
| ---------------------------------------   | -------------------  |
| `FixedByWindow`                           | 窗口中心天体固联系     |
| `InertialByWindow`                        | 窗口中心天体惯性系     |
| `<SystemDef>`                             | 添加vgt系             |
| `BBR <PrimaryCBName> <SecondaryCBname>`   | 添加BBR系             |
| `VVLH <ObjTruncPath>`                     | 添加VVLH系            |


::: note 举例
```
VO */Satellite/Satellite1 OrbitSystem Add System "InertialByWindow" Show Off
```
```
VO */Satellite/Satellite1 OrbitSystem Modify System VVLH "Satellite/Satellite3" Color red
```
```
VO */Satellite/Satellite1 OrbitSystem Remove System "CentralBody/Mars Inertial"
```
:::
