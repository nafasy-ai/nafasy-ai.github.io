// export const withBasePath = (path: string) => `/nafasy-ai.github.io${path}`;
const isGithubPages = process.env.NEXT_PUBLIC_DEPLOY_TARGET === 'github';

export const withBasePath = (path: string) =>
  isGithubPages ? `/nafasy-ai.github.io${path}` : path;
