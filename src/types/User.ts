export type DBUser = {
  firstName?: string;
  lastName?: string;
};

export type SiteUserData = {
  role: 'owner' | 'admin' | 'member';
};

export type TransformedUser = DBUser & {
  id: string;
  formattedName?: string;
};

export const transformUser = async (rawDoc: any) => {
  const userObj: TransformedUser = {
    id: rawDoc.id,
    ...(rawDoc.data() as DBUser),
  };

  userObj.formattedName = getFormattedName(
    userObj?.firstName,
    userObj?.lastName
  );

  return userObj;
};

export const getFormattedName = (
  firstName: string | undefined,
  lastName: string | undefined
) => {
  return `${firstName ? firstName + ' ' : ''}${lastName ? lastName : ''}`;
};
