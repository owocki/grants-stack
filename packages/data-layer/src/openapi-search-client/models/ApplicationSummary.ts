/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime.js";
/**
 *
 * @export
 * @interface ApplicationSummary
 */
export interface ApplicationSummary {
  /**
   *
   * @type {string}
   * @memberof ApplicationSummary
   */
  applicationRef: string;
  /**
   *
   * @type {number}
   * @memberof ApplicationSummary
   */
  chainId: number;
  /**
   *
   * @type {string}
   * @memberof ApplicationSummary
   */
  roundApplicationId: string;
  /**
   *
   * @type {string}
   * @memberof ApplicationSummary
   */
  roundId: string;
  /**
   *
   * @type {string}
   * @memberof ApplicationSummary
   */
  roundName: string;
  /**
   *
   * @type {string}
   * @memberof ApplicationSummary
   */
  projectId: string;
  /**
   *
   * @type {string}
   * @memberof ApplicationSummary
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof ApplicationSummary
   */
  websiteUrl: string;
  /**
   *
   * @type {string}
   * @memberof ApplicationSummary
   */
  logoImageCid: string | null;
  /**
   *
   * @type {string}
   * @memberof ApplicationSummary
   */
  bannerImageCid: string | null;
  /**
   *
   * @type {string}
   * @memberof ApplicationSummary
   */
  summaryText: string;
  /**
   *
   * @type {string}
   * @memberof ApplicationSummary
   */
  payoutWalletAddress: string;
  /**
   *
   * @type {number}
   * @memberof ApplicationSummary
   */
  createdAtBlock: number;
  /**
   *
   * @type {number}
   * @memberof ApplicationSummary
   */
  contributorCount: number;
  /**
   *
   * @type {number}
   * @memberof ApplicationSummary
   */
  contributionsTotalUsd: number;
}

/**
 * Check if a given object implements the ApplicationSummary interface.
 */
export function instanceOfApplicationSummary(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && "applicationRef" in value;
  isInstance = isInstance && "chainId" in value;
  isInstance = isInstance && "roundApplicationId" in value;
  isInstance = isInstance && "roundId" in value;
  isInstance = isInstance && "roundName" in value;
  isInstance = isInstance && "projectId" in value;
  isInstance = isInstance && "name" in value;
  isInstance = isInstance && "websiteUrl" in value;
  isInstance = isInstance && "logoImageCid" in value;
  isInstance = isInstance && "bannerImageCid" in value;
  isInstance = isInstance && "summaryText" in value;
  isInstance = isInstance && "payoutWalletAddress" in value;
  isInstance = isInstance && "createdAtBlock" in value;
  isInstance = isInstance && "contributorCount" in value;
  isInstance = isInstance && "contributionsTotalUsd" in value;

  return isInstance;
}

export function ApplicationSummaryFromJSON(json: any): ApplicationSummary {
  return ApplicationSummaryFromJSONTyped(json, false);
}

export function ApplicationSummaryFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ApplicationSummary {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    applicationRef: json["applicationRef"],
    chainId: json["chainId"],
    roundApplicationId: json["roundApplicationId"],
    roundId: json["roundId"],
    roundName: json["roundName"],
    projectId: json["projectId"],
    name: json["name"],
    websiteUrl: json["websiteUrl"],
    logoImageCid: json["logoImageCid"],
    bannerImageCid: json["bannerImageCid"],
    summaryText: json["summaryText"],
    payoutWalletAddress: json["payoutWalletAddress"],
    createdAtBlock: json["createdAtBlock"],
    contributorCount: json["contributorCount"],
    contributionsTotalUsd: json["contributionsTotalUsd"],
  };
}

export function ApplicationSummaryToJSON(
  value?: ApplicationSummary | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    applicationRef: value.applicationRef,
    chainId: value.chainId,
    roundApplicationId: value.roundApplicationId,
    roundId: value.roundId,
    roundName: value.roundName,
    projectId: value.projectId,
    name: value.name,
    websiteUrl: value.websiteUrl,
    logoImageCid: value.logoImageCid,
    bannerImageCid: value.bannerImageCid,
    summaryText: value.summaryText,
    payoutWalletAddress: value.payoutWalletAddress,
    createdAtBlock: value.createdAtBlock,
    contributorCount: value.contributorCount,
    contributionsTotalUsd: value.contributionsTotalUsd,
  };
}