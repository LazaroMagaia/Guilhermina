import React from 'react';
import { Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
const Index: React.FC = () => {
    return (
        <AdminLayout>
            <h1>Admin Dashboard</h1>
            <p>Welcome to the admin dashboard page.</p>
            <Link
                href={route('logout')}
                method="post"
                as="button"
            >
                Log Out
            </Link>
        </AdminLayout>
    );
};

export default Index;