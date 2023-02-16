'use strict';

/**
 * roda-pe service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::roda-pe.roda-pe');
