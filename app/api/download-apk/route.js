export async function GET() {
  const githubApkUrl =
    "https://github.com/Mohammad-Afzal786/MohallaBazaarWeb/releases/download/v1.0.2/MohallaBazaar.apk";

  return Response.redirect(githubApkUrl, 302);
}
