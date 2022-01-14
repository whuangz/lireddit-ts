import { __prod__ } from "./constant";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core"
import path from "path/posix";
import { User } from "./entities/User";

export default {
    migrations: {
        path: path.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Post, User],
    dbName: 'lireddit',
    host: "0.0.0.0",
    port: 54320,
    user: 'postgres',
    password: "my_password",
    type: 'postgresql',
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0]


