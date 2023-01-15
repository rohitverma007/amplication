import { Module } from "@nestjs/common";
import { MorganModule } from "nest-morgan";
import { PrismaModule } from "nestjs-prisma";

declare class IMPORTS_ARRAY {}
declare class EXPORT_ARRAY {}
@Module({
  imports: IMPORTS_ARRAY,
  exports: EXPORT_ARRAY,
})
export class MODULE_BASE {}
