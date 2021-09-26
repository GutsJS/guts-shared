import { GutsElement, PLAN_LIMITS, SiteData } from '..';

export const checkElementLimit = (siteData: SiteData): boolean => {
  return (
    Object.keys(siteData.elements).length >
    PLAN_LIMITS[siteData.plan].totalElements
  );
};

export const checkAllElementsRouteLimit = (
  siteData: SiteData
): false | GutsElement[] => {
  const elementsWithIssue = Object.keys(siteData.elements)
    .map((el) => checkElementRouteLimit(siteData.elements[el], siteData.plan))
    .filter(Boolean) as GutsElement[];
  return elementsWithIssue.length ? elementsWithIssue : false;
};

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
