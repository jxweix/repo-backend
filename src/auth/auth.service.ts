import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class AuthService {
    private supabase: SupabaseClient;
    private supabaseUrl: string;
    private supabaseKey: string;

    constructor(private readonly configService: ConfigService) {
        this.supabaseUrl = configService.get<string>('YOUR_SUPABASE_URL')
        this.supabaseKey = configService.get<string>('YOUR_SUPABASE_API_KEY')
        this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
    }

    // async getData() {
    //     const { data: user, error } = await this.supabase
    //         .from('user_test')
    //         .select('id')
    //     if (error) {
    //         throw new Error(error.message);
    //     }
    //     return user
    // }

    async getUserId(userId, name) {
        const message = `dat fuck ${userId}!`
        // const user = await this.supabase
        //     .from('userConjoin_front')
        //     .select('id , name')
        //     .eq('id', userId);
        return message;
    }
}