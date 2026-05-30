## VO SetVectorGeometry

- 作用：设置传感器向量
- 用法： 
```
VO <ObjectPath> SetVectorGeometry {Option} <Parameters>
```

::: details 详细说明（点击展开）

| {Option} | `<Parameters>` |
| ----------------- | ---------- | 
|   Add         | `"<ReferenceCrdn>" [{DisplayOption} <DisplayValue>...]`       | 
|   Modify         | `"<ReferenceCrdn>" [{DisplayOption} <DisplayValue>...]`      | 
|   Delete         | `"<ReferenceCrdn>"`  |  

**注意： ReferenceCrdn 必须使用双引号**

- 若{Option}输入为Add或Modify，以下参数适用所有类型

| {DisplayOption} | `<DisplayValue>`                   |
| ------------- | ------------------------------- |
| Show          | `{On \| Off}`                     |
| ShowLabel          | `{On \| Off}`                     |
| Color          | `{Color}`                     |


- 若{Option}输入为Add或Modify，以下参数仅适用Axes和Vector

| {DisplayOption} | `<DisplayValue>`                   |
| ------------- | ------------------------------- |
| Thickness          | `<Value>`                     |
| RefCrdn          | `"<ReferenceCrdn>"`                     |
| DrawAtCB          | `{On \| Off}`                     |
| OriginPointDef          | `"{ReferenceCrdn}"`                     |
| usetruescale          | `{On \| Off}`                     | 

- 若{Option}输入为Add或Modify，以下参数仅适用Vector

| {DisplayOption} | `<DisplayValue>`                    |
| ------------- | ------------------------------- | 
| usetruescale          | `{On \| Off}`                     | 
:::


::: note 举例
```
VO */Satellite/Satellite1/Sensor/Sen1 SetVectorGeometry Add "Satellite/Satellite1 J2000 Axes" Show On Color red
```
```
VO */Satellite/Satellite1/Sensor/Sen1 SetVectorGeometry Modify "Satellite/Satellite1 J2000 Axes" Show Off
```
:::
