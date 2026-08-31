---
description: Introduces the syntax specification of the ATK Script language, including data types, operators, flow control, algorithm component property binding, and declarative responsive interface creation.
---

# ATK Script

ATK Script is positioned as a **domain-specific language**. It currently supports basic operators and flow control statements, and natively supports **binding the properties of ATK objects and algorithm components**.

ATK Script also provides some proprietary features, such as direct access to the properties of ATK algorithm components, and introduces the binding assignment operator `=&` and the lazy assignment operator `:=` to support binding script variables to the properties of ATK algorithm components.

Responsive variables can be created via the [reactive keyword](6-界面函数/reactive关键词.md), and custom interfaces can be built by calling UI functions with declarative syntax.

The syntax of ATK Script is mainly modeled on the Julia language, and it implements basic matrix operations, basic mathematical functions, basic plotting functions, UI functions, and ATK-engine-related functions to support extending ATK's computational and interface capabilities.

::: note Note
The ATK Script interpreter is not JIT-optimized; its **interpreted execution efficiency is low**. It is not recommended for computation-intensive tasks and is best suited for the following scenarios:

- Bridging data flows between scene objects during simulation computation.

- Performing automated scenario construction.

- Outputting repetitive data reports.

- Extending computational capabilities that ATK does not yet have without upgrading the software.
:::

## Function Entry

- Run the `ATKConsole` program — `ATKConsole.exe` on Windows, and `ATKConsole.sh` on Linux.

- Open the client in the Integration tab, which uses ATK Script as its interpreter engine.

- Open the console in the Integration tab, where you can select the ATK Script interpreter to run.

## Data Types

The supported basic data types are: floating point (`Double`), integer (`Interger`), and boolean (`Boolean`).

## Basic Operators

1. **Assignment Operators**

| Operator | Description | Remarks |
|:---:  |:--- |:--- |
|`=`    |Direct assignment operator; assigns the computed value of the right-hand expression to the left-hand operand |`c = a + b` |
|`:=`   |Lazy assignment operator; assigns the right-hand expression to the left-hand operand<br>Re-evaluates the right-hand expression each time the left-hand operand is accessed |`a = 1`，`b := a + 1`; `b` now evaluates to `2`<br> Change `a` to `a = 3`; `b` now evaluates to `4` <br> If `b` is reassigned as `b = 2`, the variable `b` no longer has the lazy-evaluation characteristic |
|`=&`   |Binding assignment operator; binds the left-hand operand to the right-hand expression<br>The variable's value and direct assignments stay bound to the right-hand expression| `a=1`，`b =& a`; `b` now evaluates to `1`<br> Change `a` to `a = 3`; `b` now evaluates to `3` <br> Change `b` to `b = 5`; `a` now evaluates to `5`<br>The binding assignment operator can be used to bind the properties of ATK algorithm components |
|`+=` | Add-and-assign operator | `a += 2` |
|`-=` | Subtract-and-assign operator | `a -= 2`|
|`*=` | Multiply-and-assign operator | `a *= 2`|
|`/=` | Divide-and-assign operator | `a /= 2`|

2. **Arithmetic Operators**

| Expression | Description | Remarks |
|:---:  |:--- |:--- |
| `+x` | Unary plus | |
| `-x` | Unary minus | |
| `++x` | Pre-increment | |
| `x++` | Post-increment | |
| `--x` | Pre-decrement | |
| `x--` | Post-decrement | |
| `x + y` | Addition | |
| `x - y` | Subtraction | |
| `x * y` | Multiplication | |
| `x / y` | Division | |

3. **Logical Operators**

| Expression | Description | Remarks |
|:---:  |:--- |:--- |
| `!x` | Logical NOT | Negation |
| `x && y` | Short-circuit AND | In `x && y`, the subexpression `y` is evaluated only when `x` is `true` |
| `x \|\| y` | Short-circuit OR | In `x \|\| y`, the subexpression `y` is evaluated only when `x` is `false` |

4. **Comparison Operators**

| Operator | Description |
|:---:  |:--- |
| `==` | Equal to |
| `!=` | Not equal to |
| `<` | Less than |
| `<=` | Less than or equal to |
| `>` | Greater than |
| `>=` | Greater than or equal to |

Comparison operators support chained comparisons. For example, `1 < 2 == 2 <= 6` is equivalent to `(1 < 2) && (2 == 2) && (2 <= 6)`.

Chained comparisons also have short-circuit behavior.

## Basic Mathematical Functions

For the basic mathematical functions supported by ATK Script, see [Math Functions](3-数学函数/README.md).

