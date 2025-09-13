import { SignJWT, jwtVerify } from "jose";
import type { JwtPayload, JwtVerify } from "@Types/TokenTypes";

export class TokenService {
  private secret = new TextEncoder()
    .encode(process.env.TOKEN_SECRET!);

  private issuer = "urn:example:issuer";
  private audience = "urn:example:audience";

  public async sign(payload: JwtPayload): Promise<string> {
    return await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setAudience(this.audience)
      .setIssuer(this.issuer)
      .setIssuedAt(new Date())
      .sign(this.secret);
  };

  public async verify(token: string): Promise<JwtVerify> {
    return await jwtVerify(token, this.secret, {
      issuer: this.issuer, audience: this.audience
    });
  };
};
