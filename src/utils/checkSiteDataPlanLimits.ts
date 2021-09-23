import { GutsElement, PLAN_LIMITS, SiteData } from '..';

import { DOCUMENTATION_LINK } from '../constants/documentationLinks';

export const checkElementLimit = (siteData: SiteData): boolean => {
  return (
    Object.keys(siteData.elements).length >
    PLAN_LIMITS[siteData.plan].totalElements
  );
};

export const checkAllElementsPathLimit = (
  siteData: SiteData
): false | GutsElement[] => {
  const elementsWithIssue = Object.keys(siteData.elements)
    .map((el) => checkElementPathLimit(siteData.elements[el], siteData.plan))
    .filter(Boolean) as GutsElement[];
  return elementsWithIssue.length ? elementsWithIssue : false;
};

export const checkElementPathLimit = (
  element: GutsElement,
  plan: SiteData['plan']
) => {
  return element.paths.length > PLAN_LIMITS[plan].pathsPerElement
    ? element
    : false;
};

/**
 *
 * @param siteData
 * @returns Error message if there is an error or undefined if successful
 */
export const checkSiteDataPlanLimits = (
  siteData: SiteData
): string | undefined => {
  const overElementLimit = checkElementLimit(siteData);
  const overElementPathLimit = checkAllElementsPathLimit(siteData);

  if (!overElementLimit || !overElementPathLimit) {
    return `You have reached the maximum ${overElementLimit ? 'element' : ''}${
      overElementLimit && overElementPathLimit ? ' & ' : ''
    }${overElementLimit ? 'paths' : ''} limit for the ${
      siteData.plan
    } plan. Upgrade for more allowance. Refer to our pricing page for more info: https://gutsjs.com/pricing`;
  }

  return undefined;
};
