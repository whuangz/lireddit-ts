"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220110134054 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220110134054 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "user" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" jsonb not null, "username" text not null, "password" text not null);');
        this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');
        this.addSql('alter table "post" drop constraint if exists "post_created_at_check";');
        this.addSql('alter table "post" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
        this.addSql('alter table "post" alter column "created_at" set default \'NOW()\';');
    }
}
exports.Migration20220110134054 = Migration20220110134054;
//# sourceMappingURL=Migration20220110134054.js.map