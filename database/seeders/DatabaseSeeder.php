<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Lazaro Magaia',
            'email' => 'llmagaia2@gmail.com',
            'phone' => '827017601',
            'role' => 'admin',
        ]);
        User::factory()->create([
            'name' => 'Guilhermina Matusse',
            'email' => 'guilhermina@gmail.com',
            'phone' => '827017602',
        ]);
    }
}
