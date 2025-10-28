function CategoryFilter({categories, onSelectCategory}) {
    
    return(
        <select
            onChange={(e) => onSelectCategory(e.target.value)}
            style={{padding: "10px", borderRadius: "8px", marginTop: "10px"}}
        >

        <option value="">All Categories</option>
        {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
                {category.name}
            </option>
        ))}
        </select>
    );
}

export default CategoryFilter;