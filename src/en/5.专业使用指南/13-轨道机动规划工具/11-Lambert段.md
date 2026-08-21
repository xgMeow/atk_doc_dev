# Lambert Target

**Lambert Target**: Solves for the transfer orbit from the current state based on the user‑specified desired time and desired final state. Functionally, it is roughly equivalent to a target sequence of {Maneuver Segment – Propagate Segment – Maneuver Segment} under final‑state constraints.

The Lambert transfer problem may have multiple solutions or no solution under actual physical conditions. This module solves for the transfer orbit that minimizes the total velocity impulse (i.e., fuel consumption). The initial state of the Lambert Target segment is inherited from the preceding sequence segment. Its orbit settings page is similar to that of the Propagate Segment, and the algorithm parameters page allows setting the target state, i.e., the aiming state. After execution, it computes the impulsive maneuvers at the start and end times, as well as the aiming error, and passes the actual final state downward to the next segment.

![Orbit Settings Page](../../../zh/5.专业使用指南/13-轨道机动规划工具/media/5.3轨道机动规划工具/image-30_zy.png)

![Algorithm Parameters Page](../../../zh/5.专业使用指南/13-轨道机动规划工具/media/5.3轨道机动规划工具/image-31_zy.png)

The Lambert Target segment allows you to set, on the algorithm parameters page, whether to consider perturbations, whether to apply a single impulsive maneuver, and whether to restrict to elliptical orbits. These represent some functional branches of the Lambert Target segment. The aiming error shown above is the user‑tolerable error.

- If **Consider Perturbation** is checked, the perturbation force environment is determined by the Orbit Settings → Propagator → Advanced Settings. If unchecked, both Impulsive Maneuver 1 and Impulsive Maneuver 2 are computed as two‑body solutions, and the aiming error will be relatively large due to the perturbed force environment.
- If **Single Impulsive Maneuver** is checked, Impulsive Maneuver 2 will not be applied. In this case, the actual final state will have a significant velocity error relative to the aiming state, and this error is passed downward.
- If **Restrict to Elliptical Orbit** is checked, the transfer orbit is constrained to be elliptical. If unchecked, the transfer orbit may be parabolic, hyperbolic, or other types.