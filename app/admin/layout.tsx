"use client";

import { AuthProvider, useAuth } from "./context/auth-context";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ProtectedContent>{children}</ProtectedContent>
    </AuthProvider>
  );
}

function ProtectedContent({ children }: { children: React.ReactNode }) {
  const { loading, user } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // Login page is handled by the auth provider's redirect
  if (!user) {
    return null;
  }

  return <>{children}</>;
}

export default AdminLayout;
