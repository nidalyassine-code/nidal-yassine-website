
export enum ProjectCategory {
  WEB_DEV = 'WEB_DEV',
  UI_UX = 'UI_UX',
  BRANDING = 'BRANDING',
  MOBILE = 'MOBILE',
  MOTION = 'MOTION'
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  descriptionEn: string;
  imageUrl: string;
  date: string;
  status: 'PUBLISHED' | 'DRAFT' | 'SCHEDULED';
  tags: string[];
}

export interface NavItem {
  label: string;
  path: string;
  icon: string;
}

export interface KPIStats {
  label: string;
  value: string;
  trend: number;
  icon: string;
  color: string;
}
