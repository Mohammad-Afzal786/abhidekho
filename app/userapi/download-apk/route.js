export async function GET() {
  const githubApkUrl =
    "https://github.com/Mohammad-Afzal786/abhidekhoapi/releases/download/2/AbhiDekho.apk";

  return Response.redirect(githubApkUrl, 302);
}
