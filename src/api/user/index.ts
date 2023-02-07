import { User } from "models/User";

export const fetchUser = async () => {
    const res = await fetch('http://localhost:3000/api/user');
    return (await res.json()) as User;
}

export const login = async ({ email, password }: { email: string, password: string }) => {
    // use fetch to login
    const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    return (await res.json()) as User;
}

export const logout = async () => {
    // use fetch to login
    const res = await fetch('http://localhost:3000/api/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!res.ok) {
        throw new Error('Failed to logout');
    }

    return true;
}