## Plotting Functions

For the plotting functions supported by ATK Script, see [Plotting Functions](5-绘图函数/README.md).

## ATK-Related Functions

For the ATK-related functions supported by ATK Script, see [ATK Functions](4-ATK函数/README.md).

## UI Control Functions

For the UI control functions supported by ATK Script, see [UI Functions](6-界面函数/README.md).

## Control Flow

1. **Conditional Statements**

```atks
if x < y

elseif x > y

else

end
```

2. **Loop Statements (for)**

Iterates from `1` to `9` (inclusive)

```atks
for i=1:9

end
```

Iterates from `1` to `9` with a step size of `2`

```atks
for i=1:2:9

end
```

3. **Loop Statements (while)**

```atks
while i <= 5
   i += 1
end
```

Both `while` and `for` loops support `break` and `continue`.

## Binding ATK Algorithm Component Properties

As shown below, insert a sequence segment in maneuver planning, and then insert an initial segment within the sequence segment.

![Task sequence](../../../zh/5.专业使用指南/18-脚本工具/media/5.18脚本工具/image-3.png)

Follow the [usage](#writing-and-executing-scripts) to enter the script editor and write ATK scripts.

```atks
InitialSegment.InitialState.Cartesian.Z = 100

VX =& InitialSegment.InitialState.Cartesian.VX
VX = 10
```

- Line 1: Directly accesses the property of the algorithm component in the ATK script.

- Line 3: Uses the `=&` binding assignment operator to bind the script variable to the property of the algorithm component.

- Line 4: Modifies the value of the variable; the bound ATK algorithm component property is also changed.

Click <kbd>Run Script</kbd>, then return to the configuration interface of the initial segment; you can see that the relevant properties of the algorithm component have been changed by the ATK script.

![Initial segment configuration interface](../../../zh/5.专业使用指南/18-脚本工具/media/5.18脚本工具/image-4.png)

::: note Note
In ATK scripts, changing a property of an algorithm component synchronously changes other properties related to it.

For example, changing the position/velocity property synchronously changes the orbital element property.

Therefore, if the algorithm component properties bound by two script variables are related, changing one variable's value will synchronously affect the other variable's value.

```atks
VX =& InitialSegment.InitialState.Cartesian.VX
Ecc =& InitialSegment.InitialState.Keplerian.Ecc

VX = 10
```

For example, in the ATK script above, after changing the value of the `VX` variable, the value of the `Ecc` variable is synchronously affected.
:::

## Declarative Syntax for Creating Responsive Interfaces

```atks
# Create an initial segment model
initState = NewObject("SegmentInitialState")

# Create responsive variables via the reactive keyword, bidirectionally bound to the properties of the initial segment algorithm model

reactive x_ref      =&  initState.InitialState.Cartesian.X
reactive y_ref      =&  initState.InitialState.Cartesian.Y
reactive z_ref      =&  initState.InitialState.Cartesian.Z
reactive vx_ref     =&  initState.InitialState.Cartesian.VX
reactive vy_ref     =&  initState.InitialState.Cartesian.VY
reactive vz_ref     =&  initState.InitialState.Cartesian.VZ
 
reactive a_ref      =&  initState.InitialState.Keplerian.SmajAx
reactive e_ref      =&  initState.InitialState.Keplerian.Ecc
reactive i_ref      =&  initState.InitialState.Keplerian.Inc
reactive raan_ref   =&  initState.InitialState.Keplerian.RAAN
reactive argper_ref =&  initState.InitialState.Keplerian.ArgPeri
reactive truea_ref  =&  initState.InitialState.Keplerian.TrueA

# Create the interface
CreateDialog(
    Grid(
        ("X",              InputField(x_ref )    ),
        ("Y",              InputField(y_ref )    ),
        ("Y",              InputField(z_ref )    ),
        ("VX",             InputField(vx_ref)    ),
        ("VY",             InputField(vy_ref)    ),
        ("VZ",             InputField(vz_ref)    ),
   
        ("Semi-major Axis",      InputField(a_ref)      ),
        ("Eccentricity",         InputField(e_ref)      ),
        ("Inclination",          InputField(i_ref)      ),
        ("RAAN",                 InputField(raan_ref)   ),
        ("Argument of Perigee",  InputField(argper_ref) ),
        ("True Anomaly",         InputField(truea_ref)  )
    )
)


# Enter the event loop

while(true)
    pause(100)
end
```

![Effect](../../../zh/5.专业使用指南/18-脚本工具/media/2-ATK脚本/image.png)
