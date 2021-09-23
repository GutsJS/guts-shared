import { SitePlans } from '..';
import { UsageDoc } from '../types/UsageDoc';

export const PLAN_LIMITS: PlanLimitsConstant = {
  free: {
    reads: 1000,
    writes: 100,
    totalElements: 20,
    pathsPerElement: 20,
  },
};

type PlanLimitsConstant = {
  [key in SitePlans]: UsageDoc & {
    totalElements: number;
    pathsPerElement: number;
  };
};
