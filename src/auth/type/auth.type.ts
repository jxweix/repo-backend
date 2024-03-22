import { ApiProperty } from "@nestjs/swagger";

export class typeformData {
    @ApiProperty({ example: "152" })
    userId: string

    @ApiProperty({ example: "da fuck" })
    name: string
}