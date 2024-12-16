import {useState} from "react";

export const useFilters = () => {
    const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedApplications, setSelectedApplications] = useState<string[]>([]);

    const handleFilterChange = (filterType: string, value: string, isChecked: boolean) => {
        const updateFilters = (filters: string[]) =>
            isChecked ? [...filters, value] : filters.filter(item => item !== value);

        if (filterType === 'categories') {
            setSelectedCategories(updateFilters(selectedCategories));
        } else if (filterType === 'technologies') {
            setSelectedTechnologies(updateFilters(selectedTechnologies));
        } else if (filterType === 'applications') {
            setSelectedApplications(updateFilters(selectedApplications));
        }
    };

    return {
        selectedTechnologies,
        selectedCategories,
        selectedApplications,
        handleFilterChange
    };
};
