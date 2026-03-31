// Cloudflare Pages Function — returns visitor country code
export function onRequestGet(context) {
  const country = context.request.headers.get("CF-IPCountry") || "UNKNOWN";
  return new Response(JSON.stringify({ country }), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}
