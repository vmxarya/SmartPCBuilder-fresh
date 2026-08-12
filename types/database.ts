export type CoreComponent = "cpu" | "cooler" | "motherboard" | "ram" | "gpu" | "storage" | "psu" | "case";

export type BuildPreference = "cheapest" | "balanced" | "performance" | "premium";

export interface BuildRequest {
  budget: number;
  purpose: string;
  preference: BuildPreference;
  resolution: string;
}

export interface BuildItem {
  component_type: string;
  product_name: string;
  unit_price: number;
}

export interface RecommendationResult {
  items: BuildItem[];
  core_total: number;
  accessories_total: number;
  final_total: number;
  message?: string;
  error?: string;
}
