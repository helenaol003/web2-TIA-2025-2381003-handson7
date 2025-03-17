import { IsString } from "class-validator";

export class CreateSongDTO /*Data Transfer Object*/{
    @IsString()
    title: string;
    @IsString()
    artist: string;
} 