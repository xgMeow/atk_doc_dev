---
description: Introduces the functions of the Lambert Target segment, its three solving methods and selection recommendations, and the transfer arc branches, Perturbed Solution, and One Maneuver options.
---

# Lambert Target

## Functional Description

The Lambert Target segment solves for the transfer orbit starting from the current state based on the user-specified desired time and desired final state. Functionally, it is equivalent to a target sequence of {Maneuver Segment – Propagate Segment – Maneuver Segment} under final-state constraints.

The Lambert transfer problem may have multiple solutions or no solution under actual physical conditions. This module solves for the transfer orbit that minimizes the total velocity impulse (i.e., fuel consumption).

The initial state of the Lambert Target segment is inherited from the preceding sequence segment. Its **Orbital** page is similar to that of the Propagate Segment and is used to configure the stopping conditions:

![Orbital page](../../../zh/5.专业使用指南/13-轨道机动规划工具/media/11-Lambert段/image-20260914154508400.png)

The **Algorithm Parameters** page is used to set the target state (that is, the **Desired Final State**):

![Algorithm Parameters page](../../../zh/5.专业使用指南/13-轨道机动规划工具/media/11-Lambert段/image-20260914154538664.png)

After execution, the module computes the impulsive maneuvers at the start and end times and the aiming error of the Desired Final State, and passes the actual final state downward to the next segment.

## Solving Methods

At the top of the **Algorithm Parameters** page, the **Method** drop-down list is used to select the solving method of the Lambert Target segment. Three methods are available.

![Solving methods of the Lambert Target segment](../../../zh/5.专业使用指南/13-轨道机动规划工具/media/11-Lambert段/image-20260914171207218.png)

- **Specified Revolution**: uses adaptive homotopy iterations internally and supports specifying the revolution, the major/minor arc, and the long/short arc.
- **Specified Homotopy Iterations**: the Newton iteration count and the homotopy iteration count can be specified freely. The traversal starts from the fuel-optimal two-body solution and proceeds in fuel-optimal order; it exits as soon as one solution succeeds.
- **Adaptive Homotopy Optimization**: uses adaptive homotopy iterations internally. It first traverses in the direction of the fuel-optimal two-body solution, and after one successful solution, corrects the fuel-optimal order according to the perturbation offset and traverses again to obtain one more successful solution.

### Method Selection Recommendations

- Prefer **Adaptive Homotopy Optimization**; in most cases it finds the fuel-optimal solution.
- If solving fails, switch to **Specified Homotopy Iterations** and set a higher iteration count to solve robustly.
- When the fuel-optimal solution is not required, select **Specified Revolution**, which allows freely specifying the two-body initial values corresponding to the revolution, the major/minor arc, and the long/short arc, and adaptively iterates out the perturbed solution.
  - When using this method, it is recommended to first clear the **Perturbed Solution** check box to solve the two-body solution and confirm that the aiming error is not NaN (an aiming error of NaN means that the two-body solution impacts the Earth), then select **Perturbed Solution** again, so that the perturbed solution using this two-body solution as its initial value can basically be solved.

## Transfer Arc Branches

When the solving method is **Specified Revolution**, the branch to which the transfer arc belongs must also be specified.

![Branch settings for Specified Revolution](../../../zh/5.专业使用指南/13-轨道机动规划工具/media/11-Lambert段/image-20260914172505386.png)

- **Revolution**: the number of times the transfer trajectory returns to the starting point.
- **Major/Minor Arc**: the lines connecting the start point and the end point to the central body respectively form two angles; departing along the angle smaller than 180° is the minor arc, and departing along the angle larger than 180° is the major arc.
- **Long/Short Arc**: under the same transfer direction (major arc or minor arc), the arc with the shorter time to first reach the end point is the short arc, and the one with the longer time is the long arc.

The combinations of major/minor arcs and long/short arcs are shown in the figure below.

<img src="../../../zh/5.专业使用指南/13-轨道机动规划工具/media/11-Lambert段/image-20260914142153278.png" alt="Schematic of the Lambert Target arc branches" style="zoom:50%;" />

## Perturbation, One Maneuver, and Orbit Type

On the **Algorithm Parameters** page, you can set whether to use **Perturbed Solution**, whether to use **Limited to Elliptic**, and whether to use **One Maneuver**. The **Position Tolerance** is the error that the user can tolerate.

![Perturbed Solution, Limited to Elliptic, and One Maneuver options](../../../zh/5.专业使用指南/13-轨道机动规划工具/media/11-Lambert段/image-20260914165505351.png)

- **Perturbed Solution**:
  - When selected, the perturbation force environment is determined by **Propagator - Advanced Settings** on the **Orbital** page;
  - When cleared, the computed Impulsive Maneuver 1 and Impulsive Maneuver 2 are both two-body solutions; since the perturbation force environment is taken into account, the aiming error will deviate considerably.
- **Limited to Elliptic**:
  - When selected, the transfer orbit is restricted to an elliptical orbit;
  - When cleared, the transfer orbit may be parabolic, hyperbolic, or of other types.
- **One Maneuver**:
  - When selected, Impulsive Maneuver 2 is not applied, meaning that the actual final state has a considerable velocity error relative to the Desired Final State, and this error is passed downward.

## Solving Failure Feedback

- When using a method other than **Specified Revolution**, if the Lambert solution fails, the velocity increment is set to 0, which can be used to tell whether the solution succeeded.
- When using **Specified Revolution**, it is recommended to first clear the **Perturbed Solution** check box and confirm that the two-body solution is solvable (the aiming error is not NaN; an aiming error of NaN means that the two-body solution impacts the Earth). If the two-body solution is solvable but the solution still fails, the velocity increment components are likewise set to 0.
