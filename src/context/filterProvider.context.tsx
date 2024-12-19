import {createContext, ReactNode, useState} from 'react';

export interface FiltersContextType {
    selectedTechnologies: string[];
    selectedCategories: string[];
    selectedApplications: string[];
    selectedBrands: string[];
    handleFilterChange: (filterType: string, value: string, isChecked: boolean) => void;
    handlerFilterBrands: (value: string, isPressed: boolean) => void;
}

export const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

type FiltersProviderProps = {
    children: ReactNode;
};


export const FiltersProvider = ({ children }: FiltersProviderProps) => {
    const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedApplications, setSelectedApplications] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

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

    const handlerFilterBrands = (value: string, isPressed: boolean) => {
        const updateFilterBrands = (filters: string[]) =>
            isPressed ? [...filters, value] : filters.filter(item => item !== value);
        setSelectedBrands(updateFilterBrands(selectedBrands));
    };

    return (
        <FiltersContext.Provider value={{
            selectedTechnologies,
            selectedCategories,
            selectedApplications,
            selectedBrands,
            handleFilterChange,
            handlerFilterBrands
        }}>
            {children}
        </FiltersContext.Provider>
    );
};

