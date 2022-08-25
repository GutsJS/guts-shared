import { SitePlans } from '..';
import { SiteUsageDoc } from '../types/SiteUsageDoc';

export const PLAN_LIMITS: PlanLimitsConstant = {
  free: {
    reads: 1000,
    writes: 100,
    totalElements: 15,
    routesPerElement: 20,
    siteMembers: 2,
    allowsHistory: false,
    hiddenBadge: false,
  },
  basic: {
    reads: 3000,
    writes: 300,
    totalElements: 50,
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
  enterprise: {
    reads: 30000,
    writes: 3000,
    totalElements: 1000,
    routesPerElement: 1000,
    siteMembers: 20,
    allowsHistory: true,
    hiddenBadge: true,
  },
};

export type SiteLimits = Omit<SiteUsageDoc, 'createdAt'> & {
  totalElements: number;
  routesPerElement: number;
  siteMembers: number;
  allowsHistory: boolean;
  hiddenBadge: boolean;
};

type PlanLimitsConstant = {
  [key in SitePlans]: SiteLimits;
};
