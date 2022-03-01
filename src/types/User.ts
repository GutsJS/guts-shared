export type DBUser = {
  firstName?: string;
  lastName?: string;
};

export type SiteUserData = {
  role: 'owner' | 'admin' | 'member';
};

export type TransformedUser = DBUser & {
  id: string;
  readonly formattedName: string;
};

export const transformUser = async (rawDoc: any) => {
  const userObj: TransformedUser = {
    id: rawDoc.id,
    ...(rawDoc.data() as DBUser),
    get formattedName() {
      return `${this.firstName ? this.firstName + ' ' : ''}${
        this.lastName ? this.lastName : ''
      }`;
    },
  };

  return userObj;
};
