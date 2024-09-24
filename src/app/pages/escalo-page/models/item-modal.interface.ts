export interface ItemModal {
  icon: string;
  label: string;
  value: string | Date | (Date | null)[];
  pipe?: string;
}
