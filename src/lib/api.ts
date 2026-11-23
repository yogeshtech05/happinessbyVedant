export interface ApiResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}

const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000").replace(/\/$/, "");

export async function apiRequest<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const url = path.startsWith("http") ? path : `${API_URL}${path}`;
  const res = await fetch(url, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }

  const json = (await res.json()) as ApiResult<T>;
  if (!json.success || json.data === undefined) {
    throw new Error(json.error ?? "API request failed");
  }
  return json.data;
}
