import { MyContext } from "src/types";
import { Arg, Ctx, Field, InputType, Mutation, Resolver } from "type-graphql";
import argon2  from "argon2";
import { User } from "src/entities/User";


@InputType()
class UserPasswordInput {
    @Field()
    username: string
    @Field()
    password: string
}

@Resolver()
export class UserResolver {
    @Mutation(() => User)
    async resgister(
        @Arg("options") options: UserPasswordInput,
        @Ctx() { em }: MyContext
    ): Promise<User> {
        const hashed = await argon2.hash(options.password)
        const user = await em.create(User, {
            username: options.username,
            password: hashed
        })
        await em.persistAndFlush(user)
        return user
    }
}