import { SitePlans } from '..';
import { SiteUsageDoc } from '../types/SiteUsageDoc';

export const PLAN_LIMITS: PlanLimitsConstant = {
  free: {
    reads: 1000,
    writes: 100,
    totalElements: 20,
    routesPerElement: 20,
    siteMembers: 2,
    allowsHistory: false,
    hiddenBadge: false,
  },
  basic: {
    reads: 3000,
    writes: 300,
    totalElements: 20,
    routesPerElement: 20,
    siteMembers: 5,
    allowsHistory: true,
    hiddenBadge: true,
  },
  premium: {
    reads: 10000,
    writes: 1000,
    totalElements: 200,
    routesPerElement: 200,
    siteMembers: 10,
    allowsHistory: true,
    hiddenBadge: true,
  },
};

type PlanLimitsConstant = {
  [key in SitePlans]: Omit<SiteUsageDoc, 'createdAt'> & {
    totalElements: number;
    routesPerElement: number;
    siteMembers: number;
    allowsHistory: boolean;
    hiddenBadge: boolean;
  };
};
