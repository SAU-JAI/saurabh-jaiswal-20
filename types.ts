import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: 'Motion Graphics' | 'eLearning' | 'Storytelling' | '3D' | 'All';
  image: string;
  description: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  current: boolean;
}

export interface Skill {
  name: string;
  icon?: React.ReactNode;
  category: 'Software' | 'Core';
}