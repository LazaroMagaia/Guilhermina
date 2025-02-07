import React from 'react';
import { Link,Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
const Index: React.FC = () => {
    return (
        <AdminLayout>
            <Head title="Usuarios" />
            <h1>User Dashboard</h1>
            <p>Welcome to the user dashboard page.</p>
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