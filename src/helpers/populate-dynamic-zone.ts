/**
 * Dynamic Zone Relations Populator
 * 
 * Helper to properly populate relations inside Dynamic Zone components.
 * Strapi doesn't populate nested relations in Dynamic Zone by default,
 * so we need to manually fetch them.
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
        populate: ['logo'],
      },
    ],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Build populate object for a relation config
 */
function buildPopulateObject(relations: RelationConfig[]): Record<string, any> {
  const populate: Record<string, any> = {};
  
  for (const relation of relations) {
    populate[relation.field] = {
      populate: relation.populate,
    };
  }
  
  return populate;
}

/**
 * Populate relations for a single section
 */
async function populateSectionRelations(
  strapi: Core.Strapi,
  section: any,
  config: SectionConfig
): Promise<any> {
  try {
    const populateConfig = buildPopulateObject(config.relations);
    
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
      if (componentData[relation.field]) {
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

