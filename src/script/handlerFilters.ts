export const constructFilterURL = (
    baseUrl: string,
    technologies: string[],
    categories: string[],
    applications: string[]
): string => {
    const newUrl = new URL(baseUrl);
    technologies.forEach(item => newUrl.searchParams.append("technologies", item));
    categories.forEach(item => newUrl.searchParams.append("categories", item));
    applications.forEach(item => newUrl.searchParams.append("applications", item));
    return newUrl.toString();
};