import type { ComponentType } from "react";

export interface IsidevarItem {
    title: string;
    items:{
        title: string;
        url: string;
        component?: ComponentType;
        isActive?: boolean;
    }[]
}

export type IRole = "ADMIN" | "SENDER" | "RECEIVER";


type ZodIssue = {
  code: string;
  expected: string;
  received: string;
  path: string[];
  message: string;
};

type ErrorSource = {
  path: string;
  message: string;
};

export interface IErrorResponse {
  success: boolean;
  message: string;
  errorSources?: ErrorSource[];
  err?: {
    issues: ZodIssue[];
    name: string;
  };
  stack?: string;
}
