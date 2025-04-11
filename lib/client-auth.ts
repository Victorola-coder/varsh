export async function login(email: string, password: string) {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  return res.json();
}

export async function logout() {
  await fetch("/api/auth/logout", {
    method: "POST",
  });
}

export async function getCurrentUser() {
  const res = await fetch("/api/auth/me");
  if (!res.ok) {
    return null;
  }
  return res.json();
}
