const express = require("express");
const router = express.Router();
const {
  getSummary,
  getCategoryTotals,
  getRecentActivity,
  getMonthlyTrends,
} = require("../controllers/dashboard.controller");
const authenticate = require("../middleware/authenticate");
const authorize = require("../middleware/authorize");

/**
 * @swagger
 * tags:
 *   name: Dashboard
 *   description: Dashboard summary APIs
 */

/**
 * @swagger
 * /api/dashboard/summary:
 *   get:
 *     summary: Get total income, expenses and net balance
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Summary data
 */
router.get(
  "/summary",
  authenticate,
  authorize("admin", "analyst", "viewer"),
  getSummary
);

/**
 * @swagger
 * /api/dashboard/category-totals:
 *   get:
 *     summary: Get category wise totals
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Category totals
 */
router.get(
  "/category-totals",
  authenticate,
  authorize("admin", "analyst", "viewer"),
  getCategoryTotals
);

/**
 * @swagger
 * /api/dashboard/recent-activity:
 *   get:
 *     summary: Get recent 10 transactions
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Recent activity
 */
router.get(
  "/recent-activity",
  authenticate,
  authorize("admin", "analyst", "viewer"),
  getRecentActivity
);

/**
 * @swagger
 * /api/dashboard/monthly-trends:
 *   get:
 *     summary: Get monthly trends
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Monthly trends
 */
router.get(
  "/monthly-trends",
  authenticate,
  authorize("admin", "analyst", "viewer"),
  getMonthlyTrends
);

module.exports = router;