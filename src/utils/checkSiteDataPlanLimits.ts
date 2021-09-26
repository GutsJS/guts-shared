import { GutsElement, PLAN_LIMITS, SiteData } from '..';

/**
 * @param siteData
 * @returns boolean whether there are more elements than allowed;
 * False = under limit;
 * True = OVER limit;
 */
export const checkElementLimit = (siteData: SiteData): boolean => {
  if (!siteData?.elements) return false;
  return (
    Object.keys(siteData.elements).length >
    PLAN_LIMITS[siteData.plan].totalElements
  );
};

/**
 *
 * @param siteData
 * @returns false for under limit OR the elements of which have too many routes
 */
export const checkAllElementsRouteLimit = (
  siteData: SiteData
): false | GutsElement[] => {
  if (!siteData?.elements) return false;
  const elementsWithIssue = Object.keys(siteData.elements)
    .map((el) => checkElementRouteLimit(siteData.elements[el], siteData.plan))
    .filter(Boolean) as GutsElement[];
  return elementsWithIssue.length ? elementsWithIssue : false;
};

/**
 *
 * @param element
 * @param plan
 * @returns false for under limit OR the element back if it has too many routes
 */
export const checkElementRouteLimit = (
  element: GutsElement,
  plan: SiteData['plan']
) => {
  return element?.routes?.length &&
    element.routes.length > PLAN_LIMITS[plan].routesPerElement
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
  if (!siteData?.elements) return undefined;
  const overElementLimit = checkElementLimit(siteData);
  const overElementRouteLimit = checkAllElementsRouteLimit(siteData);

  if (overElementLimit || overElementRouteLimit) {
    return `You have reached the maximum ${overElementLimit ? 'element' : ''}${
      overElementLimit && overElementRouteLimit ? ' & ' : ''
    }${overElementLimit ? 'routes' : ''} limit for the ${
      siteData.plan
    } plan. Upgrade for more allowance. Refer to our pricing page for more info: https://gutsjs.com/pricing`;
  }

  return undefined;
};
