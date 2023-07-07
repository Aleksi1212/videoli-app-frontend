type DashboardLayout = 'table' | 'list';
type DashboardLayoutButtonColor = '#101c44' | 'none';

interface DashboardLayoutData {
    layout: DashboardLayout;
    colors: Record<DashboardLayout, DashboardLayoutButtonColor>;
}

type User = {
    id: string;
    name: string;
    email: string;
    profileImage: any;
};
type UserFile = {
    id: string;
    name: string;
    fileImage: any;
};

interface UserData {
    user: User;
    files: UserFile[];
}