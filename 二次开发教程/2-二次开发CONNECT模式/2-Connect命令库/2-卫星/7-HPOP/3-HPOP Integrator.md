## HPOP Integrator

- 作用：设置积分算法
- 用法：
```
HPOP <ObjectPath> Integrator <Parameters>
```
`<Parameters>`说明：

- `ReportOnFixedStep { On | Off }` 
 
- `OrbitEps <Value>` 
 
::: tip 注意
使用此命令，必须保证轨道预报器类型为 HPOP
:::

::: note 举例
```
HPOP */Satellite/Satellite1 Integrator ReportOnFixedStep On
```
:::
