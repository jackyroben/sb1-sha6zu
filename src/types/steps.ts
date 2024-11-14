import { ComponentType } from 'react';

export interface Step {
  id: string;
  title: string;
  icon: ComponentType<{ className?: string }>;
  component: ComponentType;
}