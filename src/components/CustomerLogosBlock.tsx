import React from "react";

/**
 * CustomerLogosBlock — RETIRED 2026-10-11 (owner decision: remove every claim the
 * business cannot evidence).
 *
 * It rendered "Trusted by inspection teams in 80+ cities" over a grid of invented,
 * anonymised "customers" ("ADNOC-Approved Inspection Contractor", "Saudi Aramco
 * SAEP-1142 Vendor", "Boeing Tier-1 Aerospace NDT Supplier", ...). None could be
 * evidenced. The three pages that mounted it no longer do; the component now renders
 * nothing so any stray import stays harmless. Do not reintroduce a customer list
 * without named, permissioned references.
 */
export interface CustomerLogosBlockProps {
  title?: string;
  industry?: string;
  subtitle?: string;
}

export const CustomerLogosBlock: React.FC<CustomerLogosBlockProps> = () => null;

export default CustomerLogosBlock;
