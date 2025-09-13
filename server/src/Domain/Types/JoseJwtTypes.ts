import type { JWTPayload, JWTVerifyResult } from "jose";

export interface JwtPayload extends JWTPayload {
  userId: number;
};

export interface JwtVerify extends JWTVerifyResult<JwtPayload> {};
