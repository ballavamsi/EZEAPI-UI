export class UserProjectsResponse{
total: any;
projects: UserProjectsViewModel[];
}

export class UserProjectsViewModel{
    id: any;
    createdBy: any;
    name: string;
    description: string;
    isActive: any;
    createdDate: string;
    updatedBy: string;
    updatedDate: null;
    deletedBy: string;
    deletedDate: null;
    apI_s: [];
    connectionString: string;
    projectKey: string;
    publicKey: string;
    privateKey: string;
    dbEnvironment: string;
    enableEmails: string
  }