export type Language = 'ar' | 'fr';

export interface ButtonContent {
  text: string;
  action?: string;
}

export interface OfferContent {
  name: string;
  price: string;
  features: string[];
  button: string;
  isPopular?: boolean;
}

export interface ContentStructure {
  labels: {
    recommended: string;
  };
  header: {
    title: string;
    subtitle: string;
    button: ButtonContent;
  };
  body: {
    description: string;
    offers: OfferContent[];
  };
  footer: {
    text: string;
    trustMessage: string;
    contact: {
      phone: string;
      whatsapp: boolean;
    };
  };
}

export interface AppContent {
  ar: ContentStructure;
  fr: ContentStructure;
}