export interface UserSingle {
  data: UserNewFeatures;
  support: Support;
}

export interface UserResponse {
  data: UserNewFeatures[];
  page: number;
  per_page: number;
  support: Support;
  total: number;
  total_pages: number;
}

export interface UserNewFeatures {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

export interface Support {
  text: string;
  url: string;
}
