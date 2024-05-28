import { apiResponse } from "./apiResponse";

export default interface errorResponse extends apiResponse {
  stack?: string;
}
