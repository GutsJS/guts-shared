import { SitePlans } from '..';
import { SiteUsageDoc } from '../types/SiteUsageDoc';

export const PLAN_LIMITS: PlanLimitsConstant = {
  free: {
    reads: 1000,
    writes: 100,
    totalElements: 20,
    pathsPerElement: 20,
  },
};

type PlanLimitsConstant = {
  [key in SitePlans]: SiteUsageDoc & {
    totalElements: number;
    pathsPerElement: number;
  };
};
