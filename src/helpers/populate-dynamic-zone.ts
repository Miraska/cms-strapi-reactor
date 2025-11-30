/**
 * Dynamic Zone Relations Populator
 * 
 * Helper to properly populate relations inside Dynamic Zone components.
 * Strapi v5 doesn't populate nested relations in Dynamic Zone by default,
 * so we need to manually fetch them using db.query.
 */

import type { Core } from '@strapi/strapi';

// =============================================================================
// TYPES
// =============================================================================

interface RelationConfig {
  /** Field name containing the relation */
  field: string;
  /** Nested fields to populate (e.g., ['image', 'icon']) */
  populate: string[];
}

interface SectionConfig {
  /** Component name (e.g., 'sections.technology-preview') */
  component: string;
  /** Relations to populate */
  relations: RelationConfig[];
}

// =============================================================================
// CONFIGURATION
// =============================================================================

/**
 * Configuration for sections with relations that need deep population
 * Add new sections here as needed
 */
export const SECTION_RELATIONS_CONFIG: SectionConfig[] = [
  {
    component: 'sections.technology-preview',
    relations: [
      {
        field: 'carouselCards',
        populate: ['image', 'icon'],
      },
    ],
  },
  {
    component: 'sections.team-carousel',
    relations: [
      {
        field: 'members',
        populate: ['photo'],
      },
    ],
  },
  {
    component: 'sections.partners-grid',
    relations: [
      {
        field: 'partners',
        populate: ['logo', 'featuredImage'],
      },
    ],
  },
  {
    component: 'partners.hero-section',
    relations: [
      {
        field: 'cta',
        populate: [],
      },
      {
        field: 'mainPlanetImage',
        populate: [],
      },
      {
        field: 'orbitPlanetImage',
        populate: [],
      },
    ],
  },
  {
    component: 'partners.more-than-company-section',
    relations: [
      {
        field: 'backgroundImage',
        populate: [],
      },
      {
        field: 'glowImage',
        populate: [],
      },
    ],
  },
  {
    component: 'sections.features',
    relations: [
      {
        field: 'items',
        populate: ['icon'],
      },
    ],
  },
  {
    component: 'technology.resonant-section',
    relations: [
      {
        field: 'pills',
        populate: [],
      },
      {
        field: 'image',
        populate: [],
      },
    ],
  },
  {
    component: 'technology.scientific-section',
    relations: [
      {
        field: 'bullets',
        populate: [],
      },
      {
        field: 'image',
        populate: [],
      },
    ],
  },
  {
    component: 'technology.controlled-rollout-section',
    relations: [
      {
        field: 'columns',
        populate: ['icon'],
      },
    ],
  },
  {
    component: 'sections.contact-info',
    relations: [
      {
        field: 'benefits',
        populate: [],
      },
    ],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Build populate object for db.query
 * Handles nested populate for relations with media/components
 */
function buildPopulateObject(relations: RelationConfig[]): Record<string, any> {
  const populate: Record<string, any> = {};
  
  for (const relation of relations) {
    if (relation.populate.length > 0) {
      // Build nested populate object for relation fields
      const nestedPopulate: Record<string, boolean> = {};
      for (const field of relation.populate) {
        nestedPopulate[field] = true;
      }
      populate[relation.field] = {
        populate: nestedPopulate,
      };
    } else {
      populate[relation.field] = true;
    }
  }
  
  return populate;
}

/**
 * Populate relations for a single section using db.query
 * This works for both component relations and collection type relations
 */
async function populateSectionRelations(
  strapi: Core.Strapi,
  section: any,
  config: SectionConfig
): Promise<any> {
  try {
    const populateConfig = buildPopulateObject(config.relations);
    
    // Use db.query on the component to get populated relations
    const componentData = await strapi.db.query(config.component).findOne({
      where: { id: section.id },
      populate: populateConfig,
    });

    if (!componentData) {
      return section;
    }

    // Merge populated relations into section
    const populatedSection = { ...section };
    for (const relation of config.relations) {
      if (componentData[relation.field] !== undefined) {
        populatedSection[relation.field] = componentData[relation.field];
      }
    }

    return populatedSection;
  } catch (error) {
    strapi.log.warn(
      `[populate-dynamic-zone] Failed to populate ${config.component}:`,
      error
    );
    return section;
  }
}

// =============================================================================
// MAIN FUNCTION
// =============================================================================

/**
 * Populate all relations in Dynamic Zone sections
 * 
 * @param strapi - Strapi instance
 * @param sections - Array of sections from Dynamic Zone
 * @returns Sections with populated relations
 * 
 * @example
 * ```ts
 * const populatedSections = await populateDynamicZoneSections(strapi, data.sections);
 * ```
 */
export async function populateDynamicZoneSections(
  strapi: Core.Strapi,
  sections: any[] | undefined
): Promise<any[]> {
  if (!sections || !Array.isArray(sections)) {
    return [];
  }

  return Promise.all(
    sections.map(async (section) => {
      // Find config for this section type
      const config = SECTION_RELATIONS_CONFIG.find(
        (c) => c.component === section.__component
      );

      // If no config found, return section as-is
      if (!config) {
        return section;
      }

      // Populate relations for this section
      return populateSectionRelations(strapi, section, config);
    })
  );
}

/**
 * Add a new section config at runtime
 * Useful for plugins or dynamic configuration
 */
export function addSectionConfig(config: SectionConfig): void {
  const existing = SECTION_RELATIONS_CONFIG.find(
    (c) => c.component === config.component
  );
  
  if (existing) {
    // Merge relations
    existing.relations = [...existing.relations, ...config.relations];
  } else {
    SECTION_RELATIONS_CONFIG.push(config);
  }
}
