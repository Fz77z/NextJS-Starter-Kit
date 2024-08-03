// app/adapters/userAdapter.ts
import { db } from "@/db/setup";
import { users } from "@/db/schemas/schema";

export async function UserAdapter() {
  return {
    async createUser(profile: {
      id: any;
      name: any;
      email: any;
      emailVerified: any;
      image: any;
    }) {
      const user = await db
        .insert(users)
        .values({
          id: profile.id,
          name: profile.name,
          email: profile.email,
          emailVerified: profile.emailVerified,
          image: profile.image,
        })
        .returning()
        .get();

      return user;
    },
  };
}
