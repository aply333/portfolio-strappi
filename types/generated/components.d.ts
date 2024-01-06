import type { Schema, Attribute } from '@strapi/strapi';

export interface LandingAbout extends Schema.Component {
  collectionName: 'components_landing_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.RichText;
    Image: Attribute.Media;
  };
}

export interface LandingContact extends Schema.Component {
  collectionName: 'components_landing_contacts';
  info: {
    displayName: 'Contact';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Excerpt: Attribute.RichText;
    Contact: Attribute.Relation<
      'landing.contact',
      'oneToMany',
      'api::contact.contact'
    >;
  };
}

export interface LandingGallery extends Schema.Component {
  collectionName: 'components_landing_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'apps';
  };
  attributes: {
    Projects: Attribute.Relation<
      'landing.gallery',
      'oneToMany',
      'api::project.project'
    >;
  };
}

export interface LandingIntroLanding extends Schema.Component {
  collectionName: 'components_landing_intro_landings';
  info: {
    displayName: 'Intro';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Excerpt: Attribute.Text;
    Image: Attribute.Media;
  };
}

export interface LandingStack extends Schema.Component {
  collectionName: 'components_landing_stacks';
  info: {
    displayName: 'Stack';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Stacks: Attribute.Relation<
      'landing.stack',
      'oneToMany',
      'api::stack-item.stack-item'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'landing.about': LandingAbout;
      'landing.contact': LandingContact;
      'landing.gallery': LandingGallery;
      'landing.intro-landing': LandingIntroLanding;
      'landing.stack': LandingStack;
    }
  }
}
